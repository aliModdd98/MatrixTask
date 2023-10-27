import React from 'react'
import './ServisesStyle.css'
import Title from '../Title/Title'
import {IoBasketballOutline} from 'react-icons/io5'
import {BsFileEarmarkText}from 'react-icons/bs'
import {MdSpeed}from 'react-icons/md'
import {HiOutlineArrowLongRight}from 'react-icons/hi2'
import {RiEarthFill}from 'react-icons/ri'
import Serv1 from './../../assets/serv1.avif'
import Serv2 from './../../assets/serv2.jpg'
import Serv3 from './../../assets/serv3.avif'
import Serv4 from './../../assets/serv4.avif'
import { Link } from 'react-router-dom'
import 'aos/dist/aos.css';
import useAOS from '../../hooks/useAOS.JSX'
function Servises() {
    
  useAOS()
  return (
    <div className=' containerServises' id='servises'>
     <Title title="Servises" desc="Magnam dolores commodi suscipit eius consequatur ex aliquid fug"/>
    
     <div className="servisesGrid">
        <div className="serviseGrid" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-delay="500">
        <div class="half-circle"></div>
        <IoBasketballOutline className="icon"/>
        <h3>Lorem Ipsum</h3>
        <div className="descServises">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</div>
        </div>
        <div className="serviseGrid" data-aos="fade-up" data-aos-delay="700"
     data-aos-anchor-placement="top-bottom"><div class="half-circle"></div><BsFileEarmarkText className="icon"/>
        <h3>Sed ut perspiciatis</h3>
        <div className="descServises">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</div>
</div>
        <div className="serviseGrid" data-aos="fade-up" data-aos-delay="900"
     data-aos-anchor-placement="top-bottom"><div class="half-circle"></div><MdSpeed className="icon"/>
        <h3>Magni Dolores</h3>
        <div className="descServises">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</div></div>
        <div className="serviseGrid" data-aos="fade-up" data-aos-delay="1200"
     data-aos-anchor-placement="top-bottom"><div class="half-circle"></div><RiEarthFill className="icon"/>
        <h3>Nemo Enim</h3>
        <div className="descServises">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis

</div></div>
     </div>






     <div className="servisesDetails">
  <div className="itemdetails" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-delay="500">
    <div className='image-container'>
      <img src={Serv1} alt="" />
    </div>
    <div class="text-container">
      <h2>Lobira Duno</h2>
      <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua.</p>
      <div className="more"><Link to=''><HiOutlineArrowLongRight/>Read more</Link></div>
    </div>
  </div>
  <div className="itemdetails" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-delay="700">
    <div className='image-container'>
      <img src={Serv2} alt="" />
    </div>
    <div class="text-container">
      <h2>Limere Radses</h2>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem.</p>
      <div className="more"><Link to=''><HiOutlineArrowLongRight/>Read more</Link></div>
    </div>
  </div>
  <div className="itemdetails" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-delay="900">
    <div className='image-container'>
      <img src={Serv3} alt="" />
    </div>
    <div class="text-container">
      <h2>Nive Lodo</h2>
      <p>Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores.</p>
      <div className="more"><Link to=''><HiOutlineArrowLongRight/>Read more</Link></div>
    </div>
  </div>
  <div className="itemdetails" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-delay="1200">
    <div className='image-container'>
      <img src={Serv4} alt="" />
    </div>
    <div class="text-container">
      <h2>Pale Treda</h2>
      <p>Nostrum eum sed et autem dolorum perspiciatis. Magni porro quisquam laudantium voluptatem.</p>
      <div className="more"><Link to=''><HiOutlineArrowLongRight/>Read more</Link></div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Servises