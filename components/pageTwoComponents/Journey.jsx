import React from 'react'

function Journey() {
    return (
        <div className='max-w-7xl mx-auto px-5 2xl:px-0 mt-48'>
            <div className="flex flex-col lg:flex-row gap-14">
                <div className='w-full lg:w-2/5'>
                    <p className='pb-2'>
                        Experienced
                    </p>
                    <p className="text-3xl lg:text-5xl font-bold  text-gray-100">
                        Founder's Journey in the <br /> Hotel Business and Tech
                    </p>

                    <div className="flex items-center gap-10 mt-10">
                        <div class="cursor-pointer h-12 w-36 rounded-full bg-gradient-to-r from-sky-500 to-red-500 p-[1px]">
                            <div class="flex h-full w-full items-center justify-center bg-gray-800 rounded-full">
                                <h1 class="text-white">Learn More</h1>
                            </div>
                        </div>
                        <div class="cursor-pointer flex gap-2 items-center">
                            <h1 class="text-white">Sign Up</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                            </svg>

                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-3/5'>
                    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">

                        <li>
                            <hr />
                            <div className="timeline-middle">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                                    <path d="M12.378 1.602a.75.75 0 0 0-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03ZM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 0 0 .372-.648V7.93ZM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 0 0 .372.648l8.628 5.033Z" />
                                </svg>
                            </div>

                            <div className="timeline-end mb-10">
                                <time className="font-mono font-bold text-xl relative top-2">Family Business</time>

                                <p className="mt-10 text-gray-300">
                                    Over 20 Years of Experience in the Hotel Business
                                </p>
                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-middle">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                                    <path d="M12.378 1.602a.75.75 0 0 0-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03ZM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 0 0 .372-.648V7.93ZM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 0 0 .372.648l8.628 5.033Z" />
                                </svg>
                            </div>

                            <div className="timeline-end mb-10">
                                <time className="font-mono font-bold text-xl relative top-2">Tech Background</time>

                                <p className="mt-10 text-gray-300">
                                    Computer Science Major from UTA Arlington, TX University
                                </p>
                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-middle">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                                    <path d="M12.378 1.602a.75.75 0 0 0-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03ZM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 0 0 .372-.648V7.93ZM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 0 0 .372.648l8.628 5.033Z" />
                                </svg>
                            </div>

                            <div className="timeline-end mb-10">
                                <time className="font-mono font-bold text-xl relative top-2">Design Skills</time>

                                <p className="mt-10 text-gray-300">
                                    Proficient in Adobe Photoshop and Illustrator since the mid 90s using angelfire, or AOL days. America Online making rave and club party fliers for promoters in Dallas, Texas.
                                </p>
                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-middle">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                                    <path d="M12.378 1.602a.75.75 0 0 0-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03ZM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 0 0 .372-.648V7.93ZM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 0 0 .372.648l8.628 5.033Z" />
                                </svg>
                            </div>

                            <div className="timeline-end mb-10">
                                <time className="font-mono font-bold text-xl relative top-2">Web Development</time>

                                <p className="mt-10 text-gray-300">
                                    Started Making Websites at 16 Years Old, using HTML
                                </p>
                            </div>
                            <hr />
                        </li>



                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Journey