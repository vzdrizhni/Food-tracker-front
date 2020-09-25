import React from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../../actions/actions';
import './signup.css';

const SignUp = props => {
  const { user, getUsers, history } = props;

  const handleSuccessfullAuth = () => {
    history.push('/userpage');
  };

  const handleSubmit = e => {
    e.preventDefault();
    const url = 'https://boiling-beyond-13092.herokuapp.com/api/v1/sign_up';
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
        console.log(localStorage.getItem('token'));
        if (Object.keys(user).length > 0) {
          handleSuccessfullAuth();
        }
      })
      .catch(err => console.log(err));
  };

  let userValue = {
    user: {},
  };

  const handleChange = e => {
    userValue.user = Object.assign(userValue.user, {
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <label htmlFor="lname">Name:</label>
        <input type="text" id="lname" name="name" required onChange={handleChange} />
        <label htmlFor="fname">Email:</label>
        <input type="email" id="fname" name="email" required onChange={handleChange} />
        <label htmlFor="lname">Password:</label>
        <input type="password" id="lname" name="password" required onChange={handleChange} />
        <input type="submit" value="Sign Up" className="btn" />
      </form>
    </div>
  );
};

const mapStateToProps = state => ({ user: state.user });

const mapDispatchToProps = dispatch => ({
  getUsers: value => dispatch(getUsers(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
