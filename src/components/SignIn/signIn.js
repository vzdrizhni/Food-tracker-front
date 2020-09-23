import React from 'react'
import {connect} from 'react-redux';
import {getUsers} from "../../actions/actions";

const SignIn = (props) => {
  const {user, getUsers, history} = props

  const handleSuccessfullAuth = () => {
    history.push("/userpage")
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = 'https://boiling-beyond-13092.herokuapp.com/api/v1/sign_in'
    fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
        body: JSON.stringify(userValue)
      })
      .then(resp => resp.json())
      .then(data => {
        getUsers(data.data.user)
        localStorage.setItem('token', data.data.user.authentication_token)
        if (Object.keys(user).length > 0) {
          handleSuccessfullAuth()
        }
      })
      .catch(err => console.log(err))
  }

  let userValue = {
    sign_in: {}
  };

  const handleChange = (e) => {
    userValue.sign_in = Object.assign(userValue.sign_in, {
      [e.target.name]: e.target.value
    })
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

const mapStateToProps = state => ({user: state});

const mapDispatchToProps = dispatch => ({
  getUsers: value => dispatch(getUsers(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)