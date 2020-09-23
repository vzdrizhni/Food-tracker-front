import React from "react";

const Meal = (props) => {
  // console.log(props);
  return (
    <div>
      <div>{props.meal.created}</div>
      <div>{props.meal.id}</div>
    </div>
  )
}

export default Meal