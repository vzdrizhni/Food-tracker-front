import React from 'react'
import './food.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Meal from './meal.svg'
import Scale from './body-scale.svg'

const Food = (props) => {
    const value = Math.floor((props.food.calories * (props.food.grams / 100) / 10))

    return(
        <div className='food'>
            <div className='food-data'>
                <div className='title'><span>Title: </span>{props.food.title}</div>
                <div className='measure-wrapper'>
                    <div className='calories'><div><span>Calories: </span>{props.food.calories}</div> <img src={Meal} alt="React Logo" /></div>
                    <div className='calories'><div><span>Grams: </span>{props.food.grams}</div><img src={Scale} alt="React Logo" /></div>
                </div>
            </div>
                <CircularProgressbar value={value} text={`${value} cal`} />
        </div>
    )
}

export default Food