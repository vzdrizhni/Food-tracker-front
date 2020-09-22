import React from "react";
import {connect} from 'react-redux';

const Header = (props) => {
    if (Object.keys(props.user).length > 0) {
        return(
            <header>
                <span>{props.user.email}</span>
                <span>LogOut</span>
            </header>
        )
    } else {
        return(
            <header>
                <span>If you have an account: </span>
                <span>LogIn</span>
            </header>
        )
    }
}

const mapStateToProps = state => ({user: state});

export default connect(mapStateToProps)(Header)
