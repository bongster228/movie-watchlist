import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  getPopularMovies,
  searchMovies,
  clearMovies,
  setPageNum,
} from '../../actions/movies';
import MovieItem from './MovieItem';

const Landing = ({
  getPopularMovies,
  searchMovies,
  clearMovies,
  setPageNum,
  movie: { movies, loading, isSearching, searchTerm, pageNum },
}) => {
  useEffect(() => {
    if (isSearching) {
      if (pageNum === 1) clearMovies();

      searchMovies(searchTerm, pageNum);
    } else {
      if (pageNum === 1) clearMovies();

      getPopularMovies(pageNum);
    }
  }, [
    getPopularMovies,
    searchMovies,
    isSearching,
    searchTerm,
    clearMovies,
    pageNum,
  ]);

  return movies.length > 0 && !loading ? (
    <Fragment>
      <section className="content-movie">
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </section>
      <button
        className="btn landing-btn"
        onClick={() => setPageNum(pageNum + 1)}
      >
        Load More
      </button>
    </Fragment>
  ) : null;
};

Landing.propTypes = {
  getPopularMovies: PropTypes.func.isRequired,
  movie: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  movie: state.movie,
});

export default connect(mapStateToProps, {
  getPopularMovies,
  searchMovies,
  clearMovies,
  setPageNum,
})(Landing);
