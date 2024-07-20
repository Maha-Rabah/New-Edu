import './contuct.css'
import worldmap from '../assets/worldmapfinal.png'
import { useState,useEffect} from 'react'
import line from '../assets/lines.svg'
import sy from '../assets/syria.svg'
import yellow from '../../../assets/yellow.svg'
import roze from '../../../assets/roze.svg'
import dot from '../assets/dot.svg'
import axios from 'axios'
import axiosInstance from '../../../utlis/axios'

const Contuct= () => {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const[data,setData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    message:"",
  });

  const url='https://api.edu-bridge.org.uk/contact-us';

function handle(e){
  const newdata={...data};
  newdata[e.target.id]=e.target.value;
  setData(newdata);
}

function submit(e){
  e.preventDefault();
  axiosInstance.post(url,{
    firstName: data.firstName,
    lastName: data.lastName,
    email:data.email,
    message:data.message,
  })
  setData({    
  firstName:"",
  lastName:"",
  email:"",
  message:"",})
}

  return (
    <div className="contactUs-container">
    <img src={yellow} alt="" className='yellowcon'/>
        <div className="worldMap">
            <img className="map" src={worldmap} alt="" />
            <img className='line' src={line} />
            <img className='syria' src={sy} alt="" />
            <img className='dot1' src={dot} alt="" />
            <img className='dot2' src={dot} alt="" />
            <img className='dot3' src={dot} alt="" />
            <img className='dot4' src={dot} alt="" />
            <img className='dot5' src={dot} alt="" />
            <img className='dot6' src={dot} alt="" />
        </div>

        <form method="post" action="#" className='form-container' onSubmit={(e)=>submit(e)}>
            <input type="text" id="firstName" name="text"   value={data.firstName} onChange={(e)=>
            handle(e)}
             placeholder='First Name (required)'  required/>

            <input type="text"   id="lastName" name="text"   value={data.lastName}  onChange={(e)=>
            handle(e)}
            placeholder='Last Name (required)' required/>

            <input type="email"  id="email" name="email"  value={data.email}  onChange={(e)=>
           handle(e)} placeholder='Email (required)' required />

            <textarea type='text'  id="message" name="text"   value={data.message} onChange={(e)=>
            handle(e)} placeholder='Message (required)' required />

            <button className='button' type='submit'>Send</button> 
        </form>
    <img src={roze} alt="" className='rozecon'/>
      
    </div>
  )
}  

export default Contuct