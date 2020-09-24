import React from 'react'
import { Link } from "react-router-dom";
import './bottomnav.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare, faChartLine, faTasks, faEllipsisH } from "@fortawesome/free-solid-svg-icons";

const BottomNav = () => {
    return(
        <nav>
            <Link to='/addmeasure'><div className='add-measure'><FontAwesomeIcon className='icon' icon={faPlusSquare} />Add Measure</div></Link>
            <Link to='/userpage'><div className='add-measure'><FontAwesomeIcon icon={faChartLine} />Track It</div></Link>
            <Link to='/progress'><div className='add-measure'><FontAwesomeIcon icon={faTasks} />Your Progress</div></Link>
            <Link to='more'><div className='add-measure'><FontAwesomeIcon icon={faEllipsisH} />More</div></Link>
        </nav>

    )
}

export default BottomNav