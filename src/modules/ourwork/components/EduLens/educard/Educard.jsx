import React, { useEffect, useState }from 'react'
import './Educard.css'
import Slider from 'react-slick';
import { FaTelegram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import yellow from '../../../../../assets/yellow.svg'



const Educard = () => {

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


  const [edudata, setEdudata] = useState([]);

      useEffect(() => {
    fetch("http://13.50.253.237:3013/episodes")
      .then((response) => {
        return response.json();
      })
      .then((edudata) => {
        console.log(edudata)
        setEdudata(edudata);
      });
  }, []);

  return (
    <div className='educards'>
        <img src={yellow} alt="" className='lenyelllow' />
        <Slider {...settings} className='container'>
        {edudata.map(function (item) {
                return (
                  <>
                  <div className='lenscard'>
                      <img src={item.image} alt="" />
                    <div className='lensname'>{item.name}</div>
                    <div className='episodes'>
                        <a href={item.url_youtube}><FaYoutube className='iconlens you'/></a>
                        <a href={item.url_telegram}><FaTelegram className='iconlens tele'/></a>
                    </div>
                   </div>
                  </>
                );
            })}
              </Slider>
        </div>
  )
}

export default Educard