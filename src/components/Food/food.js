import React from 'react'

const Food = (props) => {
    console.log(props);
    return(
        <div>
            <div>{props.food.title}</div>
            <div>{props.food.calories}</div>
            <div>{props.food.grams}</div>
        </div>
    )
}

export default Food