import vision from '../../assets/vision.png';
import './visionStyle.css'
import roze from '../../../../assets/roze.svg'


const title=['Our Vision'];
const title2=['Our Mission']
const descvision= ['We envision a generation of Syrian youth empowered to overcome challenges and become key contributors in shaping a brighter future for Syria and the world.'];
const descmission= ['Our mission is to ensure that every Syrian has the opportunity for a better life through access to quality education.'];

const Vision = () => {
  return (
    <div className='vision'>
        <div className="container">
          
            <div className="info">
                <h2 className='title'>{title}</h2>
                <p className='desc'>{descvision}</p>
                <h2 className='title'>{title2}</h2>
                <p className='desc'>{descmission}</p>
            </div>

            <div className="image">
              <img src={vision}  className="visimg"/>
            </div>

        </div>
      <img src={roze} alt="" className='roze2' />

    </div>
  )
}

export default Vision