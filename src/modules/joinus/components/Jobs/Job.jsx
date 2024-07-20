import './job.css'
import pin from '../../assets/Pin_alt.svg'
import time from '../../assets/Time.svg'
import file from '../../assets/File_dock_add.svg'
import { useState } from "react";
import Ui_ux from './UiUx/ui_ux';
import Marketing from './Marketing/Marketing';
import Graphic from './Graphic/Graphic';
import Video from './Video/Video';



const Job = ({jobdescs}) => {


    const [job, setJob] = useState("");


    const [modal, setModal] = useState(false);
        const toggleModal = (job) => {
            setModal(!modal);
            setJob(job);
            };
            
        if(modal) {
            document.body.style.overflowY= "hidden"
        } else {
            document.body.style.overflowY = "scroll"
              }

  return (
    <>

        {jobdescs.map(function (item) {

        return (
                <>
                <div className="joinUs-op-job" >
                    <div className="firstline">
                        <p>{item.career}</p>
                        <a href="#" className='job-desc' onClick={() => toggleModal(item.pos)} >Job Description <span style={{textShadow:"0.5px 0.5px 0px gray"}}>→</span></a>
                        
                    </div>

                    {modal && job === "UI/ UX" &&(
                    <div className="modal">
                        <div onClick={toggleModal} className="overlay"></div>
                             <div className="modal-content">
                                <Ui_ux />

                                <button onClick={toggleModal} className="close-modal">
                                    CLOSE
                                </button>
                        </div>
                    </div>
                        )}

                    {modal && job === "Communication Manager" &&(
                    <div className="modal">
                        <div onClick={toggleModal} className="overlay"></div>
                             <div className="modal-content">
                                <Marketing />

                                <button onClick={toggleModal} className="close-modal">
                                    CLOSE
                                </button>
                        </div>
                    </div>
                        )} 

                    {modal && job === "Graphic Design" &&(
                    <div className="modal">
                        <div onClick={toggleModal} className="overlay"></div>
                             <div className="modal-content">
                                <Graphic />

                                <button onClick={toggleModal} className="close-modal">
                                    CLOSE
                                </button>
                        </div>
                    </div>
                        )}    

                    {modal && job === "Video Editor" &&(
                    <div className="modal">
                        <div onClick={toggleModal} className="overlay"></div>
                             <div className="modal-content">
                                <Video />

                                <button onClick={toggleModal} className="close-modal">
                                    CLOSE
                                </button>
                        </div>
                    </div>
                        )}                    


                    <h4 className='job-pos'>{item.pos}</h4>
                    <div className="joinUs-op-details">
                        <ul>
                            <li className='detail'><img src={pin} alt="" className='icon' /> Remote</li>
                            <li className='detail'><img src={time} alt="" className='icon' /> {item.time} </li>
                            <li className='detail'><img src={file} alt="" className='icon' />{item.lastday}</li>
                        </ul>
                    </div>
                </div>

               

                </>
                )

            }
        ) 
        
        }

        
        
    </>
  )
}

export default Job