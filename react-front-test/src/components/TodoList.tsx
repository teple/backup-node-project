import * as React from 'react';
import TodoItem from './TodoItem';
import { List } from 'immutable';
import { TodoItemData } from 'store/modules/todos';

interface Props {
  input: string;
  todoItems: List<TodoItemData>;
  onCreate(): void;
  onRemove(id: number): void;
  onToggle(id: number): void;
  onChange(e: any): void;
}

const TodoList: React.SFC<Props> = ({
  input,
  todoItems,
  onCreate,
  onRemove,
  onToggle,
  onChange
  
}) => {
  const todoItemList = todoItems.map(
    todoItem => todoItem
    ? (
      <TodoItem
        key={todoItem.id}
        done={todoItem.done}
        onToggle={() => onToggle(todoItem.id)}
        onRemove={() => onRemove(todoItem.id)}
        text={todoItem.text}
      />
    )
    : null
  );

  // コンポーネントを返す
  return (
    <div>
      <h1>今日のやること</h1>
      <form
        onSubmit={
          (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            onCreate();
          }
        }
      >
        <input onChange={onChange} value={input} />
        <button type="submit">追加する</button>
      </form>
      <ul>
        {todoItemList}
      </ul>
    </div>
  );
};

export default TodoList;