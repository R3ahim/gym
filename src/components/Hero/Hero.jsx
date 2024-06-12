import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Hearts from '../../assets/heart.png'
import Calories from '../../assets/calories.png'

const Hero = () => {
  return (
   <div className="hero">
    {/* left side */}
    <div className="left-h">
     <Header/>
     <div className="the-best-ad">
        <div></div>
        <span>the best fitnes club in the town</span>
     </div>
     {/* Hero Heading */}
     <div className="hero-text">
       <div>
        <span className='stroke-text'>Shape</span>
          <span> Your</span>
       </div>
       <div>
        <span>Ideal Body</span>
       </div>
       <div className="span">In here we will help you to shape and build your ideal body and live up your life to fullest</div>
     </div>
     {/* / start hero figures */}
     <div className="figures">
        <div>
            <span className='dg'>+ 140</span>
            <span className='tg'>COACHES</span>
       </div>
        <div>
            <span className='dg'>+ 978</span>
            <span className='tg'>MEMBERS JOINED</span>
       </div>
        <div>
            <span className='dg'>+ 50</span>
            <span className='tg'> FITNESS PROGRAMS</span>
       </div>
       
  
     </div>
     {/* end figurestx */}
     {/* hero button */}
     <div className="hero-buttons">
        <button className='btn'>Get Started</button>
        <button className='btn'>Learn More</button>
     </div>
    </div>
    {/* right side componetn */}
    <div className="right-h">
        <button className="btn">Join Now</button>

        <div className="heart-rate">
            <img src={Hearts} alt="" />
            <span>Heart Rate </span><span>116 bpm</span>
        </div>
        {/* hero images */}
        <img src={hero_image} alt="" className='hero-image' />
        <img src={hero_image_back} alt=""  className='hero-image-back'/>

        {/* calories */}
        <div className="calories">
            <img src={Calories} alt="" />
          <div>
          <span>Cakirues Burned</span>
          <span>220 Kcal</span>
          </div>
        </div>
    </div>
   </div>
  )
}

export default Hero