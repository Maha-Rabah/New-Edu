import React from 'react'
import './Features.css'
import { Link } from 'react-router-dom'
import yellow from '../../../../assets/yellow.svg'


const Features = ({featurecard,featuretit,buttoncard}) => {
    return (
      <div className='features'>
      <h2 className={(featuretit)?'feattitle featblue':'feattitle featyellow'}>Features</h2>
      <div className="container">
      {featurecard.map(function (item) {
              return (
                <>
                    <div className={(item.pink)?"featurecard pink":"featurecard"}>
                  <div className="topcard">
                    <div className='icon'>
                      <img src={item.icon} alt="" />
                    </div>
                    <Link to={item.counlink} className={(item.pink)?"buttonapply":"none"}>{buttoncard}</Link>
                  </div>
                    <h3 className='featuretit'>{item.titlefeature}</h3>
                    <div className='caption'>
                      <p>{item.caption}</p>
                    </div>
                </div>
                </>
              );
          })}
  <img src={yellow} alt="" className='proyellow' />

          </div>
      </div>
    )
  }
  
export default Features