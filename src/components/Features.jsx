import React from 'react';
import feature1 from "../../public/feature1.png"
import feature2 from "../../public/feature2.png"
import feature3 from "../../public/feature3.png"
import feature4 from "../../public/feature4.png"
import feature5 from "../../public/feature5.png"
import feature6 from "../../public/feature6.png"
import feature7 from "../../public/feature7.png"
import feature8 from "../../public/feature8.png"
import feature9 from "../../public/feature9.png"
import feature10 from "../../public/feature10.png"
import Image from 'next/image';

const Features = () => {
    return (
        <div className='my-28'>
            <h1 className='text-5xl font-extrabold text-center mb-20'>FEATURES NEVER STOP</h1>
            <p className='text-3xl font-semibold text-center mb-16'>Get to know our special features</p>
           <div className='grid md:grid-cols-3 lg:grid-cols-5 gap-5'>
            
           <div className='flex flex-col justify-center items-center '>
           <Image className="hover:-translate-y-3 rounded-full hover:scale-110" width={150} height={50} src={feature1} alt=""></Image>
      <div className='text-center my-4'>
      <h1 className='text-xl font-semibold '>WordPress</h1>
      <h1 className='text-xl font-semibold '>Customizer</h1>
      </div>
           </div>

           <div className='flex flex-col justify-center items-center '>
           <Image className="hover:-translate-y-3 rounded-full hover:scale-110" width={150} height={50} src={feature3} alt=""></Image>
      <div className='text-center my-4'>
      <h1 className='text-xl font-semibold '>Cross-Browser
</h1>
      <h1 className='text-xl font-semibold '>Compatibility</h1>
      </div>
           </div>
           <div className='flex flex-col justify-center items-center '>
           <Image className="hover:-translate-y-3 rounded-full hover:scale-110" width={150} height={50} src={feature4} alt=""></Image>
      <div className='text-center my-4'>
      <h1 className='text-xl font-semibold '>SEO
</h1>
      <h1 className='text-xl font-semibold '>Optimized</h1>
      </div>
           </div>
           <div className='flex flex-col justify-center items-center '>
           <Image className="hover:-translate-y-3 rounded-full hover:scale-110" width={150} height={50} src={feature5} alt=""></Image>
      <div className='text-center my-4'>
      <h1 className='text-xl font-semibold '>Tons of
</h1>
      <h1 className='text-xl font-semibold '>Shortcodes</h1>
      </div>
           </div>
           <div className='flex flex-col justify-center items-center '>
           <Image className="hover:-translate-y-3 rounded-full hover:scale-110" width={150} height={50} src={feature6} alt=""></Image>
      <div className='text-center my-4'>
      <h1 className='text-xl font-semibold '>Google & Custom
</h1>
      <h1 className='text-xl font-semibold '>Fonts</h1>
      </div>
           </div>
           <div className='flex flex-col justify-center items-center '>
           <Image className="hover:-translate-y-3 rounded-full hover:scale-110" width={150} height={50} src={feature7} alt=""></Image>
      <div className='text-center my-4'>
      <h1 className='text-xl font-semibold '>Sticky Menus
</h1>
      <h1 className='text-xl font-semibold '>& Sidebars</h1>
      </div>
           </div>
           <div className='flex flex-col justify-center items-center '>
           <Image className="hover:-translate-y-3 rounded-full hover:scale-110" width={150} height={50} src={feature8} alt=""></Image>
      <div className='text-center my-4'>
      <h1 className='text-xl font-semibold '>Translation
</h1>
      <h1 className='text-xl font-semibold '>Ready</h1>
      </div>
           </div>
           <div className='flex flex-col justify-center items-center '>
           <Image className="hover:-translate-y-3 rounded-full hover:scale-110" width={150} height={50} src={feature2} alt=""></Image>
      <div className='text-center my-4'>
      <h1 className='text-xl font-semibold '>Powerful</h1>
      <h1 className='text-xl font-semibold '>Admin Interface</h1>
      </div>
           </div>
           <div className='flex flex-col justify-center items-center '>
           <Image className="hover:-translate-y-3 rounded-full hover:scale-110" width={150} height={50} src={feature9} alt=""></Image>
      <div className='text-center my-4'>
      <h1 className='text-xl font-semibold '>GDPR</h1>
      <h1 className='text-xl font-semibold '>
Compliant
</h1>
      </div>
           </div>
           <div className='flex flex-col justify-center items-center '>
           <Image className="hover:-translate-y-3 rounded-full hover:scale-110" width={150} height={50} src={feature10} alt=""></Image>
      <div className='text-center my-4'>
      <h1 className='text-xl font-semibold '>Color
</h1>
      <h1 className='text-xl font-semibold '>Scheme Editor</h1>
      </div>
           </div>
           
           </div> 
        </div>
    );
};

export default Features;