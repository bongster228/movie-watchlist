import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getWatchedList } from '../../actions/user';
import WatchedItem from './WatchedItem';

const WatchedList = ({ user: { watchedList, loading }, getWatchedList }) => {
  useEffect(() => {
    getWatchedList();
  }, [getWatchedList]);

  return !loading && watchedList.length > 0 ? (
    <section className="content-movie">
      {watchedList.map((movie) => (
        <WatchedItem key={movie._id} id={movie._id} movie={movie} />
      ))}
    </section>
  ) : null;
};

WatchedList.propTypes = {
  getWatchedList: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { getWatchedList })(WatchedList);
