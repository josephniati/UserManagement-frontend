import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherService from '../services/WeatherService';

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWeather: null,
      laterWeather: null,
      isLoggedIn: localStorage.getItem('token') ? true : false,
    };
  }

  componentDidMount() {
    // Fetch current weather and weather for later today
    WeatherService.getWeather()
      .then((response) => {
        const currentWeather = response.data.dataseries[0];
        const laterWeather = response.data.dataseries.find(
          (weather) => weather.timepoint === 12
        ); // Assuming "later today" means at 12:00 PM
        this.setState({ currentWeather, laterWeather });
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });
  }

  handleLogout = () => {
    // Remove token from local storage
    localStorage.removeItem('token');
    // Redirect to login page
    window.location.href = '/login';
  };

  render() {
    const { isLoggedIn, currentWeather, laterWeather } = this.state;

    return (
      <div>
        <header>
          <nav className='navbar navbar-dark bg-primary'>
            <div className='container'>
              <Link to='/users' className='navbar-brand'>
                User Management App
              </Link>
              <div>
                {/* Conditionally render login/logout button */}
                {isLoggedIn ? (
                  <button
                    className='btn btn-light me-2'
                    onClick={this.handleLogout}
                  >
                    Logout
                  </button>
                ) : (
                  <Link to='/login' className='btn btn-light me-2'>
                    Login
                  </Link>
                )}
                {/* Conditionally render signup button */}
                {!isLoggedIn && (
                  <Link to='/signup' className='btn btn-light me-2'>
                    Signup
                  </Link>
                )}
                {/* Link to Change Password */}
                <Link to='/change-password' className='btn btn-light ms-2'>
                  Change Password
                </Link>
              </div>
              {/* Display current weather */}
              {currentWeather && (
                <div className='ml-auto text-light'>
                  <span className='me-2'>
                    Current Weather: {currentWeather.weather}
                  </span>
                  <span>Temperature: {currentWeather.temp2m}°C</span>
                </div>
              )}
              {/* Display weather for later today */}
              {laterWeather && (
                <div className='ml-3 text-light'>
                  <span className='me-2'>
                    Later Today: {laterWeather.weather}
                  </span>
                  <span>Temperature: {laterWeather.temp2m}°C</span>
                </div>
              )}
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default HeaderComponent;
