import './App.css';
import React from 'react';

import HeaderComponent from './components/HeaderComponent';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom/cjs/react-router-dom.min';
import CreateUserComponent from './components/CreateUserComponent';
import ListUserComponent from './components/ListUserComponent';
import UpdateUserComponent from './components/UpdateUserComponent';
import Login from './components/Login';
import ViewUserComponent from './components/ViewUserComponent';
import SignUp from './components/SignUp';
import ChangePassword from './components/ChangePassword';

function App() {
  return (
    <div className='App'>
      <Router>
        <HeaderComponent />
        <div className='container'>
          <Switch>
            <Route path='/' exact component={ListUserComponent}></Route>
            <Route path='/users' exact component={ListUserComponent}></Route>
            <Route path='/signup' exact component={SignUp}></Route>
            <Route path='/login' exact component={Login}></Route>

            <Route
              path='/change-password'
              exact
              component={ChangePassword}
            ></Route>

            <Route path='/add-user/:id' component={CreateUserComponent}></Route>
            <Route path='/view-user/:id' component={ViewUserComponent}></Route>

            <Route
              path='/update-user/:id'
              component={UpdateUserComponent}
            ></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
