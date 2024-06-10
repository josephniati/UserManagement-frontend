import React, { Component } from 'react'; // Importing React and Component from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <header>
          <nav className='navbar navbar-dark bg-primary'>
            {' '}
            {/* Fixed the usage of bg-primary */}
            <div>
              <a href='/users'>User Management App</a>{' '}
              {/* Fixed the anchor element */}
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default HeaderComponent;
