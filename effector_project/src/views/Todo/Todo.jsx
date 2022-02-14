import clsx from 'clsx';
import './style.scss';

export const Todo = ({ label, status }) => {
  const classes = clsx('todo', status);
  return (
    <div className={classes}>
      <p className='todo__label'>{label}</p>
    </div>
  );
};
