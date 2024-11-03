import "./job.css"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const JobDescription = () => {
    /*
    Dummy Data:
    {
        "id": 2,
        "position": "Front-End Developer",
        "summary": "HTML, CSS, JS",
        "responsibilities": "Building User Interfaces",
        "skills": "HTML, CSS, JS",
        "benefits": "benefits",
        "work_environment": "work_environment",
        "url_apply": "url_apply",
        
        "team": "IT",
        "time": "22.22",
        "available": 1
    }
    */
    
    const { jobId } = useParams();
    const [jobData, setJobData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(null)


    useEffect( () => {
        setIsLoading(false)
        setIsError(null)
        
        async function getData() {
            try {
                const response = await fetch(`https://edu-bridges.somar-kesen.com/api/v1/volunteers/${jobId}`)
                const data = await response.json()
                setIsLoading(true)
                setJobData({
                        position: data.data.position,
                        summary: data.data.summary,
                        responsibilities: data.data.responsibilities,
                        skills: data.data.skills,
                        benefits: data.data.benefits,
                        work_environment: data.data.work_environment,
                        url_apply: data.data.url_apply,
                })
            } catch(error) {
                setIsError(error.message)
            }
        }
        getData()
    }, [jobId])

    return (
        <div className="modal-content">
                {
                    isLoading ?
                    <div className='desc'>
                <h2 className="jobDesc"><strong>Position Title: </ strong>{jobData.position}</h2>
            
                
                <strong>Position Summary: </strong>
                <br />
                <div>
                    {jobData.summary}
                </div>
                
                <br />

                <strong>Duties and Responsibilities:</strong>
                <br />
                <div>
                    {jobData.responsibilities}
                </div>
            
                <br />
                
                <strong>Qualifications and Skills:</strong>
                <br />
                
                <div>
                    {jobData.skills}
                </div>
            
                <br />
            
                <strong>Work Environment:</strong>
                <br />
                
                <div>
                    {jobData.work_environment}
                </div>
            
                <br />
            
            <strong>Reporting Sturcture:</strong>
            <br />
            
                <div>Reports to Hr Manager.</div>
            
            <br />
            
            <strong>Benefits:</strong>
            <br />
            Edu Bridge commits to: 
            
            <br />
            
            <div>
                {jobData.benefits}
            </div>

            <br />
            <strong>Application Process:</strong>
            <br />
            
            <div>Interested candidates should fill in the following <a href={`${jobData.url_apply}`}>Google Form</a></div>
        </div> : isError ? 
                <p className="centering">{isError}</p>
                : <p className="centering">Loading....</p> 
        }
        </div>
    )
}

export default JobDescription