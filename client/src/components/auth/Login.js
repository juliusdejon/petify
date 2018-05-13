import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';

import {
  TextField
} from 'material-ui';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  }
});

export class Login extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className="App">
          <TextField
            label="Username"
            className={classes.textField}
            type="text"
            margin="normal"
          />
          <TextField
            id="password-input"
            label="Password"
            className={classes.textField}
            type="password"
            autoComplete="current-password"
            margin="normal"
          />
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Login);
