import React from 'react'
import Image from 'next/image'
import Screen from '../../public/assets/screen.jpg'
import Background from '../../public/assets/Union.svg'
import TopBlog from './commonComponents/TopBlog'

const Hero = () => {
    return (
        <div className='px-[20px] md:px-[6%] xl:px-[8%] relative max-w-[100vw] overflow-hidden'>
            <div className='flex flex-col md:flex-row items-center justify-between'>
                <h1 style={{ color: '#344054' }} className='text-[32px] text-center md:text-left font-bold w-full md:w-[55%] md:text-[42px] lg:text-[52px]  xl:text-[64px] 2xl:text-[86px]'>Atlas Premier Knowledge Blogs:</h1>
                <p className='w-full text-center mt-[10px] md:text-left md:w-[40%] font-medium md:text-[18px] lg:text-[20px] xl:text-[24px] 2xl:text-[28px]' style={{ color: '#667085' }}>"Immerse yourself in the latest knowledge and research from our team of software engineers and design professionals.</p>
            </div>

            <TopBlog
                imagePath={Screen}
                hideBackground={true}
                tag="FREELANCING 101"
                autherName="Joseph Patrick"
                title="07 Ways to get Consistent Clients from Social Media"
                readTime="15 Min Read"
                published="23 - 05 -2023" />

            <div className='flex justify-center items-center h-[100px]'>
                <div className='w-[4000px] absolute'>
                    <Image src={Background} alt='decoration' />
                </div>
            </div>
        </div>
    )
}

export default Hero