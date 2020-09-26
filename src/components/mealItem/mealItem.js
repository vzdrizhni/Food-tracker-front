import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getFood, addFood } from '../../actions/actions';
import Food from '../Food/food';
import './mealitem.css';

const MealItem = props => {
  const {
    getFood, food, meals, addFood, match,
  } = props;

  const meal = meals.find(obj => obj.id == match.params.id); // eslint-disable-line eqeqeq

  useEffect(() => {
    const url = `https://boiling-beyond-13092.herokuapp.com/api/v1/meals/${meal.id}`;
    fetch(url, { method: 'Get' })
      .then(resp => resp.json())
      .then(data => getFood(data.data.meal.foods));
  }, [food.length]);

  const userValue = {
    food: {},
  };

  const handleFoodCreation = e => {
    e.preventDefault();
    const url = `https://boiling-beyond-13092.herokuapp.com/api/v1/meals/${meal.id}/foods`;
    fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'AUTH-TOKEN': localStorage.getItem('token'),
      },
      body: JSON.stringify(userValue),
    })
      .then(resp => resp.json())
      .then(data => addFood(data.data.food));
  };

  const handleChange = e => {
    userValue.food = Object.assign(userValue.food, {
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div className="wrapper">
        <form onSubmit={handleFoodCreation}>
          <label htmlFor="title">
            Title:
            <input type="text" id="title" name="title" onChange={handleChange} />
          </label>
          <label htmlFor="calories">
            Calories
            <input type="text" id="calories" name="calories" onChange={handleChange} />
          </label>
          <label htmlFor="grams">
            Grams
            <input type="text" id="grams" name="grams" onChange={handleChange} />
          </label>
          <input type="submit" value="Submit" className="btn" />
        </form>
      </div>
      <div className="food-list">
        {food.map(item => (<Food food={item} key={item.id} />))}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({ meals: state.meals, food: state.food });

const mapDispatchToProps = dispatch => ({
  getFood: value => dispatch(getFood(value)),
  addFood: value => dispatch(addFood(value)),
});

MealItem.propTypes = {
  getFood: PropTypes.func.isRequired,
  addFood: PropTypes.func.isRequired,
  match: PropTypes.instanceOf(Object).isRequired,
  food: PropTypes.instanceOf(Object).isRequired,
  meals: PropTypes.instanceOf(Array).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MealItem);
