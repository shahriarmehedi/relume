import React from 'react'

function Achievements() {
    return (
        <div className='bg-white bg-opacity-25 mt-48'>
            <div className='max-w-7xl mx-auto px-5 2xl:px-0  py-44'>

                <div className=" flex flex-col lg:flex-row gap-10 justify-between items-center">
                    <div className="w-full lg:w-1/2 flex flex-col">
                        <p className='pb-2'>
                            Experienced
                        </p>
                        <h1 className='text-3xl lg:text-5xl font-bold'>Academic Achievements <br /> of Our Founder</h1>
                    </div>

                    <div className="w-full lg:w-1/2 flex flex-col">
                        <p className='text-lg'>
                            Our founder holds a Computer Science degree from the University of Texas at Arlington, showcasing his strong educational background and expertise in the field.
                        </p>
                        <div className="flex gap-3 mt-7">
                            <div class="cursor-pointer h-12 w-36 rounded-full bg-gradient-to-r from-sky-500 to-red-500 p-[1px] hover:scale-105 hover:from-red-500 hover:to-sky-500 transition duration-200">
                                <div class="flex h-full w-full items-center justify-center bg-[#4D525D] rounded-full">
                                    <h1 class="text-white">Learn More</h1>
                                </div>
                            </div>
                            <div class="cursor-pointer h-12 w-36 rounded-full bg-gradient-to-r from-sky-500 to-red-500 p-[1px] hover:scale-105 hover:from-red-500 hover:to-sky-500 transition duration-200">
                                <div class="flex h-full w-full items-center justify-center bg-[#4D525D] rounded-full">
                                    <h1 class="text-white">Contact Us</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-7 mt-14">
                    <div className="w-1/3 flex items-center gap-10">
                        <div className=' h-32 w-[3px] bg-white'></div>
                        <div className='flex flex-col gap-5'>
                            <h1 className='text-5xl font-bold'>30%</h1>
                            <h5 className='text-gray-300'>Education</h5>
                        </div>
                    </div>
                    <div className="w-1/3 flex items-center gap-10">
                        <div className=' h-32 w-[3px] bg-white'></div>
                        <div className='flex flex-col gap-5'>
                            <h1 className='text-5xl font-bold'>30%</h1>
                            <h5 className='text-gray-300'>Expertise</h5>
                        </div>
                    </div>
                    <div className="w-1/3 flex items-center gap-10">
                        <div className=' h-32 w-[3px] bg-white'></div>
                        <div className='flex flex-col gap-5'>
                            <h1 className='text-5xl font-bold'>30%</h1>
                            <h5 className='text-gray-300'>Knowledge</h5>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Achievements