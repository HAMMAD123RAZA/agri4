import React from 'react'
import { CiPhone } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <>
        <div id='contact' className=' bg-gray-200 '>
        <div className='grid grid-cols-3 lg:px-28'>
    <div className='py-3 '>
    <CiPhone size={50} />

      <p className='font-bold text-green-700 py-4'>Phone</p>  
        <div className='py-3'>
            48549443
        </div>
        <div className='py-3'>
            656565
        </div>
    </div>
    <div className='py-3'>
    <CiLocationOn size={50}/>
    <p className='font-bold text-green-700 py-4'>Address</p>  
        <div className='py-3'>
            Pakistan
            <div className='py-3'>
                address line steet#1
            </div>
        </div>
    </div>
    <div className='py-3'> 
        <MdOutlineMail  size={50} />
    <p className='font-bold text-green-700 py-4'>Email</p>  
        <div className='py-3'>
       abc@gmail.com

        </div>
        <div className='py-3'>
      xyz@gmail.com

        </div>
    </div>
        </div>

    </div>

    </>
  )
}

export default Footer