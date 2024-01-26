import React from 'react'
import BackgroundImage from '../../public/assets/Union.svg'
import Image from 'next/image'

const NavigationBar = () => {
    return (
        <div className='w-[100%] max-w-[100vw] overflow-hidden relative'>
            <div className='flex justify-center items-center h-[150px]'>
                <div className='w-[4000px] absolute top-[-5px]' style={{ transform: 'rotate(180deg)' }}>
                    <Image src={BackgroundImage} alt='decoration' />
                </div>
            </div>

            <div className='fixed flex align-center justify-center w-full mt-[-110px] z-50 max-w-[1920px]'>
                <button className='flex align-center justify-between w-[130px] h-[50px] md:h-[63px] md:w-[160px] border border-solid rounded-[500px] py-3 px-5' style={{ borderColor: '#D0D5DD', backgroundColor: '#FCFCFD' }}>
                    <svg className='h-[24px] w-[24px] md:h-[34px] md:w-[34px]' xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M32.2225 40.5539H40.3359L24.6764 0.156738H15.7118L0.335938 40.5539H8.22246L11.343 31.6461L13.6693 25.1213L15.2012 20.7525C16.9033 16.2135 18.5487 11.6177 20.1374 6.90851C22.1232 12.8092 23.7686 17.405 25.1303 20.7525L26.7189 25.1213L29.0452 31.6461L32.2225 40.5539Z" fill="#294F74" />
                    </svg>

                    <div className='absolute left-1/2 top-0 h-full w-[1px]' style={{ backgroundColor: '#D0D5DD' }} />

                    <svg className='h-[24px] w-[24px] md:h-[34px] md:w-[34px]' xmlns="http://www.w3.org/2000/svg" width="42" height="37" viewBox="0 0 42 37" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M37.0916 18.3555C37.0916 17.9254 36.9208 17.5129 36.6166 17.2087C36.3125 16.9046 35.9 16.7337 35.4698 16.7337H5.19603C4.7659 16.7337 4.35338 16.9046 4.04924 17.2087C3.74509 17.5129 3.57422 17.9254 3.57422 18.3555C3.57422 18.7856 3.74509 19.1982 4.04924 19.5023C4.35338 19.8065 4.7659 19.9773 5.19603 19.9773H35.4698C35.9 19.9773 36.3125 19.8065 36.6166 19.5023C36.9208 19.1982 37.0916 18.7856 37.0916 18.3555ZM37.0916 7.54344C37.0916 7.11331 36.9208 6.7008 36.6166 6.39665C36.3125 6.0925 35.9 5.92163 35.4698 5.92163H5.19603C4.7659 5.92163 4.35338 6.0925 4.04924 6.39665C3.74509 6.7008 3.57422 7.11331 3.57422 7.54344C3.57422 7.97357 3.74509 8.38609 4.04924 8.69024C4.35338 8.99438 4.7659 9.16525 5.19603 9.16525H35.4698C35.9 9.16525 36.3125 8.99438 36.6166 8.69024C36.9208 8.38609 37.0916 7.97357 37.0916 7.54344ZM37.0916 29.1676C37.0916 28.7375 36.9208 28.3249 36.6166 28.0208C36.3125 27.7166 35.9 27.5458 35.4698 27.5458H5.19603C4.7659 27.5458 4.35338 27.7166 4.04924 28.0208C3.74509 28.3249 3.57422 28.7375 3.57422 29.1676C3.57422 29.5977 3.74509 30.0102 4.04924 30.3144C4.35338 30.6185 4.7659 30.7894 5.19603 30.7894H35.4698C35.9 30.7894 36.3125 30.6185 36.6166 30.3144C36.9208 30.0102 37.0916 29.5977 37.0916 29.1676Z" fill="#294F74" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default NavigationBar