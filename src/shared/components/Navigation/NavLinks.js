import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../../context/auth-context";
import "./NavLinks.css";

const NavLinks = props => {
  const auth = useContext(AuthContext);

  const logoutClickHandler = event => {
    auth.logout();
  };

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          ALL USERS
        </NavLink>
      </li>
      {auth.isLoggedIn && (
        <li>
          <NavLink to={`/${auth.userId}/places`}>MY PLACES</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/places/new">ADD PLACE</NavLink>
        </li>
      )}
      {!auth.isLoggedIn ? (
        <li>
          <NavLink to="/auth">AUTHENTICATE</NavLink>
        </li>
      ) : (
        <li>
          <NavLink onClick={logoutClickHandler} to="/">
            LOGOUT
          </NavLink>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
