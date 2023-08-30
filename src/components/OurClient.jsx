"use client"
import img1 from "../../public/client1.jpg"
import img2 from "../../public/client2.jpg"
import img3 from "../../public/client3.jpg"



import 'swiper/css/pagination';

import Image from "next/image";
const OurClient = () => {
    return (
        <div className='mt-10'>
            <h1 className="text-5xl font-extrabold text-center my-20">Our Great Client</h1>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-end">
    <div className="flex flex-col justify-center items-center gap-5">
    <Image className="hover:-translate-y-3 rounded-full hover:scale-110" width={200} height={50} src={img3} alt=""></Image>
    <div className="text-center space-y-2">
        <h1>Emily Davis</h1>
        <p>Environmental Scientist</p>
        </div> 
    </div>
    <div className="flex flex-col justify-center items-center gap-5">
    <Image className="hover:-translate-y-3 rounded-full hover:scale-110" width={200} height={50} src={img1} alt=""></Image>
    <div className=" text-center space-y-2">
        <h1>John Smith</h1>
        <p>Aerial Surveyor</p>
        </div> 
    </div>
    <div className="flex flex-col justify-center items-center gap-5">
    <Image className="hover:-translate-y-3 rounded-full hover:scale-110" width={200} height={50} src={img2} alt=""></Image>
    <div className=" text-center space-y-2">
        <h1>Alice Johnson</h1>
        <p>Photographer and Filmmaker</p>
        </div> 
    </div>
</div>



        </div>
    );
};

export default OurClient;