import React from 'react'
import Image from 'next/image'

const blogData = [
    {
        "tags": ["FREELANCING 101", "William George"],
        "title": "07 Ways to get Consistent Clients from Social Media",
        "readTime": "15 min read",
        "date": "23-05-2023",
        "image": "https://i.ibb.co/VLHTNH8/Frame-2-1.png"
    },
    {
        "tags": ["FREELANCING 101", "Christina Morillo"],
        "title": "Enhance UX: Designing Better UX/UI",
        "readTime": "15 min read",
        "date": "23-05-2023",
        "image": "https://i.ibb.co/0sMDLNX/Group-1000004815.png"
    },
    {
        "tags": ["FREELANCING 101", "Smith Jack"],
        "title": "Designing Impression: The Power of First Impressions",
        "readTime": "15 min read",
        "date": "23-05-2023",
        "image": "https://i.ibb.co/d4Y23FL/3dicons.png"
    },
    {
        "tags": ["FREELANCING 101", "Brian Smith"],
        "title": "Case Study: FlipX, an Investment Attraction Startup",
        "readTime": "15 min read",
        "date": "23-05-2023",
        "image": "https://i.ibb.co/0sMDLNX/Group-1000004815.png"
    },
    {
        "tags": ["FREELANCING 101", "Lilly Bella"],
        "title": "Mastering Startup Branding: Expanding Digital Presence",
        "readTime": "15 min read",
        "date": "23-05-2023",
        "image": "https://i.ibb.co/d4Y23FL/3dicons.png"
    },
    {
        "tags": ["FREELANCING 101", "Gigi Hadid"],
        "title": "Designing for Productivity: Efficiency Rules",
        "readTime": "15 min read",
        "date": "23-05-2023",
        "image": "https://i.ibb.co/0sMDLNX/Group-1000004815.png"
    },
    {
        "tags": ["FREELANCING 101", "David Travis"],
        "title": "Kickstart your UI/UX design career?",
        "readTime": "15 min read",
        "date": "23-05-2023",
        "image": "https://i.ibb.co/d4Y23FL/3dicons.png"
    }
]

const BlogCards = () => {
    return (
        <div className='mt-[50px] grid'>
            {
                blogData.map((info, index) => {
                    if (index === 0) return

                    return <div key={info.title} className='soft-shadow p-3 rounded-[15px] mt-[20px] lg:mt-[0px]'>
                        <div>
                            <div className='w-full h-[238px] relative gradient'>
                                <Image className='p-[40px]' src={info.image} alt={info.title} layout="fill" objectFit='contain' />
                            </div>
                            <div className='p-4 rounded-br-[10px] rounded-bl-[10px] h-[250px] lg:h-[350px] xl:h-[350px] flex flex-col justify-between' style={{ backgroundColor: '#F8F8F8' }}>
                                <div>
                                    <div className='flex items-center'>
                                        <span className='text-[14px] xl:text-[18px] 2xl:text-[20px]' style={{ color: '#667085' }}>{info.tags[0]}</span>
                                        <div className='h-3 w-3 rounded-[50%] mx-5 lg:mx-3' style={{ backgroundColor: '#667085' }}></div>
                                        <span className='text-[14px] xl:text-[18px] 2xl:text-[20px]' style={{ color: '#667085' }}>{info.tags[1]}</span>
                                    </div>

                                    <h2 className='text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[38px]  font-medium w-[98%] mt-[20px]' style={{ color: '#344054' }}>{info.title}</h2>
                                </div>

                                <div className='flex items-center'>
                                    <span className='text-[14px] xl:text-[18px] 2xl:text-[20px]' style={{ color: '#667085' }}>{info.readTime}</span>
                                    <div className='h-3 w-3 rounded-[50%] mx-5 lg:mx-3' style={{ backgroundColor: '#667085' }}></div>
                                    <span className='text-[14px] xl:text-[18px] 2xl:text-[20px]' style={{ color: '#667085' }}>{info.date}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default BlogCards