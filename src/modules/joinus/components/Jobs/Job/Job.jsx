import "./job.css"
import pinIcon from '../../../assets/Pin_alt.svg'
import timeIcon from '../../../assets/Time.svg'
import fileIcon from '../../../assets/File_dock_add.svg'
import {  Link } from "react-router-dom"

const Job = ({id, career, pos, time, lastday}) => {
    return (
        <div className="joinUs-op-job" >
            <div className="firstline">
                <p>{career}</p>
                <Link to={`/joinus/${id}`} className="job-desc">
                    Job Description <span style={{textShadow:"0.5px 0.5px 0px gray"}}>→</span>
                </Link>
        </div>

        <h4 className='job-pos'>{pos}</h4>
        <div className="joinUs-op-details">
            <ul>
                <li className='detail'><img src={pinIcon} alt="" className='icon' /> Remote</li>
                <li className='detail'><img src={timeIcon} alt="" className='icon' /> {time} </li>
                <li className='detail'><img src={fileIcon} alt="" className='icon' />{lastday}</li>
            </ul>
        </div>
    </div>
    )
}

export default Job