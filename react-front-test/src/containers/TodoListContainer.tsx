import * as React from 'react';
import { connect } from 'react-redux';
import { StoreState } from 'store/modules';
import TodoList from 'components/TodoList';
import { TodoItemData, actionCreators as todosActions } from 'store/modules/todos';
import { bindActionCreators } from 'redux';
import { List } from 'immutable';

interface Props {
  todoItems: List<TodoItemData>;
  input: string;
  TodosActions: typeof todosActions;
}

class TodoListContainer extends React.Component<Props> {
  public onCreate = () => {
    const { TodosActions, input } = this.props;
    TodosActions.create(input);
  }

  public onRemove = (id: number) => {
    const { TodosActions } = this.props;
    TodosActions.remove(id);
  }

  public onToggle = (id: number) => {
    const { TodosActions } = this.props;
    TodosActions.toggle(id);
  }

  public onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    const { TodosActions } = this.props;
    TodosActions.changeInput(value);
  }

  public render() {
    const { input, todoItems } = this.props;
    const { onCreate, onRemove, onToggle, onChange } = this;

    return(
      <TodoList
        input={input}
        todoItems={todoItems}
        onCreate={onCreate}
        onRemove={onRemove}
        onToggle={onToggle}
        onChange={onChange}
      />
    );
  }
}

export default connect(
  ({ todos }: StoreState) => ({
    input: todos.input,
    todoItems: todos.todoItems,
  }),
  (dispatch) => ({
    TodosActions: bindActionCreators(todosActions, dispatch),
  })
)(TodoListContainer);

