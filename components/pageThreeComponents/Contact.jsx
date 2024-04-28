'use client'
import React from 'react'

function Contact() {

    const handleMailTo = (email) => {
        window.open('mailto:' + email)
    }

    const handleCallTo = (phone) => {
        window.open('tel:' + phone)
    }



    return (
        <div className='max-w-7xl mx-auto px-5 2xl:px-0 pt-24 pb-48 '>
            <div className="flex flex-col justify-center items-center gap-2">
                <p className=" text-gray-300 pb-2">
                    Connect
                </p>
                <h2 className="text-3xl lg:text-5xl font-bold">Get in Touch</h2>
                <p className=" text-gray-300 pb-2 text-center">
                    Have questions about NFTs? Need support with transactions?
                </p>
            </div>


            <div className='flex flex-col lg:flex-row gap-20 lg:gap-5 justify-between items-center mt-16'>
                <div className="flex flex-col items-center justify-center gap-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                    <h1 className="text-3xl font-bold">Email</h1>
                    <p className="text-gray-300">
                        Send us an email and we'll get back to you promptly.
                    </p>
                    <h1
                        onClick={() => handleMailTo('hello@relume.io')}
                        className="text-xl tracking-widest  font-bold cursor-pointer">
                        hello@relume.io
                    </h1>

                </div>
                <div className="flex flex-col items-center justify-center gap-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>

                    <h1 className="text-3xl font-bold">Phone</h1>
                    <p className="text-gray-300">
                        Give us a call if you prefer to speak with us directly.
                    </p>
                    <h1
                        onClick={() => handleCallTo('+1 (555) 000-0000')}
                        className="text-xl tracking-wide  font-bold cursor-pointer">
                        +1 (555) 000-0000
                    </h1>

                </div>
                <div className="flex flex-col items-center justify-center gap-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>

                    <h1 className="text-3xl font-bold">Office</h1>
                    <p className="text-gray-300">
                        Visit our office for a face-to-face discussion.
                    </p>
                    <h1
                        className="text-xl  tracking-wide font-bold cursor-pointer">
                        123 Sample St, Sydney NSW 2000 AU
                    </h1>

                </div>
            </div>


        </div>
    )
}

export default Contact