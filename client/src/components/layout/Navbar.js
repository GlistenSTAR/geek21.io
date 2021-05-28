import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { clearCurrentProfile } from '../../actions/profileActions';

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a
            href=""
            onClick={this.onLogoutClick.bind(this)}
            className="nav-link"
          >
            <img
              className="rounded-circle"
              src={user.avatar}
              alt={user.name}
              style={{ width: '25px', marginRight: '5px' }}
              title="You must have a Gravatar connected to your email to display an image"
            />{' '}
            Logout
          </a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/products">
           ARBITRAGE
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/bitcoin">
           BITCOIN
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/network">
           NETWORKER
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/invest">
           INVEST
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/academy">
           ACADEMY
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
           LOGIN
          </Link>
        </li>
        <li className="nav-item">
          <Link className="btn btn-info" style={{paddingTop: '5px'}} to="/register">
            Sign Up
          </Link>
        </li>
      </ul>
    );

    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
          <div className="container">
            <Link className="navbar-brand display-5" to="/">
              Greek21
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#mobile-nav"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="mobile-nav">
              {isAuthenticated ? authLinks : guestLinks}
            </div>
          </div>
        </nav>
        <div className="pt-5 pb-5"></div>
      </div>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(
  Navbar
);
