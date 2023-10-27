import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './../About/AboutStyle.css'
import useAOS from '../../hooks/useAOS.JSX';

function Title({title,desc}) {
  useAOS()
  return (<>
    <div className="titlePage" data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" data-aos-duration="1000">
    <div className="Line"></div>
    <h2>{title}</h2>
        <div className="Line"></div>
  </div>
  <div className='contentStyle'data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" data-aos-duration="1000">{desc}</div>
  </>
  
  )
}

export default Title