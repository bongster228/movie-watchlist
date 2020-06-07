import React, { Fragment } from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeFromWatchList } from '../../actions/user';

const WatchItem = ({
  movie: {
    popularity,
    vote_count,
    posterPath,
    title,
    voteAverage,
    overview,
    releaseDate,
  },
  id,
  removeFromWatchList,
}) => {
  return (
    <Fragment>
      <div className="movie-card">
        <figure className="movie-card__figure">
          <img
            src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
            alt={title}
            className="movie-card__img"
          />
        </figure>
        <div className="movie-card__details">
          {title.length > 40 ? (
            <h3 className="heading-3">{title.substring(0, 45)}...</h3>
          ) : (
            <h3 className="heading-3">{title}</h3>
          )}

          <div className="movie-card__info">
            <div className="movie-card__release-date">
              <Moment format="MM/DD/YYYY">{releaseDate}</Moment>
            </div>
            <div className="movie-card__runtime">{vote_count}</div>
            <div className="movie-card__popularity">{popularity}</div>
            <div className="movie-card__vote-average">{voteAverage}</div>
          </div>
        </div>
        <div className="movie-card__button">
          <button
            onClick={() => removeFromWatchList(id)}
            className="card-btn card-btn--remove"
          >
            Remove
          </button>
        </div>
      </div>
    </Fragment>
  );
};

WatchItem.propTypes = {
  movie: PropTypes.object.isRequired,
  removeFromWatchList: PropTypes.func.isRequired,
};

export default connect(null, { removeFromWatchList })(WatchItem);
