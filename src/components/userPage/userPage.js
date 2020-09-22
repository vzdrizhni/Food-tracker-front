import React from 'react'
import {connect} from 'react-redux';
import { Redirect } from "react-router-dom";

const UserPage = (props) => {
    if (Object.keys(props.user).length === 0) return <Redirect to='/' />
    console.log(props.user);
    return(
        <div>{props.user.email}</div>
    )
}

const mapStateToProps = state => ({user: state});

export default connect(mapStateToProps)(UserPage)