import React from 'react'

function Customer() {


    const starRating = (rating) => {
        let stars = []
        for (let i = 0; i < rating; i++) {
            stars.push(<svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>)
        }
        return stars
    }



    return (
        <div className='max-w-7xl mx-auto px-5 2xl:px-0 mt-48 pb-20'>
            <div className="flex  flex-col gap-5">
                <h2 className="text-3xl lg:text-5xl font-bold mt-5">Happy Customers</h2>
                <p className=" text-gray-300">
                    Read what our customers have to say about us
                </p>


                <div className="flex flex-col lg:flex-row gap-10 items-center">
                    <div className="w-full lg:w-1/2 bg-white p-10 rounded-xl bg-opacity-5">
                        <div className="flex gap-2">
                            {starRating(5)}
                        </div>
                        <p className="mt-5 text-gray-300">
                            "Shiba Shanti Inu is a game-changer in the gaming industry. Their passion for gaming and commitment to the project is truly inspiring."
                        </p>

                        <div className="flex flex-col lg:flex-row items-center gap-10  mt-10">
                            <div className="flex items-center gap-5">
                                <img src="https://placehold.co/50x50" alt="customer" className="rounded-full" />
                                <div>
                                    <h1 className="text-xl font-bold">John Doe</h1>
                                    <p className="text-gray-300">CEO, Gaming Corp</p>
                                </div>
                            </div>

                            <div className='h-[1px] w-[100px] bg-white  lg:hidden'>
                            </div>
                            <div className='h-[50px] w-[2px] bg-white hidden lg:block'>
                            </div>

                            <div className="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                                    <path d="M12.378 1.602a.75.75 0 0 0-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03ZM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 0 0 .372-.648V7.93ZM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 0 0 .372.648l8.628 5.033Z" />
                                </svg>
                                <h2 className="text-2xl font-bold">R E L U M E</h2>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 bg-white p-10 rounded-xl bg-opacity-5">
                        <div className="flex gap-2">
                            {starRating(5)}
                        </div>
                        <p className="mt-5 text-gray-300">
                            "Shiba Shanti Inu is a game-changer in the gaming industry. Their passion for gaming and commitment to the project is truly inspiring."
                        </p>

                        <div className="flex flex-col lg:flex-row items-center gap-10  mt-10">
                            <div className="flex items-center gap-5">
                                <img src="https://placehold.co/50x50" alt="customer" className="rounded-full" />
                                <div>
                                    <h1 className="text-xl font-bold">John Doe</h1>
                                    <p className="text-gray-300">CEO, Gaming Corp</p>
                                </div>
                            </div>

                            <div className='h-[1px] w-[100px] bg-white  lg:hidden'>
                            </div>
                            <div className='h-[50px] w-[2px] bg-white hidden lg:block'>
                            </div>

                            <div className="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                                    <path d="M12.378 1.602a.75.75 0 0 0-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03ZM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 0 0 .372-.648V7.93ZM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 0 0 .372.648l8.628 5.033Z" />
                                </svg>
                                <h2 className="text-2xl font-bold">R E L U M E</h2>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Customer