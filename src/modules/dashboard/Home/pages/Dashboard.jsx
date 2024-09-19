import React, { useState, useEffect } from 'react'
import './dashboard.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import calender from '../assets/calender.svg'
import Table from '../../components/Table/Table'
import person from '../assets/person.svg'

const Dashboard = () => {

    // const cards = [
    //   {isWhite: false, img:purpleChart, title:"Applicants", num:200},
    //   {isWhite: true, img:whiteChart, title:"Interviews", num:45},
    //   {isWhite: true, img:whiteChart, title:"Mentees", num:18},
    //   {isWhite: true, img:whiteChart, title:"Episodes", num:11}
    // ]

    // const teamDataColumns = [
    //   "No .", "Name", "Information","Email",'Phone'
    // ]

    // const teamData = [
    //     { no: 1, name: 'John Doe', info: 'Some info', email: 'john@example.com', phone: '123-456-7890' },
    //     { no: 2, name: 'Jane Smith', info: 'More info', email: 'jane@example.com', phone: '987-654-3210' },
    //     { no: 3, name: 'John Doe', info: 'Some info', email: 'john@example.com', phone: '123-456-7890' },
    //     { no: 4, name: 'Jane Smith', info: 'More info', email: 'jane@example.com', phone: '987-654-3210' },
    //     { no: 1, name: 'John Doe', info: 'Some info', email: 'john@example.com', phone: '123-456-7890' },
    //     { no: 2, name: 'Jane Smith', info: 'More info', email: 'jane@example.com', phone: '987-654-3210' },
    //     { no: 1, name: 'John Doe', info: 'Some info', email: 'john@example.com', phone: '123-456-7890' },
    //     { no: 2, name: 'Jane Smith', info: 'More info', email: 'jane@example.com', phone: '987-654-3210' },
    //     { no: 1, name: 'John Doe', info: 'Some info', email: 'john@example.com', phone: '123-456-7890' },
    //   ];

    //   const volunteeringDataColumns = [
    //     "No .", "Name", "Job","Time",'Availability'
    //   ]

    // const volunteeringData = [
    //     { no: 1, name: 'John Doe', jobDescription: 'Editing Team', time: '5-7hours/week', availability: 'Available' },
    //     { no: 2, name: 'John Doe', jobDescription: 'Editing Team', time: '5-7hours/week', availability: 'Available' },
    //     { no: 3, name: 'John Doe', jobDescription: 'Editing Team', time: '5-7hours/week', availability: 'Available' },
    //     { no: 4, name: 'John Doe', jobDescription: 'Editing Team', time: '5-7hours/week', availability: 'Available' },
    //     { no: 5, name: 'John Doe', jobDescription: 'Editing Team', time: '5-7hours/week', availability: 'Available' },
    //     { no: 6, name: 'John Doe', jobDescription: 'Editing Team', time: '5-7hours/week', availability: 'Available' },
    //     { no: 1, name: 'John Doe', jobDescription: 'Editing Team', time: '5-7hours/week', availability: 'Available' },
    //     { no: 1, name: 'John Doe', jobDescription: 'Editing Team', time: '5-7hours/week', availability: 'Available' },
    //     { no: 1, name: 'John Doe', jobDescription: 'Editing Team', time: '5-7hours/week', availability: 'Available' },
    // ]

    // const lensDataColumns = [
    //   "No .","Name", "Scholarship", "URL"
    // ]

    // const lensData = [
    //     { no: 1, name: 'John Doe', scholarship: 'Italian Government', url: 'https://t.me/EduLens_Podcast/4'},
    //     { no: 2, name: 'John Doe', scholarship: 'Italian Government', url: 'https://t.me/EduLens_Podcast/4'},
    //     { no: 3, name: 'John Doe', scholarship: 'Italian Government', url: 'https://t.me/EduLens_Podcast/4'},
    //     { no: 4, name: 'John Doe', scholarship: 'Italian Government', url: 'https://t.me/EduLens_Podcast/4'},
    //     { no: 5, name: 'John Doe', scholarship: 'Italian Government', url: 'https://t.me/EduLens_Podcast/4'},
    //     { no: 6, name: 'John Doe', scholarship: 'Italian Government', url: 'https://t.me/EduLens_Podcast/4'},
    //     { no: 6, name: 'John Doe', scholarship: 'Italian Government', url: 'https://t.me/EduLens_Podcast/4'},
    // ]

    const [day, setDay] = useState('');

    useEffect(() => {
      const date = new Date();
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const currentDay = days[date.getDay()];
  
      setDay(currentDay);
    }, []);   

        const [currentDate, setCurrentDate] = useState('');
      
        useEffect(() => {
          const date = new Date();
      
          const formattedDate = date.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          });
      
          setCurrentDate(formattedDate);
        }, []);
      

  return (
 
    <div className='dashboard-container'>
      <div className="dashboard-hero">
        <Sidebar />

        {/* << edubridge numbers >>*/}
        
        <div className="edubridge-in-number">
          <h1 className='number-title'>EduBridge in Numbers</h1>
          <div className="numbers-container">
            <img className='numbers-calender' src={calender} alt="" />
            <p className='dateline'>
              <span className='day'>{day},</span>
              <span className='date'>{currentDate}</span>
            </p>
          </div>
          <img className='person-container' src={person} alt="" />
        </div>

        {/* <Table /> */}

      </div>

      {/* << edubridge charts >>*/}

      {/* <div className="charts">     
          {
            cards.map((card) => (
             <Card isWhite={card.isWhite} img={card.img} title={card.title} num={card.num} />
            ))
           }
        </div> */}


    </div>
    //     <p style={{fontWeight:'700', fontSize: '1.6em'}}>EduBridge in Numbers</p>
    //     <p className='dateline'><span className='day'>{day},</span> <span className='date'>{currentDate}</span></p>
    //     <div className="charts">

           
    //       {
    //         cards.map((card) => (
    //           <Card isWhite={card.isWhite} img={card.img} title={card.title} num={card.num} />
    //         ))
    //       }

    //     </div>

    //     <div className="dashboard-info">

    //       <Table title="EduBridge Team" btn="Add name" columns={teamDataColumns} data={teamData} />

    //       <Table title="Volunteering Team" btn="Add Volunteer" columns={volunteeringDataColumns} data={volunteeringData} />

    //       <Table title="EduBridge Lens" btn="Add Podcast" columns={lensDataColumns} data={lensData} />


    //     </div>
    // </div>
  )
}

export default Dashboard