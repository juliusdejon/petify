import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { Paper, TextField, Button } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
});

export class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard')
    }
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className="landing">
          <div className="search">
            <Paper className={classes.root} elevation={10}>
              <h1> Find Pets on Petify </h1>
              <TextField
                label="Breed"
                className={classes.textField}
                margin="normal"
                fullWidth
                placeholder="eg. Labrador"
              />
              <TextField
                label="Location"
                className={classes.textField}
                margin="normal"
                fullWidth
              />
              <Button variant="raised" component="span" className={classes.button}>Submit</Button>
            </Paper>
          </div>
          <Link to="/register"><div className="btn-register">Register</div></Link>
        </div>
      </div>
    )
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, {})(withStyles(styles)(Landing));
