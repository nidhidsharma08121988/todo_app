import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import Home from './components/pages/Home';
import About from './components/pages/About';
import ListState from './context/list/ListState';
import AlertState from './context/alert/AlertState';
import AddTodoForm from './components/todos/AddTodoForm';
import EditTodoForm from './components/todos/EditTodoForm';

function App() {
  return (
    <ListState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar />
            <Alert />
            <div className='container py-container'>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/addTodo' component={AddTodoForm} />
                <Route
                  exact
                  path='/editTodo/:todoItemId'
                  component={EditTodoForm}
                />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </ListState>
  );
}

export default App;
