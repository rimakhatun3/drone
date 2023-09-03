import Link from 'next/link';
import React from 'react';

const Navbar = () => {
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
            </ul>
            </div>
        </nav>
    );
};

export default Navbar;