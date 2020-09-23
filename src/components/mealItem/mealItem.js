import React from 'react'
import {connect} from 'react-redux';

const MealItem = (props) => {
    // const {meals} = props
    // console.log(props.meals.find(obj => obj.id == props.match.params.id));
    const meal = props.meals.find(obj => obj.id == props.match.params.id); // eslint-disable-line eqeqeq
    console.log(meal);
    return(
    <div>Tebe Pizda: {meal.created}</div>
    )
}

const mapStateToProps = state => ({meals: state.meals});

export default connect(mapStateToProps)(MealItem)