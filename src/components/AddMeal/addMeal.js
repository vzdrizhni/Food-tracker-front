import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getMeal} from "../../actions/actions";
import { Link } from "react-router-dom";
import Meal from "../Meal/meal";
import "./addmeal.css";

const AddMeal = (props) => {
  const {meals, getMeal} = props

  useEffect(() => {
    getMeal([])
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSubmit = () => {
    const url = 'https://boiling-beyond-13092.herokuapp.com/api/v1/meals'
    fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          "AUTH-TOKEN": localStorage.getItem('token')
        }
      })
      .then(response => response.json())
      .then(data => getMeal(data.data.meal))
  }

  return (
    <div>
      <div className='wrapper'>
        <button onClick={handleSubmit}>Add Meal</button>
      </div>
      <div className='meals-list'>{meals.map(meal => (
          <Link to={`/meal/${meal.id}`} key={meal.id}>
            <div key={meal.id} className='meal-item'>
              <Meal meal={meal} key={meal.id}/>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({user: state.user, meals: state.meals});

const mapDispatchToProps = dispatch => ({
  getMeal: value => dispatch(getMeal(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddMeal)