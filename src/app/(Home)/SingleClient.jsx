import Image from 'next/image';
import React from 'react';

const SingleClient = ({item}) => {
    console.log(item)
   const {clientName,clientImage,clientInfo,rating} = item
    return (
        <div>
            <Image className=' rounded-full' alt='' width={60} height={20} src={clientImage}/>
            <p>{clientName}</p>
            <p>{clientInfo}</p>
        </div>
    );
};

export default SingleClient;