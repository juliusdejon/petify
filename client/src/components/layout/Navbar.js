import React, { Component } from 'react';
import { Button } from 'material-ui';
class Navbar extends Component {
  render() {
    return (
      <nav>
        <div><Button>Logo</Button></div>
        <div className="nav-actions"><Button variant="raised" component="span">Sell A Pet </Button></div>
        <div><Button>Login</Button></div>
      </nav>
    )
  }
}

export default Navbar;
