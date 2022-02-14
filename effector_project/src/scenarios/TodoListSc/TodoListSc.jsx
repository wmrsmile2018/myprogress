import { TodoList } from '../../views/TodoList';

const mockTodoList = [
  { label: 'some text1', status: 'working' },
  { label: 'some text2', status: 'completed' },
  { label: 'some text3', status: 'new' },
];

export const TodoListSc = (props) => {
  return <TodoList list={mockTodoList} />;
};
