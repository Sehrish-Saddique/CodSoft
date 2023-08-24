import React from 'react'


//Importing Icons
import { SiConsul } from "react-icons/si";
import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";

//Importing Images
 const Navbar = () => {
  return (
    <div cllassName="navBar flex">
    <div className="navBarOne flex"> 
    <div>
    <SiConsul className="icon"/>
    </div>
    <div className="none flex">
        <li className='flex'> <BsPhoneVibrate className="icon"/>Support</li>
        <li className='flex'> <AiOutlineGlobal className="icon"/>Languages</li>
    </div>
    
    <div className="atb flex">
        <span>Sign In</span>
        <span>Sign Out</span>
     </div>
    </div>
   
   <div className='navBarTwo flex'>
    <div className="logoDiv">
    <img width="48" height="48" src="https://img.icons8.com/doodle/48/airplane-take-off.png" alt="airplane-logo" className='logo'/>
   </div>

    <div className="navBarMenu flex">
       <ul className='menu flex'>
        <li className='listItem'>Home</li>
        <li className='listItem'>About</li>
        <li className='listItem'>Offers</li>
        <li className='listItem'>Seats</li>
        <li className='listItem'>Destinations</li>
       </ul>
        <button className='btn flex btnOne'>
            Contact
        </button>
     </div>
     <button className='btn flex btnTwo'>
            Contact
        </button>
        <div className="toggleIcon">
        <CgMenuGridO/>
        </div>
    </div>
    </div>
  )
}

export default Navbar