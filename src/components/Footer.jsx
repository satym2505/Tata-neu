import React, { useState } from 'react'
import footef from './Footerdata'
import './Footer.css';
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialYoutube } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialInstagram } from "react-icons/sl";
import { FaArrowRight } from "react-icons/fa";


const Footer = () => {
  const [color,setcolor] = useState('#0876B9')
  return (
    <>
     <div id='atili'>
          <div id='atili1'>
              <h1 id='lalla1'>{footef[0].headin}</h1>
              <ul id='lilin'>
               {
                footef[0].trr.map((i)=>(
                    <li id='terli'>{i}</li>
                ))
               } </ul>
          
              <h1 id='lalla2'>{footef[1].headin}</h1>
          </div>
          
          <div id='atili2'>
          <h1 id='lalla3'>{footef[2].headin}</h1>
          <ul id='lilin1'>
          {
                footef[2].trr.map((i)=>(
                    <li id='terli1'>{i}</li>
                ))
               }
          </ul>

          </div>
          <div id='atili3'>
          <h1 id='lalla4'>{footef[3].headin}</h1>
          <ul id='lilin2'>
          {
                footef[3].trr.map((i)=>(
                    <li id='terli2'>{i}</li>
                ))
               }
          </ul>

          </div>
          <div id='trli1'>
          <div id='atili4'>
          <ul>{
          footef[4].headin.map((i)=>(
          <li id='lifter1'>{i}</li>
          ))
          }
          </ul>
          </div>
          <div id='atili5'>
          <ul>{
          footef[5].headin.map((i)=>(
          <li id='lifter2'>{i}</li>
          ))
          }
          </ul>
          </div>
          </div>
          
          <div id='icontr'>
          <SlSocialFacebook className='itster'/>
          <SlSocialLinkedin className='itster'/>
          <FaXTwitter className='itster'/>
          <SlSocialYoutube className='itster'/>
          <SlSocialInstagram className='itster'/>
          <TfiEmail className='itster'/>
          <form action='post'>
        <div id='tilala'>
            <input type="text" id="name" name="username" placeholder="Enter your email id to subscribe"autofocusv style={{backgroundColor:color}} onClick={()=> setcolor( 'white')}/>
            <FaArrowRight id='telelola'/>
            
        </div>
    
          </form>

          <img src='tata neu.png' id='tita'/>
          </div>
       </div> 
    </>
  )
}

export default Footer
