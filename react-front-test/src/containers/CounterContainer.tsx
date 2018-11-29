import * as React from 'react';
import Counter from 'components/Counter';
import { actionCreators as counterActions } from 'store/modules/counter';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StoreState } from 'store/modules';

// ユーザータイプの定義
type Props = {
  value: number;
  CounterActions: typeof counterActions;
};

class CounterContainer extends React.Component<Props> {

  public onIncrement = () => {
    const { CounterActions } = this.props;
    CounterActions.increment();
  }

  public onDecrement = () => {
    const { CounterActions } = this.props;
    CounterActions.decrement();
  }

  public render() {
    const { onIncrement, onDecrement } = this;
    const { value } = this.props;
    return (
      <Counter
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        value={value}
      />
    );
  }
}

export default connect(
  ({ counter }: StoreState) => ({
    value: counter.value
  }),
  (dispatch) => ({
    CounterActions: bindActionCreators(counterActions, dispatch)
  })
)(CounterContainer);