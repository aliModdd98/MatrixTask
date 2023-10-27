import React, { useEffect, useState } from 'react'
import Title from '../Title/Title'
import './TestMonailsStyle.css'
import img1 from './../../assets/1.avif'
import img2 from './../../assets/2.avif'
import img3 from './../../assets/3.avif'
import img4 from './../../assets/4.avif'
import img5 from './../../assets/5.avif'
import img6 from './../../assets/6.avif'
import img7 from './../../assets/7.avif'
import img8 from './../../assets/8.avif'
function TestMonails() {
    const TestPerson=[
        {
            name:"Saul Goodman",
            job:"Ceo & Founder",
            profile:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, unde molestiae. Reprehenderit veniam blanditiis vero repudiandae officiis obcaecati ipsam.",
            imgProfile:img1
        }, 
         {
            name:"Sara Willson",
            job:"Designer",
            profile:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, unde molestiae. Reprehenderit veniam blanditiis vero repudiandae officiis obcaecati ipsam.",
            imgProfile:img2
        }, {
            name:"Jena Karlis",
            job:"Store Owner",
            profile:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, unde molestiae. Reprehenderit veniam blanditiis vero repudiandae officiis obcaecati ipsam.",
            imgProfile:img3
        }, {
            name:"Matt Brandom",
            job:"Freelancer",
            profile:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, unde molestiae. Reprehenderit veniam blanditiis vero repudiandae officiis obcaecati ipsam.",
            imgProfile:img4
        }, {
            name:"John Larson",
            job:"Enterprenure",
            profile:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, unde molestiae. Reprehenderit veniam blanditiis vero repudiandae officiis obcaecati ipsam.",
            imgProfile:img5
        }, {
            name:"Matt Brandom",
            job:"Freelancer",
            profile:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, unde molestiae. Reprehenderit veniam blanditiis vero repudiandae officiis obcaecati ipsam.",
            imgProfile:img6
        }, {
            name:"Matt Brandom",
            job:"Freelancer",
            profile:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, unde molestiae. Reprehenderit veniam blanditiis vero repudiandae officiis obcaecati ipsam.",
            imgProfile:img7
        }, {
            name:"John Larson",
            job:"Enterprenure",
            profile:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, unde molestiae. Reprehenderit veniam blanditiis vero repudiandae officiis obcaecati ipsam.",
            imgProfile:img8
        },
       ]
  
    const [activeButtonIndex, setActiveButtonIndex] = useState(0);
    const [displayedItems, setDisplayedItems] = useState(TestPerson.slice(0, 2));
    const handleButtonClick = (index) => {
        setActiveButtonIndex(index);
        const startIndex = index * 2;
        const endIndex = startIndex + 2;
        const newDisplayedItems = TestPerson.slice(startIndex, endIndex);
        setDisplayedItems(newDisplayedItems);
      };
      
      useEffect(() => {
        const timer = setInterval(() => {
          const nextIndex = (activeButtonIndex + 1) % Math.ceil(TestPerson.length / 2);
          handleButtonClick(nextIndex);
        }, 5000); 
        return () => {
          clearInterval(timer);
        };
      }, [activeButtonIndex]); 
   
   const renderedItems = displayedItems.map((e, index) => (
    <div className="testCard" data-aos="fade-right"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine" key={index}>
      <h2>{e.name}</h2>
      <div className="job">{e.job}</div>
      <div className="descTest">{e.profile}</div>
      <div className="imgTest">
        <img src={e.imgProfile} alt="" />
      </div>
    </div>
  ));

  
    return (
    <div className='container testContainer'>
        <Title title="TESTIMONIALS" desc="Magnam dolores commodi suscipit eum quidem consectetur velit"/>

  {/* <div className="TestBox">
  <div className="cursal"> */}
          {/* <div className="testCard">
<h2>Jena Karlis</h2>
<div className="job">Enterprenure</div>
<div className="descTest">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, unde molestiae. Reprehenderit veniam blanditiis vero repudiandae officiis obcaecati ipsam.</div>
                <div className="imgTest"><img src={img1} alt="" /></div>
             </div>

             <div className="testCard">
<h2>Jena Karlis</h2>
<div className="job">Enterprenure</div>
<div className="descTest">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, unde molestiae. Reprehenderit veniam blanditiis vero repudiandae officiis obcaecati ipsam.</div>
                <div className="imgTest"><img src={img1} alt="" /></div>
             </div> */}
  <div className="TestBox">
        <div className="cursal">{renderedItems}</div>
      </div>
                 {/* </div>
                
  </div> */}
  <div className="carousel-nav">
        <button
          className={activeButtonIndex === 0 ? 'active' : ''}
          onClick={() => handleButtonClick(0)}
        ></button>
        <button
          className={activeButtonIndex === 1 ? 'active' : ''}
          onClick={() => handleButtonClick(1)}
        ></button>
        <button
          className={activeButtonIndex === 2 ? 'active' : ''}
          onClick={() => handleButtonClick(2)}
        ></button>
        <button
          className={activeButtonIndex === 3 ? 'active' : ''}
          onClick={() => handleButtonClick(3)}
        ></button>
      </div>
       
    </div>
  )
}

export default TestMonails


{/* <div className="cursal">
<div className="testCard">

</div>
</div> */}