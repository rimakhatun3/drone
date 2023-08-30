import Image from 'next/image';
import React from 'react';

const SingleDrone = ({singleDone}) => {

    const {name,price,equipment,image} = singleDone
    return (
        <div className='border group hover:scale-110 px-10 pt-10 pb-5 rounded-lg bg-sky-100 flex flex-col justify-center items-center h-full my-4 '>
            <Image className=' hover:transition hover:-translate-y-5 justify-center   rounded-2xl' width={350} height={700} src={image} alt=''/>
            <div className='mx-5 flex-col justify-center items-center mt-8'>
                <h1 className='text-xl font-bold '>{name}</h1>
                <p className=''>${price}</p>
                <p className='text-lg font-semibold  my-2'>Equipment</p>
                <p>{
                    equipment.map((item,index)=><li key={index} >{item}</li>)
                    }</p>

<div className='justify-center'>
     <button className=' border rounded-2xl bg-sky-700 hover:bg-sky-400 py-4 text-white  px-8 my-5 '>Add to Cart</button>
     </div>
            </div>
        </div>
    );
};

export default SingleDrone;