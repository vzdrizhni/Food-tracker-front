import React from 'react'
import { Link } from "react-router-dom";
import './bottomnav.css'

const BottomNav = () => {
    return(
        <nav>
            <Link to='/addmeasure'><div className='add-measure'>Add Measure</div></Link>
            <Link to='/userpage'><div className='track-it'>Track It</div></Link>
            <Link to='/progress'><div className='your-progress'>Your Progress</div></Link>
            <Link to='more'><div className='more'>More</div></Link>
        </nav>

    )
}

export default BottomNav