import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AboutStyle.css';
import 'aos/dist/aos.css';
import useAOS from '../../hooks/useAOS.JSX';
import counts from './../../assets/counts-img.svg';
import { RiCheckDoubleLine } from 'react-icons/ri';
import {LiaAwardSolid} from 'react-icons/lia'
import {LuClock4 }from 'react-icons/lu'
import { BsEmojiSmile, BsJournalBookmark } from 'react-icons/bs';
import { useInView } from 'react-intersection-observer';
import Title from '../Title/Title';

const CounterCell = ({ initialValue, inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      const timer = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount < initialValue) {
            return prevCount + 1;
          } else {
            clearInterval(timer);
            return prevCount;
          }
        });
      }, 90);

      return () => {
        clearInterval(timer);
      };
    }
  }, [initialValue, inView]);

  return <span className="cell num">{count}</span>;
};

function About() {
  useAOS();
  const [ref, inView] = useInView({
    triggerOnce: true, 
  });

  return (
    <div className=" aboutContainer ">
      <Title title="About" />

      <div className="sectionsAbout">
        <div
          ref={ref}
          className="leftAbout"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <div className="titleAbout" id='about'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ab dignissimos at laboriosam ratione sequi.
          </div>
          <span className="item">
            <RiCheckDoubleLine className="icon" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat
          </span>
          <br />
          <span className="item">
            <RiCheckDoubleLine className="icon" /> Duis aute irure dolor in reprehenderit in voluptate velit
          </span>
          <br />
          <span className="item">
            <RiCheckDoubleLine className="icon" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat
          </span>
          <br />
        </div>
        <div
          className="rightAbout"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <div className="titleAbout">
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum.
          </div>
          <div className="btnTransparents">
            <button>
              <Link to="/about">Get Started</Link>
            </button>
          </div>
        </div>
      </div>

      <div className="sectionsAbout second Section">
        <div
          className="leftAbout"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <div className="imgStyle">
            <img src={counts} alt="counts" />
          </div>
        </div>

        <div
          ref={ref}
          className="rightAbout"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <div className="gridItems">
            <div className="gridItem">
              <div className="titleGrid">
                <span className="item">
                  <BsEmojiSmile className="icon sizeIcon" />{' '}
                  {inView && <CounterCell initialValue={65} inView={inView} />}
                </span>
              </div>
              <div className="descGrid">
                <span>Happy Clients</span> consequuntur voluptas nostrum aliquid ipsam architecto ut.
              </div></div>

            <div className="gridItem">
              <div className="titleGrid">
                <span className="item">
                <BsJournalBookmark className="icon sizeIcon" /> {" "}
                {inView && <CounterCell initialValue={85} inView={inView} />}
                
                </span>
              </div>
              <div className="descGrid">
                <span>Projects</span> adipisci atque cum quia aspernatur totam laudantium et quia dere tan
              </div>
            </div>
            <div className="gridItem">
              <div className="titleGrid">
                <span className="item">
                  <LuClock4 className="icon sizeIcon" />  
                   {inView && <CounterCell initialValue={18} inView={inView} />}
               
                </span>
              </div>
              <div className="descGrid">
                <span>Years of experience</span> aut commodi quaerat modi aliquam nam ducimus aut voluptate non vel
              </div>
            </div>
            <div className="gridItem">
              <div className="titleGrid">
                <span className="item">
                  <LiaAwardSolid className="icon sizeIcon" />   {inView && <CounterCell initialValue={15} inView={inView} />}
               
               </span>
              </div>
              <div className="descGrid">
                <span>Awards</span> rerum asperiores dolor alias quo reprehenderit eum et nemo pad der
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;