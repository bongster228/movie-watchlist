import React, { Fragment } from 'react';
import Moment from 'react-moment';
import axios from 'axios';
import PropTypes from 'prop-types';

const MovieItem = ({
  movie: {
    popularity,
    vote_count,
    poster_path,
    original_title,
    vote_average,
    overview,
    release_date,
  },
}) => {
  const handleWatchButton = (movieData) => {};

  const handleWatchedButton = (movieData) => {};

  return (
    <Fragment>
      <div className="movie-card">
        <figure className="movie-card__figure">
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={original_title}
            className="movie-card__img"
          />
        </figure>
        <div className="movie-card__details">
          {original_title.length > 40 ? (
            <h3 className="heading-3">{original_title.substring(0, 45)}...</h3>
          ) : (
            <h3 className="heading-3">{original_title}</h3>
          )}

          <div className="movie-card__info">
            <div className="movie-card__release-date">
              <Moment format="MM/DD/YYYY">{release_date}</Moment>
            </div>
            <div className="movie-card__runtime">{vote_count}</div>
            <div className="movie-card__popularity">{popularity}</div>
            <div className="movie-card__vote-average">{vote_average}</div>
          </div>
        </div>
        <div className="movie-card__button">
          <button className="card-btn card-btn--watch">Watch</button>
          <button className="card-btn card-btn--watched">Watched</button>
        </div>
      </div>
    </Fragment>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieItem;
