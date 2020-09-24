import React from 'react'
import './food.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Food = (props) => {
    // console.log(props);
    const value = Math.floor((props.food.calories * (props.food.grams / 100) / 10))

    return(
        <div className='food'>
            <div className='food-data'>
                <div><span>Title: </span>{props.food.title} | </div>
                <div><span>Calories: </span>{props.food.calories} | </div>
                <div><span>Grams: </span>{props.food.grams} | </div>
            </div>
                <CircularProgressbar value={value} text={`${value} cal`} />
        </div>
    )
}

export default Food