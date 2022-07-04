import React from 'react'
import { Link } from 'react-router-dom'
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';


const Header = () => {
  return (
    <React.Fragment>
    <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
    <h1>Retail Spotlight</h1>
    </Toolbar>
    <Toolbar>
      <div className="links">
      <Button variant="text">
        <Link to="/"
        color="inherit"
        noWrap
        variant="body2"
        sx={{ p: 1, flexShrink: 0 }}>IBM</Link>
        </Button>
        <Button variant="text">
        <Link to="/economicindicator"
        color="inherit"
        noWrap
        variant="body2"
        sx={{ p: 1, flexShrink: 0 }}>Economic Indicator</Link>
        </Button>
      </div>
    </Toolbar>
    </React.Fragment>

  );
}





export default Header