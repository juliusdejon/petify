import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles';
import { Paper, Grid, TextField, Button } from 'material-ui';
import axios from 'axios';

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

class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      password2: '',
      errors: {}
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    }
    console.log(newUser);
    axios.post('/api/users/register', newUser)
      .then(res => console.log(res.data))
      .catch(err => this.setState({ errors: err.response.data }));
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    const { classes } = this.props;
    const { errors } = this.state;
    return (
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={12} md={6}>
            <Paper className={classes.paper}>
              <h1> Register </h1>
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
                <TextField
                  label="Confirm Password"
                  fullWidth
                  onChange={this.onChange}
                  margin="normal"
                  value={this.state.password2}
                  name="password2"
                  type="password"
                  error={errors.password2 ? true : false}
                />
                {errors.password2 && (<div className="errors">{errors.password2} </div>)}
                <Button type="submit" variant="raised" color="primary" className={classes.button}>
                  Sign Up
              </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Register);
