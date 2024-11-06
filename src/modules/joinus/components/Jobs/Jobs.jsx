import {useEffect, useState} from "react"
import Job from './Job/Job'
import Loader from "../../../../UI/Loader/Loader"

const Jobs = () => {
    /*
    Dummy Data:
    const Jobs = [
        { 
            id: "1",
            pos: "Graphic Design",
            time: "5-7 hours/week",
            lastday: "Open till filled!",
            career: "Editing Team",
            job_info: "bla bla"
        },
        { id: "2", pos: "Video Editor" , time: "5-7 hours/week", lastday: "Open till filled!", career: "Editing Team", job_info: "bla bla2"},
        { id: "3", pos: "UI/ UX" , time: "7-10 hours/week", lastday: "Open till filled!", career: "IT Team", job_info: "bla bla3"},
        { id: "4", pos: "Communication Manager" , time: "5-7 hours/week", lastday: "Open till filled!", career: "Administration Team", job_info: "bla bla4"},
        { id: "5", pos: "HR Assistant" , time: "7-10 hours/week", lastday: "Open till filled!", career: "Administration Team", job_info: "bla bla5"},
        { id: "6", pos: "Executive Assistant" , time: "7-10 hours/week", lastday: "Open till filled!", career: "Administration Team", job_info: "bla bla6"},
    ]
    */
    
    const [jobsData, setJobsData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(null)

    useEffect( () => {
        setIsLoading(false)
        setIsError(null)
        
        async function getData() {
            try {
                const response = await fetch("https://edu-bridges.somar-kesen.com/api/v1/volunteers")
                const data = await response.json()
                setIsLoading(true)
                const JobsData = data.data.map((item) => {
                    return {
                        id: item.id,
                        pos: item.position,
                        time: item.time,
                        lastday: "Open till filled!",
                        career: item.team,
                        job_info: item.summary,
                        available: item.available 
                    }                
                })
                setJobsData(JobsData)
            } catch(error) {
                setIsError(error.message)
            }
        }
        getData()
    }, [])
    
    console.log(jobsData)

return (
    <>
        {
            isLoading ?
            jobsData.map((item) => (
                item.available != 0 ?
                <Job
                    id={item.id}
                    key={item.id}
                    career={item.career}
                    pos={item.pos}
                    time={item.time}
                    lastday={item.lastday}
                /> 
                :
                null
            ))  : isError ? 
                <p className="centering">🚨 {isError}</p>
                : <Loader/> 
        
        }
    </>
)
}

export default Jobs