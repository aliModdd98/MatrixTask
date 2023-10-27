import React from 'react'
import './PricingStyle.css'
import {IoLogoUsd} from 'react-icons/io5'
import Title from '../Title/Title'
function Pricing() {
      const pricing=[
        {   id:1,
            type:"Free",
            price:"0",
            icon1:<IoLogoUsd className='iconn'/>,
            monthly:"/month",
            p1:"Aida dere",
            p2:"Nec feugiat nisl",
            p3:"Nulla at volutpat dola",
            p4:"Pharetra massa",
            p5:"Massa ultricies mi",
            btn:"Buy Now"

        },        {
            id:2,
            type:"Free",
            price:"19",
            icon1:<IoLogoUsd className='iconn'/>,
            monthly:"/month",
            p1:"Aida dere",
            p2:"Nec feugiat nisl",
            p3:"Nulla at volutpat dola",
            p4:"Pharetra massa",
            p5:"Massa ultricies mi",
            btn:"Buy Now"

        },
        {   id:3,
            type:"Free",
            price:"29",
            icon1:<IoLogoUsd className='iconn'/>,
            monthly:"/month",
            p1:"Aida dere",
            p2:"Nec feugiat nisl",
            p3:"Nulla at volutpat dola",
            p4:"Pharetra massa",
            p5:"Massa ultricies mi",
            btn:"Buy Now"

        }
      ]
      const buttonStyle={
        backgroundColor:"var(--hover)",
        color:"white",
        width:"150px",
        margin:"29px",
        borderRadius:"25px"
      }
       
      const secondObjectStyle = {
    border:"1px solid var(--hover)",
    
  };
  const through1={
    textDecoration: "line-through" ,

  }
    return (
    <div className='pricingContainer' id='pricing'>
           <Title title="PRICING" desc="Sit sint consectetur velit nemo qui impedit suscipit alias ea"/>
      
      
             <div className="Pricingcards">
         
                {pricing.map((price)=>(
  
                    <div key={price.id} className="cardPricing" style={price.id === 2 ? secondObjectStyle : null}>                   
                     
              <div className="Pricingtype">
              <div className="typeP">{price.type}</div>
                <div className="priceRow">{price.icon1}{' '}<span className='pr'>{price.price}</span> {price.monthly}</div>
                 <div className="servPricing">
                    <span>{price.p1}</span>
                    <span>{price.p2}</span>
                    <span>{price.p3}</span>
                    {price.id === 1 && <span style={through1}>{price.p4}</span>}
        {price.id <= 2 && <span style={through1}>{price.p5}</span>}
                 </div>
              </div>
              {price.id === 2 ? (
            <button style={buttonStyle}>{price.btn}</button>
          ) : (
            <button className='btnw'>{price.btn}</button>
          )}
    </div>
))}
            
        </div>
    </div>
  )
}

export default Pricing