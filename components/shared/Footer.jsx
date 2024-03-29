import React from 'react'
import { SocialIcon } from 'react-social-icons'

function Footer() {
    return (
        <footer className='bg-gray-800 text-white pt-14 pb-10'>
            <div className='max-w-7xl mx-auto px-5 2xl:px-0 '>
                <div className="flex gap-24 flex-col lg:flex-row ">
                    <div className="w-full lg:w-[60%] flex flex-col lg:flex-row gap-5  justify-between">
                        <div>
                            <img src="logo2.png" alt="logo" className='w-14 h-14 rounded-full' />
                        </div>
                        <div>
                            <h2 className="l font-bold mt-2">
                                Our Roadmap
                            </h2>
                            <h4 className="text-gray-300 mt-2">
                                Launch
                            </h4>
                            <h4 className="text-gray-300 mt-2">
                                Partnerships
                            </h4>
                            <h4 className="text-gray-300 mt-2">
                                NFT Marketplace
                            </h4>
                            <h4 className="text-gray-300 mt-2">
                                Game Development
                            </h4>
                            <h4 className="text-gray-300 mt-2">
                                Community Building
                            </h4>
                        </div>
                        <div>
                            <h2 className="l font-bold mt-2">
                                Token Listing
                            </h2>
                            <h4 className="text-gray-300 mt-2">
                                Tokenomics
                            </h4>
                            <h4 className="text-gray-300 mt-2">
                                Marketing Campaigns
                            </h4>
                            <h4 className="text-gray-300 mt-2">
                                Mobile App Release
                            </h4>
                            <h4 className="text-gray-300 mt-2">
                                Partnership Expansion
                            </h4>
                            <h4 className="text-gray-300 mt-2">
                                NFT Integration
                            </h4>
                        </div>
                        <div>
                            <h2 className="l font-bold mt-2">
                                Game Updates
                            </h2>
                            <h4 className="text-gray-300 mt-2">
                                Community Events
                            </h4>
                            <h4 className="text-gray-300 mt-2">
                                Token Burn
                            </h4>
                            <h4 className="text-gray-300 mt-2">
                                Partnership Announcements
                            </h4>
                            <h4 className="text-gray-300 mt-2">
                                NFT Auctions
                            </h4>
                            <h4 className="text-gray-300 mt-2">
                                Game Expansion
                            </h4>
                        </div>
                    </div>
                    <div className="w-full lg:w-[40%]">
                        <div className='w-full'>
                            <h2 className="l font-bold mt-2">
                                Subscribe
                            </h2>
                            <h4 className="text-gray-300 mt-2">
                                Join our community to receive updates on our progress and releases.
                            </h4>
                            <div className='mt-10 flex gap-5 items-center'>
                                <input type="text" placeholder="Enter your email" className='w-full h-12 px-5 rounded-lg' />
                                <div class="cursor-pointer h-12 w-36 rounded-lg bg-gradient-to-r from-sky-500 to-red-500 p-[1px]">
                                    <div class="flex h-full w-full items-center justify-center bg-gray-800 rounded-lg">
                                        <h1 class="text-white">Subscribe</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='mt-7 border-gray-500' />
                <div className="flex flex-col lg:flex-row gap-14 items-center justify-between">
                    <div className="flex ">
                        <h4 className="text-gray-300 mt-5">
                            © 2024 Shiba Shanti Inu. All rights reserved.
                        </h4>
                        <h4 className="text-gray-300 mt-5 ml-5">
                            Privacy Policy
                        </h4>
                        <h4 className="text-gray-300 mt-5 ml-5">
                            Terms of Service
                        </h4>
                        <h4 className="text-gray-300 mt-5 ml-5">
                            Cookie Settings
                        </h4>
                    </div>
                    <div className='flex gap-2'>
                        <SocialIcon
                            url="www.facebook.com"
                            bgColor="#ffffff"
                            fgColor="#000000"
                            style={{ height: 30, width: 30 }}
                        />
                        <SocialIcon
                            url="www.instagram.com"
                            bgColor="#ffffff"
                            fgColor="#000000"
                            style={{ height: 30, width: 30 }}
                        />
                        <SocialIcon
                            url="www.twitter.com"
                            bgColor="#ffffff"
                            fgColor="#000000"
                            style={{ height: 30, width: 30 }}
                        />
                        <SocialIcon
                            url="www.linkedin.com"
                            bgColor="#ffffff"
                            fgColor="#000000"
                            style={{ height: 30, width: 30 }}
                        />
                        <SocialIcon
                            url="www.youtube.com"
                            bgColor="#ffffff"
                            fgColor="#000000"
                            style={{ height: 30, width: 30 }}
                        />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer