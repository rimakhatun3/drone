import React from 'react';
import Banner from './banner';

import Marquepage from './marque';
import Image from 'next/image';
import img1 from "../../../public/drone1.png"
import img2 from "../../../public/drone2.png"
import img3 from "../../../public/drone3.png"
import img4 from "../../../public/drone4.png"
import img5 from "../../../public/drone5.jpg"
import img6 from "../../../public/drone6.jpg"
import img7 from "../../../public/drone7.jpg"
import img8 from "../../../public/drone8.jpg"
import img9 from "../../../public/drone8.jpg"
import Photography from './photography';
import Bestdrone from './Bestdrone';
import OurClient from './OurClient';
import Features from './Features';


const page = () => {
    return (
        <div>
            <Banner/>
          <Marquepage/>

<div className="marquee flex gap-5  border border-spacing-2 py-7 px-10 mx-12 w-[1300px] my-10">
<Image alt='' width={60} height={20} src={img1}/>
  <Image alt='' width={60} height={20} src={img2}/>
  <Image alt='' width={60} height={20} src={img3}/>
  <Image alt='' width={60} height={20} src={img4}/>
<Image alt='' width={60} height={20} src={img5}/>
  <Image alt='' width={60} height={20} src={img6}/>
  <Image alt='' width={60} height={20} src={img7}/>
  <Image alt='' width={60} height={20} src={img8}/>
<Image alt='' width={60} height={20} src={img9}/>
<Image alt='' width={60} height={20} src={img1}/>
  <Image alt='' width={60} height={20} src={img2}/>
  <Image alt='' width={60} height={20} src={img3}/>
  <Image alt='' width={60} height={20} src={img4}/>
<Image alt='' width={60} height={20} src={img5}/>
  <Image alt='' width={60} height={20} src={img6}/>
  <Image alt='' width={60} height={20} src={img7}/>

 
  
    </div>

    <Photography/>
    <Bestdrone/>
    <OurClient/>
    <Features/>

        </div>
    );
};

export default page;