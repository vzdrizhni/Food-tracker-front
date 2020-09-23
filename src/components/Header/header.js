import React from "react";
import {connect} from 'react-redux';
import {destroyUser} from "../../actions/actions";
import { Link } from "react-router-dom";

const Header = (props) => {
  const {destroyUser} = props

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
      localStorage.clear()
    })
    .catch(err => console.log(err))
  }

  if (Object.keys(props.user).length > 0) {
    return (
      <header>
        <span>{props.user.email}</span>
        <span onClick={handleLogOut}>LogOut</span>
      </header>
    )
  } else {
    return (
      <header>
        <span>If you have an account:
        </span>
        <Link to='/sign_in'><span>LogIn</span></Link>
      </header>
    )
  }
}

const mapStateToProps = state => ({user: state.user});

const mapDispatchToProps = dispatch => ({
  destroyUser: () => dispatch(destroyUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header)
