import React from 'react'
import './Programs.css'
import {programsData} from '../../data/programsData.js'
import RightArow from '../../assets/rightArrow.png'
const Programs = () => {
    const data = programsData.map((progra)=>console.log(progra))
  return (
   <div className="Programs" id='programs'>
    {/* header */}
    <div className="programs-header">
        <span className='stroke-text'>Explore Our</span>
        <span>Progress</span>
        <span className='stroke-text'>To Shape You</span>
    </div>
    <div className="program-categories">
     {programsData.map((progra)=>
  <div className="category">
                {progra.image}
                <span>{progra.heading}</span>
                <span>{progra.details}</span>
                <div className="join-now"><span>Join Now</span> <img src={RightArow} alt="" /></div>
            </div>
     )}

    </div>
   </div>
  )
}

export default Programs