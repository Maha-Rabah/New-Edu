import React, { useEffect, useState } from "react";
import "./TeamStyle.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";
import PopUpCard from "../PopUpCard/PopUpCard";

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
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  const [teamdata, setTeamdata] = useState([]);

  const [selectedCard, setSelectedCard] = useState(null);

  const [showPopup, setShowPopup] = useState(false);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedCard(null);
  };

    if(showPopup) {
      document.body.style.overflowY= "hidden"
  } else {
      document.body.style.overflowY = "scroll"
        }

       useEffect(() => {
        fetch("https://edu-bridges.somar-kesen.com/api/v1/teams")
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((teamdata) => {
                setTeamdata(teamdata.data);
                console.log(teamdata);
            })
            .catch((error) => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }, []);

  return (
    <div className="Team">
      <h2 className="title">
        Get to Know <span>EduBridge Team</span>
      </h2>
      <div className="container">
        <Slider {...settings} className="team-content">
          {teamdata?.length &&
            teamdata.map(function (item) {
              return (
                <div className="teamcard" key={item.id}>
                  <div className="picture">
                    <img src={item.photo} alt="" />
                  </div>
                  <h2 className="teamname">{item.name}</h2>
                  <div className="caption">
                    <p>{item.position}</p>
                  </div>
                  <div className="infoteam">
                    <div
                      className="infoteam-button-container"
                      onClick={() => handleCardClick(item)}
                    >
                      <p className="infoteam-readmore">About</p>
                      <span className="infoteam-arrow">→</span>
                    </div>
                  </div>
                </div>
              );
            })}
        </Slider>


        {showPopup && selectedCard && (
          <PopUpCard
            selectedCard={selectedCard}
            closePopup={handleClosePopup}
          />
        )}


      </div>

      <div className="but">
        <NavLink to="/joinus" className="button">
          Join US
        </NavLink>
      </div>
    </div>
  );
};

export default Team;