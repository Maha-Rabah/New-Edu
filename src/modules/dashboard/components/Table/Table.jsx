import React from 'react'
import edit from '../../assets/edit.svg'
import trash from '../../assets/trash.svg'
import plus from '../../assets/plus.svg'
import './table.css'

const Table = ({title, btn, columns, data}) => {
  return (
    <>
     <div className="dashboard-header">
                <h4 className="dashboard-header-title">{title}</h4>
                <button type='button' className="dashboard-header-addbtn">{btn} <img src={plus} alt="" /></button>
            </div>

            <div className="table-container">
        <table className="custom-table">
          <thead>
            <tr>
                {
                    columns.map( (c,i) => {
                        if(c=="Name"){
                            return (
                                <th style={{backgroundColor:"#cbcbcb"}}>{c}</th>
                                   )
                                }
                        else {
                            return (
                                <th>{c}</th>
                                   )
                             }
                        }
                    )
                }
              <th></th>
            </tr>
          </thead>
          <tbody>

            {
                title=="EduBridge Team" && data.map((row, index) => (
                    <tr key={index}>
                      <td>{row.no}</td>
                      <td>{row.name}</td>
                      <td>{row.info}</td>
                      <td>{row.email}</td>
                      <td>{row.phone}</td>
                      <td className='flex-icons'> <a href="#"><img src={trash} alt="" /></a> <a href="#"><img src={edit} alt="" /></a></td>
                    </tr>
                  ))
            }

            {
                title=="Volunteering Team" && data.map((row, index) => (
                    <tr key={index}>
                      <td>{row.no}</td>
                      <td>{row.name}</td>
                      <td>{row.jobDescription}</td>
                      <td>{row.time}</td>
                      <td>{row.availability}</td>
                      <td className='flex-icons'> <a href="#"><img src={trash} alt="" /></a> <a href="#"><img src={edit} alt="" /></a></td>
                    </tr>
                  ))
            }

            {
                title=="EduBridge Lens" && data.map((row, index) => (
                    <tr key={index}>
                        <td>{row.no}</td>
                        <td>{row.name}</td>
                        <td>{row.scholarship}</td>
                        <td>{row.url}</td>
                      <td className='flex-icons'> <a href="#"><img src={trash} alt="" /></a> <a href="#"><img src={edit} alt="" /></a></td>
                    </tr>
                  ))
            }
            

          </tbody>
        </table>
    </div>
    </>
  )
}

export default Table