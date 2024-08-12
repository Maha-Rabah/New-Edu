import React, { useEffect, useState }from 'react'
import './Educard.css'
import Slider from 'react-slick';


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
    fetch("https://api.edu-bridge.org.uk/episodes")
      .then((response) => {
        return response.json();
      })
      .then((edudata) => {
        console.log(edudata.data)
        setEdudata(edudata.data);
      });
  }, []);

  return (
    <div className='educards'>
        <img src={yellow} alt="" className='lenyelllow' />
        <Slider {...settings} className='container'>
        {edudata.length && edudata?.map(function (item) {
                return (
                  <>
                  <a href={item.url} className='lenscard' key={item.id}>
                      <img src={item.img } alt="" />
                    <div className='lensname'>{item.name}</div>
                   </a>
                  </>
                );
            })}
              </Slider>
        </div>
  )
}

export default Educard