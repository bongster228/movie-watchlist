import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import {
  setSearchTerm,
  getPopularMovies,
  clearMovies,
  resetPageNum,
} from '../../actions/movies';

// TODO: Page does not refresh when a second repeat search happens

const Navbar = ({
  auth: { isAuthenticated, loading },
  movie: { isSearching },
  logout,
  setSearchTerm,
  clearMovies,
  resetPageNum,
  history,
}) => {
  const [search, setSearch] = useState('');

  const onChange = (e) => setSearch(e.target.value);
  const onClick = (e) => {
    e.preventDefault();

    if (!isSearching) {
      resetPageNum();
      clearMovies();
    }

    setSearchTerm(search);

    history.push('/');
  };

  const onHeaderClick = (e) => {
    e.preventDefault();

    if (isSearching) {
      clearMovies();
      resetPageNum();
      setSearchTerm('', false);
    }

    history.push('/');
  };

  return (
    <Fragment>
      <nav className="nav">
        <Link
          className="nav__link nav__link--header"
          to="/"
          onClick={(e) => onHeaderClick(e)}
        >
          <h2 className="heading-2 pd-left-sm">WatchList</h2>
        </Link>
        <form className="nav__search">
          <input
            type="text"
            className="nav__search-bar"
            value={search}
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
                  <Link className="nav__link" to="/watchedList">
                    WatchedList
                  </Link>
                </li>
                <li className="nav__item">
                  <Link className="nav__link" to="/watchList">
                    WatchList
                  </Link>
                </li>
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
  movie: state.movie,
});

export default connect(mapStateToProps, {
  logout,
  setSearchTerm,
  resetPageNum,
  clearMovies,
})(withRouter(Navbar));
