import TodoList from '../todos/TodoList';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className='btn-div'>
        {/* this button must route to a new form */}
        <Link to='/addTodo'>
          <button data-testid='add-btn' className='add-btn btn my-2 p-1'>
            + <span className='add-btn-hover'>Add Task</span>
          </button>
        </Link>
      </div>
      <div className='sub-container'>
        <div className='flex-row space-between'>
          <h2 className='heading text-xl'>Things to do</h2>
        </div>
        <div>
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default Home;
