import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Main from './pages/Main';
import Test from './pages/Test/inedx';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/test' component={Test} />
        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
