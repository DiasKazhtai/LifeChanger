import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Auth from './pages/Auth';
import Main from './pages/Main';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/auth' component={Auth} />
        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
