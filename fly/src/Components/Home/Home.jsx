import React from 'react'
import airplane from '../../assets/airplane.png'
import video from '../../assets/video.mp4'
const Home = () => {
  return (
    <div className="home flex container">

      <div className="mainText">
        <h1>Create Ever-lasting Memories with us</h1>
      </div>

      <div className='homeImages flex'>
      <div className="videoDiv">  
      <video className="video"  src={video}   autoPlay loop muted></video>
      </div>
        <img src={airplane} className='plane'/>
      </div>
    </div>
  )
}

export default Home