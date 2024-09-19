import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Table from '../../components/Table/Table'

const DashboardEpi = () => {
  
  const EpiColumns = ["Images", "Name", "TelegramURL","YoutubeURL", "Actions"] 
  const EpiData = [
    {img: "https://www.edu-bridge.org.uk/assets/lens1-cf3yDK5A.png", Name:"Italian Government", Telegram:'https://t.me/EduLens_Podcast/4', Youtube:'https://t.me/EduLens_Podcast/4'},
    {img: "https://www.edu-bridge.org.uk/assets/lens1-cf3yDK5A.png", Name:"Italian Government", Telegram:'https://t.me/EduLens_Podcast/4', Youtube:'https://t.me/EduLens_Podcast/4'},
    {img: "https://www.edu-bridge.org.uk/assets/lens1-cf3yDK5A.png", Name:"Italian Government", Telegram:'https://t.me/EduLens_Podcast/4', Youtube:'https://t.me/EduLens_Podcast/4'},
    {img: "https://www.edu-bridge.org.uk/assets/lens1-cf3yDK5A.png", Name:"Italian Government", Telegram:'https://t.me/EduLens_Podcast/4', Youtube:'https://t.me/EduLens_Podcast/4'},
    {img: "https://www.edu-bridge.org.uk/assets/lens1-cf3yDK5A.png", Name:"Italian Government", Telegram:'https://t.me/EduLens_Podcast/4', Youtube:'https://t.me/EduLens_Podcast/4'},
    {img: "https://www.edu-bridge.org.uk/assets/lens1-cf3yDK5A.png", Name:"Italian Government", Telegram:'https://t.me/EduLens_Podcast/4', Youtube:'https://t.me/EduLens_Podcast/4'},
    {img: "https://www.edu-bridge.org.uk/assets/lens1-cf3yDK5A.png", Name:"Italian Government", Telegram:'https://t.me/EduLens_Podcast/4', Youtube:'https://t.me/EduLens_Podcast/4'},

  ]

  return (
    <>
        <div className="dashboard-container">
          <div className="opp-container">
            <Sidebar />
            <Table title="Episodes" btn="Add Episode" columns={EpiColumns} data={EpiData} />
            {/* <Table /> */}
          </div>
        </div>
    </>
  )
}

export default DashboardEpi