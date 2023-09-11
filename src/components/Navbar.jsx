"use client"
import Link from 'next/link';
import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import Image from 'next/image';
import logo from '../../public/logo-white.png'

const Navbar = () => {
const {user,isLoading,error} = useUser()

    const navData = [
        {
            path:"/",
            title:"Home"
        },
        {
            path:"/about",
            title:"About"
        },
        {
            path:"/shop",
            title:"Shop"
        },
        {
            path:"/contact",
            title:"Contact Us"
        }
    ]
    return (
        <nav className='navbar sticky top-0 z-10 flex text-white flex-row justify-between items-center container mx-auto bg-sky-700 px-12 py-2 shadow-lg'>
           <div>
           <Image width={200} height={200} alt='logo' src={logo}></Image>
           <input className='border rounded-xl w-5/6 py-2 px-4' placeholder='Search here' type="text" name="" id="" />
           </div>
            <div>
            <ul className='flex flex-row items-center justify-center '>
{
    navData.map(({ path,title })=>(
    <li className='hover:bg-sky-300 py-2 px-4 rounded-lg'  key={path}>
<Link href={path}>{title}</Link>

    </li>))
}

<li>
{
    error&& <p>{error.message}</p>
}
    
{
    user?<div className='flex justify-center items-center gap-3'>

<div className="tooltip mx-2" data-tip={user?.nickname}>

                <div className="w-12 ">
                  <img className='rounded-full' src={user?.picture} />
                </div>
              </div>
    {/* <Image width={25} height={25} alt='profile'  src={user.picture}></Image> */}
    <a href="api/auth/logout">Logout</a></div>:
    <><a href="api/auth/login">Login</a></>
}



    
</li>
            </ul>
            </div>
        </nav>
    );
};

export default Navbar;