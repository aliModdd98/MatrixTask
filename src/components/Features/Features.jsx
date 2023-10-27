import React from 'react'
import 'aos/dist/aos.css';
import useAOS from '../../hooks/useAOS.JSX'

import './FeaturesStyle.css'
import Title from '../Title/Title'
import {AiOutlineShop} from 'react-icons/ai'
import {VscGraph} from 'react-icons/vsc'
import {FaRegCalendarAlt} from 'react-icons/fa'
import {BiPaintRoll} from 'react-icons/bi'
import {PiCylinder} from 'react-icons/pi'
import {LuCircleDotDashed} from 'react-icons/lu'
import {FiFileText} from 'react-icons/fi'
import {RiHome7Line} from 'react-icons/ri'
import {LiaShipSolid} from 'react-icons/lia'
import {RiWirelessChargingLine} from 'react-icons/ri'
import {IoIosFingerPrint}from 'react-icons/io'
import {SiItunes} from 'react-icons/si'
function Features() {
  useAOS()
  const features=[
 {index:1,
  item:"Lorem Ipsum",
 logo:<AiOutlineShop className='iconSizing'/>
},
{index:2,
  item:"Dolor Sitema",
logo:<VscGraph className='iconSizing'/>
},
{index:3,
  item:"Sed perspiciatis",
logo:<FaRegCalendarAlt className='iconSizing'/>
},
{index:4,
  item:"Magni Dolores",
logo:<BiPaintRoll className='iconSizing'/>
},{index:5,
  item:"Nemo Enim",
logo:<PiCylinder className='iconSizing'/>
},{index:6,
  item:"Eiusmod Tempor",
logo:<LuCircleDotDashed className='iconSizing'/>
},{index:7,item:"Midela Teren",
logo:<FiFileText className='iconSizing'/>
},{index:8,item:"Pira Neve",
logo:<RiHome7Line className='iconSizing'/>
},{index:9,item:"Dirada Pack",
logo:<LiaShipSolid className='iconSizing'/>
},{index:10,item:"Moton Ideal",
logo:<SiItunes className='iconSizing'/>
},{index:11,item:"Verdo Park",
logo:<RiWirelessChargingLine className='iconSizing'/>
},{index:12,item:"Flavor Nivelanda",
logo:<IoIosFingerPrint className='iconSizing'/>
}
]
    return (
    <div className='container featuresContainer'>
   <Title title="Features" desc="Necessitatibus eius consequatur ex aliquid fuga eum quidem"/>
   <div className="features">
{
  features.map((e,index)=>(
 <div key={index} className="feature" data-aos="fade-up"
 data-aos-anchor-placement="top-bottom" data-aos-delay={400*index}><span className='icon iconSizing'>{e.logo}</span><span className='itemStyle'>{e.item}</span></div>
  ))
}
   </div>
    </div>
  )
}

export default Features