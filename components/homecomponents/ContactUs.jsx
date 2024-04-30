import React from 'react'

function ContactUs() {
    return (
        <div className='max-w-7xl mx-auto px-5 2xl:px-0 pt-36 pb-36'>
            <div>
                <p className=" font-bold">Connect</p>
                <h2 className="text-5xl font-bold mt-5">Contact Us</h2>
                <p className="mt-7 text-gray-300">
                    Have a question? Need support? Get in touch with us!
                </p>
            </div>


            <div className='flex flex-col lg:flex-row items-center mt-1 gap-10'>
                <div className='w-full lg:w-[35%] flex flex-col gap-10'>
                    <div className='flex flex-col gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                        <p className='text-white text-xl font-semibold mt-2'>Email </p>
                        <p className='text-white'>
                            Send us an email
                        </p>
                        <p className='text-gray-300'>
                            hello@shibashantiinu.com
                        </p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>

                        <p className='text-white text-xl font-semibold mt-2'>Phone </p>
                        <p className='text-white'>
                            Give us a call
                        </p>
                        <p className='text-gray-300'>
                            +1 (555) 123-4567
                        </p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>

                        <p className='text-white text-xl font-semibold mt-2'>Office </p>
                        <p className='text-white'>
                            123 Main St, Anytown, USA
                        </p>
                        <p className='text-gray-300'>
                            Get Directions <span>{">"}</span>
                        </p>
                    </div>
                </div>
                <div className='w-full lg:w-[65%]'>
                    <img src="14.png" alt="contact" className='w-full object-cover' />
                </div>
            </div>
        </div>
    )
}

export default ContactUs