import React from 'react'
import "./styles.css"
import { ChevronDown } from 'lucide-react'

const HomeBanner = () => {
  return (
    <div className='homeBanner flex flex-row justify-center items-center '>
        <div className='flex w-[90%] flex-col'>
            <h1 className='font-bold text-4xl text-white'>Make in</h1>
            <h1 className='font-bold text-4xl text-white'>your journey</h1>
            <p className='text-sm text-[#CFCFCF] mt-5'>
            Explore the world with what you love beautiful natural beauty.
            </p>
            <div className='flex flex-row justify-between px-1 w-96 bg-white py-1 rounded-2xl mt-8 items-center'>
                <div className='flex flex-row gap-1 items-center'>
                <span>Package</span>
                <ChevronDown className='mt-1 w-4 h-4' />
                </div>
                <div className='flex flex-row gap-1 items-center'>
                <span>Package</span>
                <ChevronDown className='mt-1 w-4 h-4' />
                </div>
                <div className='flex flex-row gap-1 items-center'>
                <span>Package</span>
                <ChevronDown className='mt-1 w-4 h-4' />
                </div>
                <button type='button' className='text-center bg-black text-white p-2 rounded-2xl'>
                    Explore now
                </button>
            </div>
            <div className='flex flex-row gap-1 mt-12'>
                <span className='text-sm text-[#CFCFCF]'>Popular place:</span>
                <span className='text-sm text-[#DCDCDC]'> Bali, Istanbul, Rome, Paris</span>
            </div>
        </div>
    </div>
  )
}

export default HomeBanner