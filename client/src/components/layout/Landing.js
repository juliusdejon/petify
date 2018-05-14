import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Paper, Typography, TextField, Button } from 'material-ui';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
});

export class Landing extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className="landing">
          <div className="search">
            <Paper className={classes.root} elevation={10}>
              <h1> Find Pets on Petify </h1>
              <Typography>
                <TextField
                  id="search"
                  label="Breed"
                  type="search"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                  placeholder="eg. Labrador"
                />
                <TextField
                  id="search"
                  label="Location"
                  type="search"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                />
                <Button variant="raised" component="span" className={classes.button}>Submit</Button>
              </Typography>
            </Paper>
          </div>
          <Link to="/register"><div className="btn-register">Register</div></Link>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Landing);
