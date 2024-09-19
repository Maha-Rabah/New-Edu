import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Table from '../../components/Table/Table'
import profile from '../../assets/profile.svg'
import './dashboardTeam.css'

const DashboardTeam = () => {

  const teamColumns = [
    "","No.", "Name","Position", "Email", "Phone Number", "Actions"
  ]


const teamData = [
  {No:'1', Name:'Ehab Al-Serawan', Position:'FrontEnd Developer', Email:'ehab.sierwan@gmail.com', Phone: '00963 93479393', img: profile},
  {No:'1', Name:'Ehab Al-Serawan', Position:'FrontEnd Developer', Email:'ehab.sierwan@gmail.com', Phone: '00963 93479393', img: profile},
  {No:'1', Name:'Ehab Al-Serawan', Position:'FrontEnd Developer', Email:'ehab.sierwan@gmail.com', Phone: '00963 93479393', img: profile},
  {No:'1', Name:'Ehab Al-Serawan', Position:'FrontEnd Developer', Email:'ehab.sierwan@gmail.com', Phone: '00963 93479393', img: profile},
  {No:'1', Name:'Ehab Al-Serawan', Position:'FrontEnd Developer', Email:'ehab.sierwan@gmail.com', Phone: '00963 93479393', img: profile},
  {No:'1', Name:'Ehab Al-Serawan', Position:'FrontEnd Developer', Email:'ehab.sierwan@gmail.com', Phone: '00963 93479393', img: profile},
]
  return (
    <>
    <div className="dashboard-container">
      <div className="team-container">
        <Sidebar />
        <Table title="Team" btn="Add Member" columns={teamColumns} data={teamData} />
        {/* <Table /> */}
      </div>
    </div>
</>
  )
}

export default DashboardTeam