import React from 'react'
import aboutImage from '../../assets/images/homepage/homepage-about.jpg'
import aboutToy from '../../assets/images/homepage/homepage-toy.webp'

const HomeAbout = () => {
    return (
        <div className='text-center my-8 max-w-3xl mx-auto'>
            <p className='font-bold text-xl'>About Game Fury</p>
            <p className='font-suez text-3xl lg:text-5xl my-8 lg:leading-[4rem]'>Your Source for Mobile Entertainment</p>
            <p className='text-lg my-8'>Game Fury is a gaming community dedicated to helping gamers achieve their dreams and unlock their full potential. Our mission is to create a welcoming and supportive environment where players can share their experiences, learn from others, and build a strong community.</p>
            <button className=' bg-poinciana py-4 px-8 rounded-lg border border-poinciana text-white transition-all duration-500 hover:bg-white hover:text-black hover:border-black'>Learn More</button>
            <div className='relative'>
                <img className='mt-8 rounded-2xl' src={aboutImage} alt="" />
                <img className='absolute top-3/4 start-1/2 -translate-x-1/2 z-10 w-1/2 md:w-1/4 lg:-start-1/4 lg:translate-x-1/2' src={aboutToy} alt="" />
            </div>
        </div>
    )
}

export default HomeAbout