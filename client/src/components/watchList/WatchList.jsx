import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getWatchList } from '../../actions/user';
import WatchItem from './WatchItem';

const WatchList = ({ user: { watchList, loading }, getWatchList }) => {
  useEffect(() => {
    getWatchList();
  }, [getWatchList]);

  return !loading && watchList.length > 0 ? (
    <section className="content-movie">
      {watchList.map((movie) => (
        <WatchItem key={movie._id} id={movie._id} movie={movie} />
      ))}
    </section>
  ) : null;
};

WatchList.propTypes = {
  getWatchList: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { getWatchList })(WatchList);
