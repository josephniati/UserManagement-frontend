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

import ViewUserComponent from './components/ViewUserComponent';
function App() {
  return (
    <div className='App'>
      <Router>
        <HeaderComponent />
        <div className='container'>
          <Switch>
            <Route path='/' exact component={ListUserComponent}></Route>
            <Route path='/users' exact component={ListUserComponent}></Route>
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
