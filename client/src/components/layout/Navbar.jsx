import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import { searchMovies } from '../../actions/movies';

const Navbar = ({
  auth: { isAuthenticated, loading },
  logout,
  searchMovies,
}) => {
  const [formData, setFormData] = useState({
    searchTerm: '',
  });

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onClick = (e) => {
    e.preventDefault();

    searchMovies(formData);
  };

  const { searchTerm } = formData;

  return (
    <Fragment>
      <nav className="nav">
        <Link className="nav__link" to="/">
          <h2 className="heading-2 pd-left-sm">WatchList</h2>
        </Link>
        <form className="nav__search">
          <input
            type="text"
            className="nav__search-bar"
            value={searchTerm}
            name="searchTerm"
            onChange={(e) => onChange(e)}
            placeholder="Search"
          />
          <button className="nav__search-btn" onClick={(e) => onClick(e)}>
            Search
          </button>
        </form>
        <div className="nav__user-nav">
          <ul className="nav__user-option">
            {isAuthenticated ? (
              <Fragment>
                <li className="nav__item">
                  <a className="nav__link" href="#" onClick={() => logout()}>
                    Logout
                  </a>
                </li>
              </Fragment>
            ) : (
              <Fragment>
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
              </Fragment>
            )}
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout, searchMovies })(Navbar);
