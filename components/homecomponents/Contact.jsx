import React from 'react'

function Contact() {
    return (
        <div className='max-w-7xl mx-auto px-5 2xl:px-0 mt-48 mb-36'>
            <div className='text-center'>
                <h2 className="text-4xl font-bold mt-5">
                    Still have questions?
                </h2>
                <p className="mt-7 text-gray-300">
                    Contact us for further assistance.
                </p>
                <div className="flex items-center justify-center gap-10 mt-10">
                    <div class="cursor-pointer h-12 w-36 rounded-lg bg-gradient-to-r from-sky-500 to-red-500 p-[1px]">
                        <div class="flex h-full w-full items-center justify-center bg-gray-800 rounded-lg">
                            <h1 class="text-white">Contact</h1>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Contact