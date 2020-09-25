import React from 'react';
import { Link } from 'react-router-dom';
import './bottomnav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartBar, faChartLine, faChartPie, faEllipsisH,
} from '@fortawesome/free-solid-svg-icons';

const BottomNav = () => (
  <nav>
    <Link to="/addmeasure">
      <div className="add-measure">
        <FontAwesomeIcon className="icon" icon={faChartBar} />
        <p>Add Measure</p>
      </div>
    </Link>
    <Link to="/userpage">
      <div className="add-measure">
        <FontAwesomeIcon icon={faChartLine} />
        <p>Track It</p>
      </div>
    </Link>
    <Link to="/progress">
      <div className="add-measure progres">
        <FontAwesomeIcon icon={faChartPie} />
        <p className="progres-text">Your Progress</p>
      </div>
    </Link>
    <Link to="more">
      <div className="add-measure">
        <FontAwesomeIcon icon={faEllipsisH} />
        <p>More</p>
      </div>
    </Link>
  </nav>

);

export default BottomNav;
