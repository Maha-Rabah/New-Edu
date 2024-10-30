import "./job.css"
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const JobDescription = () => {
    const { jobId } = useParams();
    console.log(jobId)
    
    useEffect(()=> {
        // fetch Data
    },[])

    return (
        <div className="modal-content">
                <div className='desc'>
            
                <h2 className="jobDesc"><strong>Position Title: </ strong>HR Assistant</h2>
            
                
                <strong>Position Summary: </strong>
                <br />
                <div>
                    The HR Assistant provides administrative and operational support to the HR department.
                    The role involves assisting with various HR functions, such as employee onboarding,
                    benefits administration, and record-keeping, to ensure the smooth and efficient running of the HR processes.
                </div>
                
                <br />

                <strong>Duties and Responsibilities:</strong>
                <br />
                <div>
                    Assist with the employee onboarding process, including preparing new hire paperwork and setting up employee files.
                    Provide support in the administration of employee benefits, such as health insurance, retirement plans, and leave management.
                    Maintain accurate and up-to-date employee records and personnel files.
                    Coordinate and schedule interviews, orientations, and training sessions.
                    Assist in the preparation of HR-related reports and presentations.
                    Respond to general HR-related inquiries from employees.
                    Provide administrative support to the HR team as needed.
                </div>
            
                <br />
                
                <strong>Qualifications and Skills:</strong>
                <br />
                
                <div>
                    Experience in an HR or administrative support role.
                    Strong organizational and time management skills.
                    Proficiency in using HR-related software and databases.
                    Excellent written and verbal communication skills.
                    Attention to detail and ability to maintain confidentiality.
                    Knowledge of HR policies and practices.
                </div>
            
                <br />
            
                <strong>Work Environment:</strong>
                <br />
                
                <div>
                    This Position is remote
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
                    Support the Volunteer in applying for scholarships,
                    including, but not limited to, reviewing documents such
                    as motivation letters, CVs, and recommendation letters.
                    One bi-monthly consulting session lasting up
                    to one hour will be provided by one of its mentors.
                    Supporting the Volunteer with university application fees for one
                    university up to 60$ after volunteering for six months.
                    Providing the Volunteer with a recommendation letter after volunteering for
                    six months.
                    Provide the Volunteer with a Duolingo test fee exemption after one month.
                    Supporting the Volunteer with the Organization network.
            </div>

            <br />
            <strong>Application Process:</strong>
            <br />
            
            <div>Interested candidates should fill in the following <a href="https://forms.gle/vCU5gXpxrPpmPwJ26">Google Form</a></div>
        </div>
        </div>
    )
}

export default JobDescription