import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUsers } from '../../actions/actions';
import './signin.css';

const SignIn = props => {
  const { user, getUsers, history } = props;

  const handleSuccessfullAuth = () => {
    history.push('/userpage');
  };

  const userValue = {
    sign_in: {},
  };

  const handleSubmit = e => {
    e.preventDefault();
    const url = 'https://boiling-beyond-13092.herokuapp.com/api/v1/sign_in';
    fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userValue),
    })
      .then(resp => resp.json())
      .then(data => {
        getUsers(data.data.user);
        localStorage.setItem('token', data.data.user.authentication_token);
        if (Object.keys(user).length > 0) {
          handleSuccessfullAuth();
        }
      })
      .catch(err => err);
  };

  const handleChange = e => {
    userValue.sign_in = Object.assign(userValue.sign_in, {
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <label htmlFor="fname">
          Email:
          <input type="email" id="fname" name="email" required onChange={handleChange} />
        </label>
        <label htmlFor="lname">
          Password:
          <input type="password" id="lname" name="password" required onChange={handleChange} />
        </label>
        <input type="submit" value="Sign In" className="btn" />
      </form>
    </div>
  );
};

const mapStateToProps = state => ({ user: state });

const mapDispatchToProps = dispatch => ({
  getUsers: value => dispatch(getUsers(value)),
});

SignIn.propTypes = {
  getUsers: PropTypes.func.isRequired,
  user: PropTypes.instanceOf(Object).isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
