import React from 'react'
import cohort from '../../../assets/cohort.png'
import './Cohort.css'
import blue from '../../../../../assets/Blue.svg'
const Cohort = () => {
  return (
    <div>
        <div className="cohort">
        <div className="title">Our 2024 cohort</div>
            <div className="container">
                <img src={cohort} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Cohort