import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import TrainerDetails from './component/TrainerDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
            <Route exact path='/' component={TrainerDetails}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
