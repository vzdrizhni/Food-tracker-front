import React from 'react'
import {connect} from 'react-redux';

const UserPage = (props) => {
    console.log(props)
    return(
        <div>{props.state}</div>
    )
}

const mapStateToProps = state => ({user: state});

export default connect(mapStateToProps)(UserPage)