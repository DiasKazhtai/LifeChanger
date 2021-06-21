import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from './pages/Main';
import Test from './pages/Test/inedx';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/test' component={Test} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
