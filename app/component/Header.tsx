import React from 'react'
import Image from "next/image";
import logo from "../assets/logo.png";
import { ChevronDown, Search } from 'lucide-react';

const Header = () => {
  return (
    <div className='flex flex-row w-full min-w-full pl-5 items-center justify-between bg-[#120B0B] bg-opacity-50 pr-4 py-1'>
        <div className='flex flex-row gap-10 items-center'>
        <Image src={logo} width={140} height={140} alt='logo' className='object-cover' />
        <h1 className='text-white'>Home</h1>
        </div>
        <div className='flex flex-row gap-3 items-center text-white'>
            <div className='flex flex-row  items-center'>
                <span>Package</span>
                <ChevronDown className='mt-1 w-4 h-4' />
            </div>
            <div className='flex flex-row  items-center'>
                <span>Destination</span>
                <ChevronDown className='mt-1 w-4 h-4' />
            </div>
            <div className='flex flex-row  items-center '>
                <span>Blog</span>
                <ChevronDown className='mt-1 w-4 h-4' />
            </div>
            <span className=''>Contact</span>
            <Search className='w-4 h-4  mt-1' />
        </div>
    </div>
  )
}

export default Header