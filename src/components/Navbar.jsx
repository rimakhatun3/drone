"use client"
import Link from 'next/link';
import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import Image from 'next/image';

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
        <nav className='navbar sticky top-0 z-10 flex text-white flex-row justify-between items-center container mx-auto bg-sky-700 px-12 py-5 shadow-lg'>
            <h2 className='text-2xl font-bold'>Drone</h2>
            <div>
            <ul className='flex flex-row items-center justify-center gap-4'>
{
    navData.map(({ path,title })=>(
    <li  key={path}>
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