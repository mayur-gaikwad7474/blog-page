import React from 'react'

const HeadSection = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between'>
      <span className='text-[40px] md:text-[56px] text-center font-bold' style={{ color: '#344054' }}>Blog</span>

      <div className='flex flex-wrap justify-center md:items-center gap-[20px] md:gap-[10px] mt-[20px] md:mt-[0px]'>
        <button
          className='text-[12px] md:text-[16px] xl:text-[18px] 2xl:text-[20px] border border-solid px-5 py-2 rounded-[30px] font-medium'
          style={{ borderColor: '#294F74', color: '#294F74' }}>All Blogs</button>

        <button className='text-[12px] md:text-[16px] xl:text-[18px] 2xl:text-[20px] px-4 py-2 font-medium' style={{ color: '#98A2B3' }}>Trends</button>
        <button className='text-[12px] md:text-[16px] xl:text-[18px] 2xl:text-[20px] px-4 py-2 font-medium' style={{ color: '#98A2B3' }}>Research</button>
        <button className='text-[12px] md:text-[16px] xl:text-[18px] 2xl:text-[20px] pl-4 py-2 font-medium' style={{ color: '#98A2B3' }}>In-house Knowledge</button>
      </div>
    </div>
  )
}

export default HeadSection