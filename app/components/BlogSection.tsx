import React from 'react'
import HeadSection from './BlogSectionComponents/HeadSection'
import TopBlog from './commonComponents/TopBlog'
import Social from '../../public/assets/social.png'
import BlogCards from './BlogSectionComponents/BlogCards'
import TransformCard from './BlogSectionComponents/TransformCard'

const BlogSection = () => {
    return (
        <div className='px-[4%] mt-[5%]'>
            <HeadSection />
            <TopBlog
                imagePath={Social}
                hideBackground={false}
                tag="FREELANCING 101"
                autherName="William George"
                title="07 Ways to get Consistent Clients from Social Media"
                readTime="15 Min Read"
                published="23 - 05 -2023" />
            <BlogCards />
            <TransformCard />
        </div>
    )
}

export default BlogSection