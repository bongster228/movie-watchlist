import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/auth';

const Login = ({ loginUser, history }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    loginUser(formData, history);
  };

  const { username, password } = formData;

  return (
    <Fragment>
      <section className="content-form">
        <div className="register-form">
          <form className="form" onSubmit={(e) => onSubmit(e)}>
            <h2 className="heading-2">Register</h2>
            <div className="form__field">
              <label htmlFor="username">Username</label>
              <input
                className="form__input"
                name="username"
                value={username}
                onChange={(e) => onChange(e)}
                type="email"
              />

              <label htmlFor="password">Password</label>
              <input
                className="form__input"
                name="password"
                value={password}
                onChange={(e) => onChange(e)}
                type="password"
              />
            </div>

            <button type="submit" className="form__btn">
              Submit
            </button>
          </form>
        </div>
      </section>
    </Fragment>
  );
};

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
};

export default connect(null, { loginUser })(Login);
