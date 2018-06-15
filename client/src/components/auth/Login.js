import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';

import { withStyles } from 'material-ui/styles';
import { Paper, Grid, TextField, Button } from 'material-ui';

const styles = theme => ({
  root: {
    background: '#dedede',
    height: '100vh',
  },
  paper: {
    margin: '20px',
    padding: '3rem',
    textAlign: 'center',
    color: theme.palette.text.secondary,
    fontFamily: 'Open Sans',
  },
});

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {}
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/sell');
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    }
    this.props.loginUser(userData);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    const { errors } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={12} md={6}>
            <Paper className={classes.paper}>
              <h1> Login </h1>
              <form onSubmit={this.onSubmit}>
                <TextField
                  label="Email or Username"
                  fullWidth
                  onChange={this.onChange}
                  margin="normal"
                  value={this.state.email}
                  name="email"
                  error={errors.email ? true : false}
                />
                {errors.email && (<div className="errors">{errors.email} </div>)}
                <TextField
                  label="Password"
                  fullWidth
                  onChange={this.onChange}
                  margin="normal"
                  value={this.state.password}
                  name="password"
                  type="password"
                  error={errors.password ? true : false}
                />
                {errors.password && (<div className="errors">{errors.password} </div>)}
                <Button type="submit" variant="raised" color="primary" className={classes.button}>
                  Login
              </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(mapStateToProps, { loginUser })(withStyles(styles)(Login));
