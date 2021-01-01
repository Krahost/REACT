import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import { IconButton } from '@material-ui/core';
import './Header.css';

function Header() {
    return (
        <div className="header">
          <IconButton>
              <PersonIcon fontSize="large" className="header__icon" />
          </IconButton>
          
           <img className="header__logo" src="https://i.pinimg.com/originals/c0/59/3c/c0593cff936104990a9dcf6d41cc9d36.png" alt="tinder"/>
           <IconButton>
            <ForumIcon fontSize="large" className="header__icon" />
            </IconButton>
        </div>
    )
}

export default Header
