import React from 'react'
import { connect } from 'react-redux';
import { getUsers } from "../../actions/actions";

const SignUp = (props) => {
  const {user, getUsers} = props

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = 'https://boiling-beyond-13092.herokuapp.com/api/v1/sign_up'
    return fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userValue)
    })
    .then(resp => resp.json())
    .then(data => {
      getUsers(data.data.user)
      console.log(user);
    })
  }

  let userValue = {user: {}};

  const handleChange = (e) => {
    userValue.user = Object.assign(userValue.user, {[e.target.name]: e.target.value })
    console.log(JSON.stringify(userValue));
  }

  return (
    <div className='wrapper'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fname">Email:</label>
        <input type="text" id="fname" name="email" onChange={handleChange}/>
        <label htmlFor="lname">Password:</label>
        <input type="text" id="lname" name="password" onChange={handleChange}/>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  )
}

const mapStateToProps = state => ({ user: state });

const mapDispatchToProps = dispatch => ({
  getUsers: value => dispatch(getUsers(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)