import React from 'react';
import drone1 from "../../public/drone5.jpg"
import Image from 'next/image';
import bg from "../../public/bg.jpg"

const Photography = () => {
    return (
       <div className=''>
       
        <div className='lg:flex justify-between items-center gap-x-16 '>
            <Image width={600} height={200} src={drone1} alt=""></Image>

            <div className='w-1/2' >
            <h1 className=' text-2xl font-bold '>AERIAL PHOTOGRAPHY</h1>
                <h1 className='text-4xl font-extrabold mb-4'>We Are Drone Pilots</h1>
                <p className='font-semibold text-xl'>The most innovate feature is probably its advanced controls. Using simple hand gestures, you can take off, tell the drone to follow you and fly hi-quality drones.</p>
               
            </div>
        </div>
<div className='relative bg-black bg-fixed'>
<Image className='bg-fixed ' width={1300} height={200} src={bg} alt=""></Image>
<div className='absolute top-1/3  left-1/4 text-white '>
    <h2 className='text-5xl font-extrabold my-2 text-center'>Interesting Drone Data</h2>
    <h4 className='text-5xl font-extrabold my-2'>Professionally cultivate one-to-one</h4>
</div>
</div>

       </div>
    );
};

export default Photography;