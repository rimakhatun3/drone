import droneData from '@/data/droneData';
import React from 'react';
import SingleDrone from './SingleDrone';

const Bestdrone = async () => {
    // const data = await fetch('../../data/droneData.json')
    // const droneData = await res.json(data)
    return (
        <div>
            <h1 className='text-5xl font-extrabold text-center mt-10 mb-20'>Our Exclusive Collection</h1>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    droneData.map(singleDone=><SingleDrone key={singleDone.id} singleDone={singleDone}></SingleDrone>)
                }
            </div>
        </div>
    );
};

export default Bestdrone;