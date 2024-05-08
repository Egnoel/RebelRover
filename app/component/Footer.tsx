import React from 'react'
import logo from "../assets/logo2.png";
import "./styles.css"
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { FaFacebook,FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='flex flex-col w-full'>
            <div className='w-full footer'>
                <div className='flex flex-col gap-8 items-center pt-16'>
                    <h1 className='text-white font-bold text-2xl'>Subscribe to get special discount</h1>
                    <span className='text-[#DFDFDF] text-sm text-wrap'>Dont wanna miss something? subscribe right now and get special promotion and monthly newsletter</span>
                    <div className='flex flex-row bg-white gap-4 items-center py-2 rounded-3xl px-1'>
                        <input type='text' placeholder='Type your email here' className='outline-none pl-2' />
                        <button type='button' className='bg-black text-[#DFDFDF] rounded-3xl px-1 py-1 '>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className='flex flex-row px-6 items-center justify-between w-full mt-10'>
                <div className='flex flex-col gap-4'>
                    <Image src={logo} width={140} height={140} alt='logo' className='object-cover' />
                    <span className='text-wrap text-[#6C6C6C] w-64'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pharetra condimentum.</span>
                </div>
                <div className='flex flex-col gap-4'>
                    <span className='text-black'>Contact Information</span>
                    <div className='flex flex-col gap-2'>
                        <div className='flex flex-row gap-2 text-sm'>
                        <MapPin className='text-black' />
                        <span className='text-[#6C6C6C]'>732 Despard St, Atlanta</span>
                        </div>
                        <div className='flex flex-row gap-2'>
                        <MapPin className='text-black' />
                        <span className='text-[#6C6C6C]'>732 Despard St, Atlanta</span>
                        </div>
                        <div className='flex flex-row gap-2'>
                        <MapPin className='text-black' />
                        <span className='text-[#6C6C6C]'>732 Despard St, Atlanta</span>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <span className='text-black'>Quick Link</span>
                    <div className='flex flex-col gap-2 text-[#6C6C6C]'>
                        <span>Home</span>
                        <span>About Us</span>
                        <span>Tours</span>
                        <span>Contact</span>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                <span className='text-black'>Quick Link</span>
                <div className='flex flex-row gap-2'>
                    <FaFacebook className='text-black' />
                    <FaTwitter className='text-black' />
                    <FaYoutube className='text-black' />
                </div>
                </div>
            </div>
            <div className='text-center bg-black text-[#DFDFDF] py-4'>
            Copyright © All rights reserved (Website Developed & Managed by creativechroma)
            </div>
        </div>
    )
}

export default Footer