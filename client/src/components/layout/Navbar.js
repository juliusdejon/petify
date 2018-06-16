import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button } from 'material-ui';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { clearCurrentProfile } from '../../actions/profileActions';

import Logo from '../../images/petify-logo.png';
class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser(this.props.history);
  }
  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <nav>
        <div><Link to="/"><img src={Logo} alt="logo" /></Link></div>
        <div className="nav-actions">Welcome {user.name}</div>
        <div><a href="" onClick={this.onLogoutClick.bind(this)}><Button>Logout</Button></a></div>
      </nav>
    );
    const guestLinks = (
      <nav>
        <div><Link to="/"><img src={Logo} alt="logo" /></Link></div>
        <div className="nav-actions"><Link to="/Sell"><Button>Sell A Pet </Button></Link></div>
        <div><Link to="/login"><Button>Login</Button></Link></div>
      </nav>
    );
    return (
      <div>
        {isAuthenticated ? authLinks : guestLinks}
      </div>
    )
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(withRouter(Navbar));
