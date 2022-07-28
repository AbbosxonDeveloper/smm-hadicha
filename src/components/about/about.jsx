import smm from '../img/smm.jpg'
import smm2 from '../img/smm2.jpg'
import smm3 from '../img/smm3.jpg'
import smm4 from '../img/smm4.jpg'
import smm5 from '../img/smm5.jpg'
import smm6 from '../img/smm6.jpg'
import {Link} from 'react-router-dom'

import './about.css'
export const About = () => {

    
    return (
        
        <div className='container'>
        <h2>Smm da ishlash uchun:</h2>
        <img src={smm}  className='border' width={350} height={300} alt="smm" />   
        <img src={smm2} className='border' width={350} height={300}  alt="smm" />
        <img src={smm3} className='border' width={350} height={300}  alt="smm" />
        <img src={smm4} className='border' width={350} height={300}  alt="smm" />
        <img src={smm5} className='border' width={350} height={300}  alt="smm" />
        <img src={smm6} className='border' width={350} height={300}  alt="smm" />
        <button className='btn mt-3 btn-warning'>
        <Link to='/contact'>bizga bo'glanish uchun</Link>
        </button>
        <button className='btn mt-3 btn-danger'>
        <Link to='/'>sahifa boshiga qaytish</Link>
        </button>
        <button className='btn btn-info'>
            <a href="t:me/abbosxonBlog">telegram</a>
        </button>
    </div>
        
        )


}