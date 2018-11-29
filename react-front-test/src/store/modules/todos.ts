import { Record, List } from 'immutable';
import { createAction, handleActions, Action } from 'redux-actions';

const CREATE = 'todos/CREATE';
const REMOVE = 'todos/REMOVE';
const TOGGLE = 'todos/TOGGLE';
const CHANGE_INPUT = 'todos/CHANGE_INPUT';

type CreatePayload = string;
type RemovePayload = number;
type TogglePayload = number;
type ChangeInputPayload = string;

/**
 * type AnotherPayload = {
 * something: string;
 * like: number;
 * this: boolean;
 * };
 */

export const actionCreators = {
  create: createAction<CreatePayload>(CREATE),
  remove: createAction<RemovePayload>(REMOVE),
  toggle: createAction<TogglePayload>(TOGGLE),
  changeInput: createAction<ChangeInputPayload>(CHANGE_INPUT)
};

/**
 * TodoItemクラス
 * 
 */

const TodoItemRecord = Record({
  id: 0,
  text: '',
  done: false
});

interface TodoItemDataParams {
  id?: number;
  text?: string;
  done?: boolean;
}

export class TodoItemData extends TodoItemRecord {
  public static autoId = 0;
  public id: number;
  public text: string;
  public done: boolean;

  constructor(params?: TodoItemDataParams) {
    const id = TodoItemData.autoId;

    if (params) {
      super({
        ...params,
        id,
      });
      
    } else {
      super({ id });
    }
    TodoItemData.autoId = id + 1;
  }
}


/**
 * Stateクラス
 * 
 */
const TodoStateRecord = Record({
  todoItems: List(),
  input: ''
});

export class TodosState extends TodoStateRecord {
  public todoItems: List<TodoItemData>;
  public input: string;
}

const initialState = new TodosState();

/**
 * アクションハンドル
 */
export default handleActions<TodosState, any>(
  {
    [CREATE]: (state, action: Action<CreatePayload>): TodosState => {
      return <TodosState> state.withMutations(
        stateMutator => {
          stateMutator.set('input', '')
          .update('todoItems', (todoItems: List<TodoItemData>) => todoItems.push(
            new TodoItemData({ text: action.payload })
          ));
        }
      );
    },

    [REMOVE]: (state, action: Action<RemovePayload>): TodosState => {
      return <TodosState> state.update(
        'todoItems',
        (todoItems: List<TodoItemData>) => todoItems.filter(
          todoItem => todoItem
          ? todoItem.id !== action.payload
          : false
        )
      );
    },

    [TOGGLE]: (state, action: Action<TogglePayload>): TodosState => {
      const index = state.todoItems.findIndex(todoItem => todoItem
        ? todoItem.id === action.payload
        : false
        );
      return <TodosState> state.updateIn(['todoItems', index, 'done'], done => !done);
    },

    [CHANGE_INPUT]: (state, action: Action<ChangeInputPayload>): TodosState => {
      return <TodosState> state.set('input', action.payload);
    }

  },
initialState
);