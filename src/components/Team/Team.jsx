import React from 'react'
import './TeamStyle.css'
import Title from '../Title/Title'
import team1 from './../../assets/team-1.jpg'
import team2 from './../../assets/team-2.jpg'
import team3 from './../../assets/team-3.jpg'
import team4 from './../../assets/team-4.jpg'

import 'aos/dist/aos.css';
import useAOS from '../../hooks/useAOS.JSX'
import {BiLogoFacebookCircle} from 'react-icons/bi'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'

function Team() {
    useAOS()
  const Team=[
    {   id:1,
        name:"Walter White",
        image:team1,
        role:"Chief Executive Officer",
        linl1:<AiFillTwitterCircle className='iconT'/>,
        linl2:<BiLogoFacebookCircle className='iconT'/>,
        linl3:<AiFillInstagram className='iconT'/>,
        linl4:<AiFillLinkedin className='iconT'/>,
    },{   id:2,
        name:"Sarah Jhonson",
        image:team2,
        role:"Product Manager",
        linl1:<AiFillTwitterCircle className='iconT'/>,
        linl2:<BiLogoFacebookCircle className='iconT'/>,
        linl3:<AiFillInstagram className='iconT'/>,
        linl4:<AiFillLinkedin className='iconT'/>,
    },{   id:3,
        name:"William Anderson",
        image:team3,
        role:"CTO",
        linl1:<AiFillTwitterCircle className='iconT'/>,
        linl2:<BiLogoFacebookCircle className='iconT'/>,
        linl3:<AiFillInstagram className='iconT'/>,
        linl4:<AiFillLinkedin className='iconT'/>,
    },{   id:4,
        name:"Amanda Jepson",
        image:team4,
        role:"Accountant",
        linl1:<AiFillTwitterCircle className='iconT'/>,
        linl2:<BiLogoFacebookCircle className='iconT'/>,
        linl3:<AiFillInstagram className='iconT'/>,
        linl4:<AiFillLinkedin className='iconT'/>,
    }
  ]
  
    return (
   
   
   
   <div className='teamContainer' id='team'>
  <Title title="TEAM" desc="Necessitatibus eius consequatur ex aliquid fuga eum quidem"/>
      <div className="cardsTeam">
{
    Team.map((e)=>(
        <div key={e.id}
            className="cardT" data-aos="zoom-out-up" data-aos-delay="700">
            <div className="imgT">
                <img src={e.image} alt="img" />
                <div className="socials">
                    <span>{e.linl1}</span>
                    <span>{e.linl2}</span>
                    <span>{e.linl3}</span>
                    <span>{e.linl4}</span>
                </div>
            </div>
            <div className="descT">
          <h2>{e.name}</h2>
          <div className='role'>{e.role}</div>
            </div>
        </div>
    ))
}
      </div>
    </div>
  )
}

export default Team