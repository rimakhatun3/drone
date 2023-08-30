"use client"
import React from 'react';

// import {FaFacebook,FaTwitter,FaInstagram} from 'react-icons'

const Footer = () => {
    return (
        <div>
             <div className=' h-[300px]  text-white w-full '>
            <footer className="   py-8">
  <div className="container py-10 px-20 mx-auto flex text-white bg-sky-700   flex-wrap justify-between">
    <div className="w-full text-white flex flex-col justify-center items-center sm:w-auto mb-6 sm:mb-0">
      
      <span className=" text-sm font-medium ml-2">Drone</span>
    </div>
    <div className="w-full sm:w-auto ">
      <ul className="flex flex-col items-center justify-center sm:justify-end">
        <li>
          <a href="#" className=" text-sm font-medium mr-4"> Home</a>
        </li>
        <li>
          <a href="#" className=" text-sm font-medium mr-4">About</a>
        </li>
        <li>
          <a href="#" className=" text-sm font-medium mr-4">Contact</a>
        </li>
      </ul>
    </div>
    <div className="w-full sm:w-auto">
     
      
    </div>
  
    <div>
    <div className="w-full sm:w-auto">
        <span className="\text-sm">123 Street, City, Country</span>
      </div>
      <div className="w-full sm:w-auto">
        <span className=" text-sm">Phone: 123-456-7890</span>
      </div>
      <div className="w-full sm:w-auto">
        <span className=" text-sm">Email: info@example.com</span>
      </div>
    </div>
    <div className='flex w-1/3 '>
        <input className='my-5 px-4 py-2 w-full rounded-s-2xl' type="text" placeholder='Enter Your Email Address' name="" id="" />
        <button className=' border rounded-e-2xl bg-sky-400 hover:bg-sky-700 py-4 text-white  px-8 my-5 '>Submit</button>
    </div>
  </div>
  <div className=" py-5  bg-sky-300 ">
    <div className="container mx-auto flex flex-wrap justify-between">
      <div className="w-full text-center mb-2 sm:mb-0">
        <span className="text-white text-sm">&copy; 2023 Copy. All rights reserved.</span>
      </div>
      
    </div>
  </div>
</footer>

        </div>
        </div>
    );
};

export default Footer;