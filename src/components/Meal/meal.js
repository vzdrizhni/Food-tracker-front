import React from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./meal.css";

const Meal = (props) => {
  const val = Math.floor(Math.random() * 100)

  return (
    <>
      <div>{props.meal.created}</div>
      <CircularProgressbar className='meal-bar' value={val} text={`${val} cal`} />
    </>
  )
}

export default Meal