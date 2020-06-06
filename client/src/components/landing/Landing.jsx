import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPopularMovies } from '../../actions/movies';
import MovieItem from './MovieItem';

const Landing = ({ getPopularMovies, movie: { movies, loading } }) => {
  useEffect(() => {
    getPopularMovies();
  }, [getPopularMovies]);

  return movies.length > 0 && !loading ? (
    <Fragment>
      <section className="content">
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </section>
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

export default connect(mapStateToProps, { getPopularMovies })(Landing);
