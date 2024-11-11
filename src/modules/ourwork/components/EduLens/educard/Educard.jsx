import  { useEffect, useState }from 'react'
import './Educard.css'
import Slider from 'react-slick';
import { FaTelegram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import yellow from '../../../../../assets/yellow.svg'



const Educard = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(null)
  const [edudata, setEdudata] = useState([]);


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



  
      useEffect(() => {
        setIsLoading(false)
        setIsError(null)
        
        async function getApi() {
          try {
            const response = await fetch("https://edu-bridges.somar-kesen.com/api/v1/episodes")
            const data = await response.json()
            setIsLoading(true)
            const edudata = data.data.map((item) => {
              return {
                photo:item.photo,
                name:item.name,
                url_telegram:item.url_telegram,
                url_youtube:item.url_youtube
              }
            })
            setEdudata(edudata);
          } catch(error) {
            setIsError(error.message)
        }
    }
    getApi()
}, [])

  return (
    <div className='educards'>
          
        <img src={yellow} alt="" className='lenyelllow' />
        {
          isLoading ?
        <Slider {...settings} className='container'>
        {edudata?.length &&
        edudata.map(function (item) {
                return (
                  <>
                <div className='lenscard'>
                      <img src={item.photo} alt="" />
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
                 : isError ? 
                 <p className="centering">{isError}</p>
                 : <p className="centering">Loading....</p> 
                }
        </div>
  )
}

export default Educard