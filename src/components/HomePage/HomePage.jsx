import './HomeStyle.css'
import NavBar from './../NavBar/NavBar'
import hero from './../../assets/hero-img.png'
import { Link } from 'react-router-dom'
import client1 from './../../assets/client-1.png'
import client2 from './../../assets/client-2.png'
import client3 from './../../assets/client-3.png'
import client4 from './../../assets/client-4.png'
import client5 from './../../assets/client-5.png'
import client6 from './../../assets/client-6.png'
import 'aos/dist/aos.css';
import useAOS from '../../hooks/useAOS.JSX'
function HomePage() {
    const brands=[client1,client2,client3,client4,client5,client6]
    useAOS()
    return (
    
    <div className='container' id='home'>
        <section>

        <NavBar />
<div className="sectionsHome">
    <div className="left">
  <h2 data-aos="fade-up"data-aos-duration="1000" data-aos-delay="500">Grow your business with Vesperr</h2>
  <p data-aos="fade-up"data-aos-duration="1000" data-aos-delay="1000">We are team of talented designers making websites with Bootstrap</p>
  <div data-aos="fade-up"data-aos-duration="1000" data-aos-delay="1500" className="btnTransparent">
        <button><Link to="/about">Get Started</Link></button>
    </div>
    </div>
    <div className="right" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="1000">
    <img src={hero} alt="hero" className='animationImg'/>
    </div>
   
</div>
        </section>
<div className="brands ">
   {
    brands.map((e,index)=>(
        <div key={index} className="brandImg" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="1000"><img  src={e} alt="brand" /></div>
    ))
   }
</div>
    </div>
  )
}

export default HomePage