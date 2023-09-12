
"use client"
import Link from 'next/link';
import React from 'react';
import {usePathname} from "next/navigation"
import classNames from '@/utilis/classNames';

const NavLink = ({children,href,activeClassName,exact=false, ...props}) => {

    const path = usePathname()
    const active = exact? path === href : path.startsWith(href)
    const classes = classNames(props.className, active && activeClassName)
    if(classes){
         props.className = classes
    }

    return (
        <Link href={href} {...props}>
            {children}
        </Link>
    );
};

export default NavLink;