import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import { ReactComponent as LogoSvg } from '../images/logo.svg';


function NavBar(props) {

    return (
        <div className="header">
          <Link to="/" className="header-logo-all">
                <LogoSvg />
          </Link>

          <Link className="leaderboard-link" to="/leaderboard">Leaderboard</Link>

        </div>
      );
}

export default NavBar;