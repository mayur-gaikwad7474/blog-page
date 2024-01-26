import React from 'react'
import Image from 'next/image'
import Background from '../../../public/assets/Union.svg'

interface TopBlogProps {
    imagePath: any;
    tag: string;
    autherName: string;
    title: string;
    readTime: string;
    published: string;
    hideBackground: boolean
}

const TopBlog: React.FC<TopBlogProps> = ({ imagePath, tag, autherName, title, readTime, published, hideBackground }) => {
    return (
        <div className='flex justify-between items-center soft-shadow rounded-[20px] mt-[50px] p-3 relative'>
            <div className='w-full flex flex-col md:flex-row'>
                <div className='relative md:w-[50%]  overflow-hidden'>
                    {
                        hideBackground ? null : <div className='flex justify-center items-center'>
                            <div className='w-[4000px] absolute top-[-5px]' style={{ transform: 'rotate(180deg)' }}>
                                <Image src={Background} alt='decoration' />
                            </div>
                        </div>
                    }

                    <Image src={imagePath} alt='hero-image' className='w-full rounded-tl-[10px] rounded-tr-[10px] md:rounded-tr-[0px] md:rounded-bl-[10px]' />

                    {
                        hideBackground ? null : <div className='flex justify-center items-center'>
                            <div className='w-[4000px] absolute bottom-[-5px]'>
                                <Image src={Background} alt='decoration' />
                            </div>
                        </div>
                    }
                </div>
                <div className='w-full md:w-[50%] flex flex-col justify-center items-center text-center md:items-start md:text-left md:pl-[30px] py-[20px] rounded-bl-[10px] rounded-br-[10px] md:rounded-bl-[0px] md:rounded-tr-[10px]' style={{ backgroundColor: '#F8F8F8' }}>
                    <div className='flex items-center'>
                        <span className='text-[14px] xl:text-[18px] 2xl:text-[20px] font-semibold' style={{ color: '#667085' }}>{tag}</span>
                        <div className='h-4 w-4 rounded-[50%] mx-5' style={{ backgroundColor: '#667085' }}></div>
                        <span className='text-[14px] xl:text-[18px] 2xl:text-[20px] font-semibold' style={{ color: '#667085' }}>{autherName}</span>
                    </div>

                    <h2 className='mt-[15px] text-[28px] xl:text-[46px] 2xl:text-[56px] font-medium w-[98%]' style={{ color: '#344054' }}>{title}</h2>

                    <div className='flex items-center mt-[12%]'>
                        <span className='text-[14px] xl:text-[18px] 2xl:text-[20px] font-semibold' style={{ color: '#667085' }}>{readTime}</span>
                        <div className='h-4 w-4 rounded-[50%] mx-5' style={{ backgroundColor: '#667085' }}></div>
                        <span className='text-[14px] xl:text-[18px] 2xl:text-[20px] font-semibold' style={{ color: '#667085' }}>{published}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBlog