import React from "react";
import {connect} from 'react-redux';

const Header = (props) => {
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
    .then(data => console.log(data))
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
        <span>LogIn</span>
      </header>
    )
  }
}

const mapStateToProps = state => ({user: state});

export default connect(mapStateToProps)(Header)
