import Image from 'next/image';
import React from 'react';

const SingleBanner1 = ({slider ={}}) => {
    const {bg,title} = slider
    return (
        <div>
             {/* <div  className="image-layer"
        style={{
          backgroundImage: `url(${bg})`,
        }}>

</div> */}

<Image className='relative' width={1300} height={500} alt='' src={bg}/>
<div className="absolute top-1/2 left-1/4   text-center w-1/2 text-white ">
   <div className='text-center text-yellow-200 text-2xl font-bold'>
   <h1 className='text-center' >{title}</h1>
   </div>
</div>
        </div>
    );
};

export default SingleBanner1;