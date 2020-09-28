import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { destroyUser } from '../../actions/actions';
import './header.css';

const Header = props => {
  const {
    destroyUser, history, user, location,
  } = props;
  const { pathname } = location;

  const handleSuccessfullAuth = () => {
    history.push('/sign_in');
  };

  const handleLogOut = () => {
    const url = 'https://boiling-beyond-13092.herokuapp.com/api/v1/log_out';
    fetch(url, {
      method: 'DELETE',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'AUTH-TOKEN': localStorage.getItem('token'),
      },
    })
      .then(resp => resp.json())
      .then(() => {
        destroyUser();
        localStorage.clear();
        handleSuccessfullAuth();
      })
      .catch(err => err);
  };

  if (Object.keys(user).length > 0) {
    return (
      <header>
        <span className="username">{props.user.name}</span>
        <span aria-hidden="true" className="log" onClick={handleLogOut} onKeyDown={handleLogOut}>LogOut</span>
      </header>
    );
  } if (pathname == '/') { // eslint-disable-line eqeqeq
    return (
      <header>
        <span className="username second">
          If you have an account:
        </span>
        <Link to="/sign_in"><span className="log">LogIn</span></Link>
      </header>
    );
  }
  return (
    <header>
      <span className="username second">
        Create Account:
      </span>
      <Link to="/Food-tracker-front/"><span className="log">Sign Up</span></Link>
    </header>
  );
};

const mapStateToProps = state => ({ user: state.user });

const mapDispatchToProps = dispatch => ({
  destroyUser: () => dispatch(destroyUser()),
});

Header.propTypes = {
  destroyUser: PropTypes.func.isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
  user: PropTypes.instanceOf(Object).isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
