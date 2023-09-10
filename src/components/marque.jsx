import Image from 'next/image';
import React from 'react';
import Marquee from "react-fast-marquee";
import img1 from "../../public/accuras.jpg"
import img2 from "../../public/avenue.jpg"
import img3 from "../../public/beatmusic.jpg"
import img4 from "../../public/halldis.jpg"
import img5 from "../../public/kleveen.jpg"
import img6 from "../../public/photo.jpg"

const Marquepage = () => {

    
    return (
        <div className=' py-12'>
           <Marquee speed={100}>
           <Image  width={200} height={50} src={img1} alt=""></Image>
           <Image  width={200} height={50} src={img2} alt=""></Image>
           <Image  width={200} height={50} src={img3} alt=""></Image>
           <Image  width={200} height={50} src={img4} alt=""></Image>
           <Image  width={200} height={50} src={img5} alt=""></Image>
           <Image  width={200} height={50} src={img6} alt=""></Image>
</Marquee>

            </div>
       
    );
};

export default Marquepage;