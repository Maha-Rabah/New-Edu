import './modal.css'


const Modal = () => {
  
    return (
      <>
        <div className="modal">
            <div className="overlay"></div>
                 <div className="modal-content">
                        <h2>Job title</h2>
                        <div style={{fontFamily: "Arial"}}>
            <br />
            <p>
                <strong>Position Summary: </strong>
                The UX/UI Designer is responsible for designing intuitive
                and engaging user experiences for the organization’s digital platform.
                This role involves understanding user needs, creating wireframes
                and prototypes, and ensuring a seamless and visually appealing
                interface for all digital touchpoints.
            </p>
            <br />
            <strong>Duties and Responsibilities:</strong>
            <br />
            <ul style={{listStyle: "unset"}}>
                <li>Understand user needs and preferences.</li>
                <li>Design and implement user interfaces for websites.</li>
                <li>Collaborate with developers to ensure the technical feasibility and optimal implementation of UI/UX designs.</li>
                <li>Create and maintain design systems, style guides, and UI pattern libraries to ensure consistency across all digital products.</li>
                <li>Conduct usability testing and analyze user feedback to continuously improve the user experience.</li>
                <li>Work closely with the communications and marketing team to align designs with the organization’s branding and messaging.</li>
                <li>Participate in brainstorming sessions and contribute to the overall design strategy.</li>
            </ul>
            <br />
            <strong>Qualifications and Skills:</strong>
            <br />
            <ul style={{listStyle: "unset"}}>
                <li>Experience in UX/UI design</li>
                <li>Strong portfolio demonstrating a range of UX/UI design projects.</li>
                <li>Proficiency in design and prototyping tools such as Sketch, Figma, Adobe XD, or similar.</li>
                <li>Solid understanding of user-centered design principles and best practices.</li>
                <li>Strong visual design skills with a keen eye for detail.</li>
                <li>Experience with conducting user research and usability testing.</li>
                <li>Excellent problem-solving and analytical skills.</li>
                <li>Strong communication and collaboration skills.</li>
                <li>Ability to work independently and manage multiple projects simultaneously.</li>
                <li>Basic knowledge of HTML, CSS, and JavaScript is a plus.</li>
            </ul>
            <br />
            <strong>Work Environment:</strong>
            <br />
            <ul style={{listStyle: "unset"}}>
                <li>This Position is remote</li>
            </ul>
            <br />
            <strong>Volunteering Hours:</strong>
            <br />
            <ul>
                <li>7-10 hours per week.</li>
            </ul>
            <br />
            <strong>Reporting Structure:</strong>
            <br />
            <ul>
                <li>Reports to the Tech Lead.</li>
            </ul>
            <br />
            <strong>Benefits:</strong>
            <br />
            Edu Bridge commits to: 
            <br />
            <ul>
                <li>
                    Support the Volunteer in applying for scholarships,
                     including, but not limited to, reviewing documents such
                      as motivation letters, CVs, and recommendation letters.
                </li>
                <li>
                    One bi-monthly consulting session lasting up
                    to one hour will be provided by one of its mentors.
                </li>
                <li>
                    Supporting the Volunteer with university application fees for one
                    university up to 60$ after volunteering for six months.
                </li>
                <li>
                    Providing the Volunteer with a recommendation letter after volunteering for
                    six months.
                </li>
                <li>
                    Provide the Volunteer with a Duolingo test fee exemption after one month.
                </li>
                <li>
                    Supporting the Volunteer with the Organization network.
                </li>
            </ul>
            <br />
            <strong>Application Process:</strong>
            <br />
            <ul>
                <li>Interested candidates should fill in the following <a href="https://forms.gle/vCU5gXpxrPpmPwJ26">Google Form</a></li>
            </ul>
        </div>
                        <button className="close-modal">
                            CLOSE
                        </button>
                </div>
        </div>
      </>
    );
}

export default Modal;