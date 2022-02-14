import { TodoSc } from '../../scenarios/TodoSc';
import { v4 as uuid } from 'uuid';

export const TodoList = ({ list }) => {
  return list.map((el) => (
    <TodoSc key={uuid(el)} label={el.label} status={el.status} />
  ));
};
