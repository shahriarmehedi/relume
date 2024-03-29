import React from 'react'
import Link from 'next/link'

function Header() {
    return (
        <nav className='py-5 border-b border-gray-800 bg-gray-900 text-white'>
            <div className="flex justify-between max-w-7xl mx-auto items-center px-5 2xl:px-0">
                <div className="flex items-center gap-10">
                    <div className="flex items-center gap-2">
                        <a href="/" className="">
                            <img src="logo2.png" alt="logo" className='w-14 h-14 rounded-full' />
                        </a>
                        <div>
                            <img src="title2.png" alt="logo" className='h-12' />
                        </div>
                    </div>


                    <div className='hidden lg:block'>
                        <ul className="flex gap-7">
                            <Link href='/' className="">
                                About Us
                            </Link>
                            <Link href='/' className="">
                                NFT Assets
                            </Link>
                            <Link href='/' className="">
                                Game page
                            </Link>
                            <Link href='/' className=" flex items-center gap-3">
                                Tokenomics
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>

                            </Link>
                        </ul>
                    </div>
                </div>
                <div className="hidden lg:flex gap-5 items-center">
                    <div className="flex gap-3">
                        <div class="cursor-pointer h-12 w-36 rounded-full bg-gradient-to-r from-sky-500 via-red-500 to-blue-500 p-[1px]">
                            <div class="flex h-full w-full items-center justify-center bg-gray-800 rounded-full">
                                <h1 class="text-white">Learn More</h1>
                            </div>
                        </div>
                        <div class="cursor-pointer h-12 w-36 rounded-full bg-gradient-to-r from-sky-500 via-red-500 to-blue-500 p-[1px]">
                            <div class="flex h-full w-full items-center justify-center bg-gray-800 rounded-full">
                                <h1 class="text-white">Sign Up</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header