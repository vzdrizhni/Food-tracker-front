import React from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./meal.css";

const Meal = (props) => {
  console.log(props);

  const val = Math.floor(Math.random() * 100)

  return (
    <div className='meal-item'>
      <div>{props.meal.created}</div>
      <CircularProgressbar value={val} text={`${val} cal`} />
    </div>
  )
}

export default Meal