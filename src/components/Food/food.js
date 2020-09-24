import React from 'react'
import './food.css'

const Food = (props) => {
    // console.log(props);
    return(
        <div className='food'>
            <div><span>Title: </span>{props.food.title}</div>
            <div><span>Calories: </span>{props.food.calories}</div>
            <div><span>Grams: </span>{props.food.grams}</div>
        </div>
    )
}

export default Food