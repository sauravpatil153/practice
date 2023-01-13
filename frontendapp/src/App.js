import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import EmployeeList from './component/EmployeeList';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={EmployeeList}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
