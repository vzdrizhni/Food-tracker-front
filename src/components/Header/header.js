import React from "react";
import {connect} from 'react-redux';
import {destroyUser} from "../../actions/actions";
import { Link } from "react-router-dom";
import "./header.css";

const Header = (props) => {
  const {destroyUser, history} = props

  const handleSuccessfullAuth = () => {
    history.push("/sign_in")
  }

  const handleLogOut = () => {
    const url = 'https://boiling-beyond-13092.herokuapp.com/api/v1/log_out'
    fetch(url, {
      method: 'DELETE',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        "AUTH-TOKEN": localStorage.getItem('token')
      },
    })
    .then(resp => resp.json())
    .then(data => {
      destroyUser();
      localStorage.clear();
      handleSuccessfullAuth();
    })
    .catch(err => console.log(err))
  }

  console.log(props);

  if (Object.keys(props.user).length > 0) {
    return (
      <header>
        <span className='username'>{props.user.name}</span>
        <span className='log' onClick={handleLogOut}>LogOut</span>
      </header>
    )
  } else {
    if (props.location.pathname == '/') { //eslint-disable-line eqeqeq
      return (
      <header>
        <span className='username second'>If you have an account:
        </span>
        <Link to='/sign_in'><span className='log'>LogIn</span></Link>
      </header>
      )
    } else {
      return (
        <header>
          <span className='username second'>Create Account:
          </span>
          <Link to='/'><span className='log'>Sign Up</span></Link>
        </header>
      )
    }
  }
}

const mapStateToProps = state => ({user: state.user});

const mapDispatchToProps = dispatch => ({
  destroyUser: () => dispatch(destroyUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header)
