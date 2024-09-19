import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Table from '../../components/Table/Table'
import './dashboardStats.css'

const DashboardStats = () => {

    const statsColumns = [
      "No .","Name", "Count","Type", "Actions"
    ]


  const statsData = [
    {No:'1', Name: 'Episodes', Count:'15', Type:'EduLens'},
    {No:'1', Name: 'Episodes', Count:'15', Type:'EduLens'},
    {No:'1', Name: 'Episodes', Count:'15', Type:'EduLens'},
    {No:'1', Name: 'Episodes', Count:'15', Type:'EduLens'},
    {No:'1', Name: 'Episodes', Count:'15', Type:'EduLens'},
    {No:'1', Name: 'Episodes', Count:'15', Type:'EduLens'},
    {No:'1', Name: 'Episodes', Count:'15', Type:'EduLens'},
    {No:'1', Name: 'Episodes', Count:'15', Type:'EduLens'},

  ]

  return (
    <>
        <div className="dashboard-container">
          <div className="stats-container">
            <Sidebar />
            <Table className="stats-table" title="Statistics" btn="Add statistics" columns={statsColumns} data={statsData} />

          </div>
        </div>
    </>
  )

}

export default DashboardStats