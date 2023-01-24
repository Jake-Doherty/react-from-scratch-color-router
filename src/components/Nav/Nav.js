import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  return (
    <nav>
      <NavLink
        to="/rgb/255/0/0"
        style={(isActive) => ({
          color: isActive ? 'red' : 'white',
        })}
      >
        Red
      </NavLink>
      <NavLink
        to="/rgb/0/255/0"
        style={(isActive) => ({
          color: isActive ? 'green' : 'white',
        })}
      >
        Green
      </NavLink>
      <NavLink
        to="/rgb/0/0/255"
        style={(isActive) => ({
          color: isActive ? 'blue' : 'white',
        })}
      >
        Blue
      </NavLink>
    </nav>
  );
}
