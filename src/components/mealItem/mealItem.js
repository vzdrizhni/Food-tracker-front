import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getFood} from '../../actions/actions';
import Food from '../Food/food';
import './mealitem.css';

const MealItem = props => {
  const {getFood, food, meals} = props;

  const meal = meals.find(obj => obj.id == props.match.params.id); // eslint-disable-line eqeqeq

  useEffect(() => {
    const url = `https://boiling-beyond-13092.herokuapp.com/api/v1/meals/${meal.id}`;
    fetch(url, {method: 'Get'})
      .then(resp => resp.json())
      .then(data => getFood(data.data.meal.foods));
  }, [food.length]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleFoodCreation = e => {
    e.preventDefault();
    const url = `https://boiling-beyond-13092.herokuapp.com/api/v1/meals/${meal.id}/foods`;
    fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'AUTH-TOKEN': localStorage.getItem('token')
      },
        body: JSON.stringify(userValue)
      })
      .then(resp => resp.json())
      .then(data => getFood(data.data.food));
  };

  let userValue = {
    food: {}
  };

  const handleChange = e => {
    userValue.food = Object.assign(userValue.food, {
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <div className="wrapper">
        <form onSubmit={handleFoodCreation}>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" onChange={handleChange}/>
          <label htmlFor="calories">Calories</label>
          <input type="text" id="calories" name="calories" onChange={handleChange}/>
          <label htmlFor="grams">Grams</label>
          <input type="text" id="grams" name="grams" onChange={handleChange}/>
          <input type="submit" value="Submit" className="btn"/>
        </form>
      </div>
      <div className="food-list">
        {food.map(item => (<Food food={item} key={item.id}/>))}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({meals: state.meals, food: state.food});

const mapDispatchToProps = dispatch => ({
  getFood: value => dispatch(getFood(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(MealItem);
