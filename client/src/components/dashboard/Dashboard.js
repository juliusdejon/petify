import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCurrentProfile } from '../../actions/profileActions';

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <h4>Loading...</h4>
    } else {
      // Check if logged in user has profile data
      if (Object.keys(profile).length > 0) {
        dashboardContent = <h4> TODO: DISPLAY PROFILE </h4>
      } else {
        // User is logged in but has no profile
        dashboardContent = (
          <div>
            <p> Welcome {user.name} </p>
            <p> You have not yet setup a profile, please add some info</p>
            <Link to="/create-profile">Create Profile</Link>
          </div>
        )

      }
    }
    return (
      <div className="dashboard">
        <div className="container">
          {dashboardContent}
        </div>
      </div>
    )
  }
}
Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, ({ getCurrentProfile }))(Dashboard);

