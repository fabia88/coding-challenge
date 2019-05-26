import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

class NavBar extends Component {
  render() {
    return (
      <div id='navbar'>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Plugify Challenge
          </Typography>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}
export default NavBar;
