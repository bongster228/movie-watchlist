import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Fragment>
      <nav className="nav">
        <Link className="nav__link" to="/">
          <h2 className="heading-2 pd-left-sm">WatchList</h2>
        </Link>
        <form className="nav__search">
          <input type="text" className="nav__search-bar" placeholder="Search" />
          <button className="nav__search-btn">Search</button>
        </form>
        <div className="nav__user-nav">
          <ul className="nav__user-option">
            <li className="nav__item">
              <Link className="nav__link" to="/register">
                Register
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
