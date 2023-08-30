import Image from 'next/image';
import React from 'react';
import Marquee from "react-fast-marquee";
import img1 from "../../../public/banner3.jpg"
import img2 from "../../../public/banner2.jpg"
import img3 from "../../../public/banner1.jpg"
import img4 from "../../../public/banner3.jpg"
const Marquepage = () => {

    
    return (
        <div>
            <Marquee>
  <Image alt='' width={30} height={20} src={img1}/>
  <Image alt='' width={30} height={20} src={img2}/>
  <Image alt='' width={30} height={20} src={img3}/>
  <Image alt='' width={30} height={20} src={img4}/>
</Marquee>

            </div>
       
    );
};

export default Marquepage;