import React, { useEffect, useState }from 'react'
import './TeamStyle.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NavLink } from 'react-router-dom';



const Team = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            arrows: false,
          }
        }
      ]
  };

  const [teamdata, setTeamdata] = useState([]);

  useEffect(() => {
    fetch("https://api.edu-bridge.org.uk/edu-bridges-team")
      .then((response) => {
        return response.json();
      })
      .then((teamdata) => {
        setTeamdata(teamdata.data);
      });
  }, []);

  return (
    <div className='Team'>
        <h2 className='title'>Get to Know <span>EduBridge Team</span></h2>
        <div className="container">
        <Slider {...settings} className='team-content'>
            {teamdata?.length &&
            teamdata.map(function (item) {
                return (
                  <>
                  <div className='teamcard' key={item.id}>
                      <div className='picture'>
                        <img src={item.image} alt="" />
                      </div>
                      <h2 className='teamname'>{item.name}</h2>
                      <div className='caption'>
                        <p>{item.description}</p>
                      </div>
                  </div>
                  </>
                );
            })}
            </Slider>
            </div>
        <div className="but">
            
        <NavLink to='/joinus' className="button">Join US</NavLink>
        </div>
      </div>
  )
}

export default Team