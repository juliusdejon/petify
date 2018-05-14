import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'material-ui';
import Logo from '../../images/petify-logo.png';
class Navbar extends Component {
  render() {
    return (
      <nav>
        <div><Link to="/"><img src={Logo} alt="logo" /></Link></div>
        <div className="nav-actions"><Link to="/Sell"><Button>Sell A Pet </Button></Link></div>
        <div><Link to="/login"><Button>Login</Button></Link></div>
      </nav>
    )
  }
}

export default Navbar;
