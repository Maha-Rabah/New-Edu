import React, { useEffect, useState }from 'react'
import './TeamStyle.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NavLink } from 'react-router-dom';
import { FaLongArrowAltRight } from "react-icons/fa";


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

  const [selectedCard, setSelectedCard] = useState(null)

  const [showPopup, setShowPopup] = useState(false);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setShowPopup(true);
    console.log(card);
    
  }

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedCard(null)
  }

  if(showPopup) {
    document.body.style.overflowY= "hidden"
} else {
    document.body.style.overflowY = "scroll"
      }



  useEffect(() => {
    fetch("http://13.50.253.237:3013/edu-bridges-team?team=IT")
      .then((response) => {
        return response.json();
      })
      .then((teamdata) => {
        setTeamdata(teamdata);
        console.log(teamdata)
      });
  }, []);

  return (
    <div className='Team'>
        <h2 className='title'>Get to Know <span>EduBridge Team</span></h2>
        <div className="container">
          
        <Slider {...settings} className='team-content'>
            {teamdata?.length &&
            teamdata.map(function(item) {
                return (
                  <div className='teamcard' key={item.id}>
                      <div className='picture'>
                        <img src={item.image} alt="" />
                      </div>
                      <h2 className='teamname'>{item.name}</h2>
                      <div className='caption'>
                        <p>{item.position}</p>
                      </div>
                      <div className='infoteam' onClick={() => handleCardClick(item)}>
                        <p>Read More</p>
                        <p className='infoteam-arrow'><FaLongArrowAltRight/></p>
                      </div>
                  </div>
                );
            })}
            </Slider>

            {
              showPopup && selectedCard && (
                <div className="team-card-popup">
                  <div className="team-card-popup-content">
                    <span className='close-popup' onClick={handleClosePopup}>
                      <div className="close-popup-btn">
                        &times;
                      </div>
                    </span>
                    <div className="team-card-popup-container">
                      <img src={selectedCard.image} className='popup-img' alt="pic" />
                      <div className="team-card-popup-container-title">
                        <p className='team-card-popup-container-title_name'>{selectedCard.name}</p>
                        <p className='team-card-popup-container-title_position'>{selectedCard.position}</p>
                      </div>
                    </div>
                    <div className="team-card-popup-container-info">
                      <p>{selectedCard.information}</p>
                    </div>
                  </div>
                </div>
              )
            }

            
            </div>


        <div className="but">
            
        <NavLink to='/joinus' className="button">Join US</NavLink>
        </div>
      </div>
  )
}

export default Team