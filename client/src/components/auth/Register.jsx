import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Register = (props) => {
  return (
    <Fragment>
      <section className="content">
        <div className="register-form">
          <form className="form">
            <h2 className="heading-2">Register</h2>
            <div className="form__field">
              <label htmlFor="email">Email</label>
              <input className="form__input" name="email" type="email" />

              <label htmlFor="password">Password</label>
              <input className="form__input" name="password" type="password" />
            </div>

            <button className="form__btn">Submit</button>
          </form>
        </div>
      </section>
    </Fragment>
  );
};

Register.propTypes = {};

export default Register;
