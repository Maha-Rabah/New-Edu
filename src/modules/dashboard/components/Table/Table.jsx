import './table.css'
import edit from '../../assets/edit.svg'
import trash from '../../assets/trash.svg'
import desc from '../../assets/desc.svg'
import { BiCaretRight } from "react-icons/bi";
import TelegramLogo from '../../assets/TelegramLogo.svg'
import YoutubeLogo from '../../assets/YoutubeLogo.svg'
import { GraphicDesign } from '../../Opp/components/JobDescription/constants/const';
import { Link } from 'react-router-dom';
import { BiSolidPlusSquare } from 'react-icons/bi';

const Table = ({title, btn, columns, data}) => {

  // const handleJob = (position) => {
  //   if(position=="GraphicDesign") {

  //   }
  // }

  return (
    <div>
      <div className="add-btn-container">
        <button className='add-btn'>Add {title} <BiSolidPlusSquare /></button>
      </div>
 <table class="custom-table">
    
    <thead>
      <tr>
        {
        columns.map(
        (c,i) => {
          if(c=="TelegramURL") {
            return (
              <th>
                <div className="icon-in-head">
                  <img src={TelegramLogo} alt="" style={{width:'20px'}}/> {c}
                </div>
              </th>
            )
          } 
          else if (c=="YoutubeURL") {
            return (
              <th>
                <div className="icon-in-head">
                  <img src={YoutubeLogo} alt="" style={{width:'20px'}}/> {c}
                </div>
              </th>
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



      </tr>
    </thead>

    {
      title=="Opportunities" && data.map((row, index) => (
        <tbody>
          <tr className='first-row'>
            <td style={{color:'gray'}}>{row.No}.</td>
            <td>{row.Position}</td>
            <td>{row.Time}</td>
            <td>{row.Team}</td>
            <td>{row.Available}</td>
            <td>
              <button class="edit-btn"><img src={edit} alt="" /></button>
              <button class="delete-btn"><img src={trash} alt="" /></button>
            </td>
          </tr>
          <tr className="second-row no-border">
            <td colspan="7" >
              <div className='dashboard-job-desc'>
                    <Link to="../jobdescription" data={GraphicDesign}>Job Description <BiCaretRight className='yellow-arrow'/></Link>
            
                {/* <Link onClick={() => handleJob(row.Position)}></Link> */}
              </div>
            </td>
          </tr>
        </tbody>
              ))
    }

{
      title=="Statistics" && data.map((row, index) => (
        <tbody>
          <tr className='first-row'>
            <td style={{color:'gray'}}>{row.No}.</td>
            <td>{row.Name}</td>
            <td>{row.Count}</td>
            <td>{row.Type}</td>
            <td>
              <button class="edit-btn"><img src={edit} alt="" /></button>
              <button class="delete-btn"><img src={trash} alt="" /></button>
            </td>
          </tr>
        </tbody>
              ))
    }

{
      title=="Team" && data.map((row, index) => (
        <tbody>

          <tr className='first-row'>
            <td><img src={row.img} className='profile-img'/></td>
            <td style={{color:'gray'}}>{row.No}.</td>
            <td>{row.Name}</td>
            <td>{row.Position}</td>
            <td>{row.Email}</td>
            <td>{row.Phone}</td>
            <td>
              <button className="edit-btn"><img src={edit} alt="" /></button>
              <button className="delete-btn"><img src={trash} alt="" /></button>
            </td>
          </tr>
          <tr className="second-row no-border">
            <td colspan="7" >
              <div className='desc-container'>
                <img src={desc} alt="" style={{width:'25px'}}/>
                <p><span style={{color:'var(--third-color)'}}>description:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quibusdam asperiores maxime nesciunt ullam laudantium distinctio laboriosam id illum et.</p>
              </div>
            </td>
          </tr>
        </tbody>
              ))
    }


{
      title=="Episodes" && data.map((row, index) => (
        <tbody>
          <tr className='first-row'>
            <td><img src={row.img} className='epi-img'/></td>
            <td>{row.Name}</td>
            <td className='link-row'><a href={row.Telegram}>{row.Telegram}</a></td>
            <td className='link-row'><a href={row.Youtube}>{row.Youtube}</a></td>
            <td>
              <button className="edit-btn"><img src={edit} alt="" /></button>
              <button className="delete-btn"><img src={trash} alt="" /></button>
            </td>
          </tr>
        </tbody>
              ))
    }

{
      title=="Blog" && data.map((row, index) => (
        <tbody>
          <tr className='first-row'>
            <td><img src={row.img} className='epi-img'/></td>
            <td  rowSpan={1}>{row.No}.</td>
            <td>{row.Name}</td>
            <td>{row.Date}</td>
            <td>{row.Writer}</td>
            <td>{row.Country}</td>
            <td>
              <button className="edit-btn"><img src={edit} alt="" /></button>
              <button className="delete-btn"><img src={trash} alt="" /></button>
            </td>
          </tr>
          <tr className="second-row no-border">
            <td colspan="7" >
              <div className='blog-content-container'>
                <img src={desc} alt="" style={{width:'25px'}}/>
                <p className='blog-content'><span style={{color:'var(--third-color)'}}>Text:</span> Lopsum dolor sit amet Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, recusandae.  consectetur . Dele harum voluptates iure. Vitae sint Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, expedita. esse temporibus ipsa. Lorem ipsum dolor sit amet.</p>
              </div>
            </td>
          </tr>
          <tr className="second-row no-border">
            <td colspan="7" >
              <div className='dashboard-job-desc'>
                <a href="">Learn More <BiCaretRight className='yellow-arrow'/></a>
              </div>
            </td>
          </tr>
        </tbody>
              ))
    }

  </table>

  </div>

  )
}

export default Table