import {useEffect} from "react"
import Job from './Job/Job'

const Jobs = () => {
    const Jobs = [
        { id: "1", pos: "Graphic Design" , time: "5-7 hours/week", lastday: "Open till filled!", career: "Editing Team", job_info: "bla bla"},
        { id: "2", pos: "Video Editor" , time: "5-7 hours/week", lastday: "Open till filled!", career: "Editing Team", job_info: "bla bla2"},
        { id: "3", pos: "UI/ UX" , time: "7-10 hours/week", lastday: "Open till filled!", career: "IT Team", job_info: "bla bla3"},
        { id: "4", pos: "Communication Manager" , time: "5-7 hours/week", lastday: "Open till filled!", career: "Administration Team", job_info: "bla bla4"},
        { id: "5", pos: "HR Assistant" , time: "7-10 hours/week", lastday: "Open till filled!", career: "Administration Team", job_info: "bla bla5"},
        { id: "6", pos: "Executive Assistant" , time: "7-10 hours/week", lastday: "Open till filled!", career: "Administration Team", job_info: "bla bla6"},
    ]

    useEffect(()=> {
        // Fetch Data....
    }, [])
    
return (
    <>
        {
            Jobs.map((item) => (
                <Job
                    id={item.id}
                    key={item.id}
                    career={item.career}
                    pos={item.pos}
                    time={item.time}
                    lastday={item.lastday}
                />
            )
        ) 
        }
    </>
)
}

export default Jobs