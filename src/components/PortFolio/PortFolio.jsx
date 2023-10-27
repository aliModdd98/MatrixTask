import React, { useState } from 'react'
import "./PortoStyle.css"
import {FiPlus} from 'react-icons/fi'
import Title from '../Title/Title'
import {IoInfiniteSharp} from 'react-icons/io5'

import p1 from './../../assets/portfolio-1.jpg'
import p2 from './../../assets/portfolio-2.jpg'
import p3 from './../../assets/portfolio-3.jpg'
import p4 from './../../assets/portfolio-4.jpg'
import p5 from './../../assets/portfolio-5.jpg'
import p6 from './../../assets/portfolio-6.jpg'
import p7 from './../../assets/portfolio-7.jpg'
import p8 from './../../assets/portfolio-8.jpg'
import p9 from './../../assets/portfolio-9.jpg'
import 'aos/dist/aos.css';
import useAOS from '../../hooks/useAOS.JSX'
function PortFolio() {
  useAOS()
  const types = ['All','App', 'Card', 'Web'];
  const [selectedType, setSelectedType] = useState('All');
  const portfolio=[
    {
      id:1,
      name:"App3",
      imgPorto:p1,
      type:"App",
      icon1:<FiPlus className='iconP'/>,
      icon2:<IoInfiniteSharp className='iconP'/>

    },  {
      id:2,
      name:"Web 7",
      imgPorto:p2,
      type:"Web",
      icon1:<FiPlus className='iconP'/>,
      icon2:<IoInfiniteSharp className='iconP'/>

    },
    {
      id:3,
      name:"App 2",
      imgPorto:p3,
      type:"App",
      icon1:<FiPlus className='iconP'/>,
      icon2:<IoInfiniteSharp className='iconP'/>

    },
    {
      id:4,
      name:"Card 2",
      imgPorto:p4,
      type:"Card",
      icon1:<FiPlus className='iconP'/>,
      icon2:<IoInfiniteSharp className='iconP'/>

    },
    {
      id:5,
      name:"Web 5",
      imgPorto:p5,
      type:"Web",
      icon1:<FiPlus className='iconP'/>,
      icon2:<IoInfiniteSharp className='iconP'/>

    },
    {
      id:6,
      name:"App 3",
      imgPorto:p6,
      type:"App",
      icon1:<FiPlus className='iconP'/>,
      icon2:<IoInfiniteSharp className='iconP'/>

    },
    {
      id:7,
      name:"Card 1",
      imgPorto:p7,
      type:"Card",
      icon1:<FiPlus className='iconP'/>,
      icon2:<IoInfiniteSharp className='iconP'/>

    },
    {
      id:8,
      name:"Card 3",
      imgPorto:p8,
      type:"Card",
      icon1:<FiPlus className='iconP'/>,
      icon2:<IoInfiniteSharp className='iconP'/>

    },
    {
      id:9,
      name:"Web 1",
      imgPorto:p9,
      type:"Web",
      icon1:<FiPlus className='iconP'/>,
      icon2:<IoInfiniteSharp className='iconP'/>

    }

  ]
  
  const handleTypeSelect = (type) => {
    setSelectedType(type);
  };
  const filteredCards = selectedType === 'All' ? portfolio : portfolio.filter(card => card.type === selectedType);
  return (
    <div className='portfolioContainer' id='portfolio'>
           <Title title="PORTFOLIO" desc="Necessitatibus eius consequatur ex aliquid fuga eum quidem"/>
   <div className="porto">
   <div>
      {types.map((type) => (
       <button 
       key={type}
       onClick={() => handleTypeSelect(type)} 
       className={selectedType === type ? 'projectsType active' : 'projectsType'}
     >
          {type}
        </button>
      ))}
    </div>
    <div className='cardsP'>
        {filteredCards.map(card => (
          <div key={card.id} className='cardP' data-aos="fade-up" data-aos-delay="500">
           <img src={card.imgPorto} alt="portfolio" />
           <div className='infoP'>
            <h3>{card.name}</h3>
            <h5>{card.type}</h5>
           <div className="iconsP"> <span>{card.icon1}</span><span>{card.icon2}</span></div>
           </div>
          </div>
        ))}
      </div>
   </div>
  
    </div>
  )
}

export default PortFolio