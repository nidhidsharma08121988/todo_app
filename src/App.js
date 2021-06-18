import './App.css';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import ListState from './context/list/ListState';
import AddTodoForm from './components/todos/AddTodoForm';

function App() {
  return (
    <ListState>
      <Router>
        <div className='App'>
          <Navbar />
          <div className='container py-container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/addTodo' component={AddTodoForm} />
            </Switch>
          </div>
        </div>
      </Router>
    </ListState>
  );
}

export default App;
