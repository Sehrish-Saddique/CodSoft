import React from 'react'
import { RxCalendar } from 'react-icons/rx'
import { BsShieldCheck, BsBookmarkCheck } from 'react-icons/bs'
 const Info = () => {
  return (
    <div className='info section'>
      <div className="infoContainer container">
      <div className="titleDiv ">
        <h2>Travel to make memories all round the world</h2>
        <button className='btn'>View All</button>
      </div>
    <div className='cardsDiv grid'>
    <div className='singleCard grid'>
    <div className='iconDiv flex'>
      <RxCalendar className="icon"/>
    </div>
    <span className='cardTitle'>Book & Relax</span>
    <p>You can also call airlines from your phone and book a flight ticket!</p>
    </div>
    {/* Single Card */}
    <div className='singleCard grid'>
    <div className='iconDiv flex colorOne'>
      <BsShieldCheck className="icon"/>
    </div>
    <span className='cardTitle'>Smart Checklist</span>
    <p>You can also call airlines from your phone and book a flight ticket!</p>
    </div>

    {/* Single Card */}
    <div className='singleCard grid'>
    <div className='iconDiv flex colorTwo'>
      <BsBookmarkCheck className="icon"/>
    </div>
    <span className='cardTitle'>Save  More</span>
    <p>You can also call airlines from your phone and book a flight ticket!</p>
    </div>

    </div>
      </div>
    </div>
  )
}

export default Info