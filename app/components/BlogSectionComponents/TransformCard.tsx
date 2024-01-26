import React from 'react'
import Image from 'next/image'
import Background from '../../../public/assets/Union.svg'

const TransformCard = () => {
    return (
        <div className='mt-[100px] p-[25%] md:p-[15%] lg:p-[10%] px-[10%] md:px-[8%] lg:px-[8%] transform-gradient rounded-[20px] relative overflow-hidden'>
            <div className='flex justify-center items-center'>
                <div className='w-[2800px] absolute top-[-5px]' style={{ transform: 'rotate(180deg)' }}>
                    <Image src={Background} alt='decoration' />
                </div>
            </div>

            <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
                <div style={{ color: '#fff' }} className='md:w-[60%] lg:w-[50%]'>
                    <div className='text-[40px] lg:text-[56px] text-center md:text-left leading-[48px] lg:leading-[70px]'>
                        Transforming your <span className='font-bold'>Ideas into reality</span>
                    </div>
                    <p className='text-[16px] lg:text-[18px] xl:text-[20px] mt-[18px] font-medium text-center md:text-left'>Let's build something extraordinary together to  captivate your audience.</p>
                </div>

                <div className='w-[230px] h-[230px] md:w-[250px] md:h-[250px] lg:w-[400px] lg:h-[400px] rounded-[50%] flex justify-center items-center border-[2px] border-solid mt-[50px] md:mt-[0px] m-auto' style={{ borderColor: '#fff' }}>
                    <span style={{ color: '#fff' }} className='text-[22px] lg:text-[28px] xl:text-[30px] 2xl:text-[32px] w-[70%] md:w-[70%] lg:w-[70%] font-semibold text-center'>Let’s Work Together!</span>
                </div>
            </div>

            <div className='flex justify-center items-center'>
                <div className='w-[2800px] absolute bottom-[-5px]'>
                    <Image src={Background} alt='decoration' />
                </div>
            </div>
        </div>
    )
}

export default TransformCard