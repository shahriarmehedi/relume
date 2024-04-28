import React from 'react'

function FAQ() {
    return (
        <div className='max-w-7xl mx-auto px-5 2xl:px-0 py-24'>
            <div className=''>
                <div className='text-center'>
                    <h2 className="text-3xl font-bold mt-5">
                        FAQ's
                    </h2>
                    <p className="mt-7 text-gray-300">
                        Find answers to common questions about our NFTs, including the creation process, ownership rights, and compatibility with other games or platforms.
                    </p>
                </div>

                <div>
                    <div className="collapse collapse-plus bg-gray-800 mt-10">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            How are NFTs created?
                        </div>
                        <div className="collapse-content">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi incidunt aliquid recusandae repellendus qui quia numquam labore quibusdam eum fuga?
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-gray-800 mt-1">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            What are ownership rights?
                        </div>
                        <div className="collapse-content">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi incidunt aliquid recusandae repellendus qui quia numquam labore quibusdam eum fuga?
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-gray-800 mt-1">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            Are NFTs compatible with other games or platforms?
                        </div>
                        <div className="collapse-content">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi incidunt aliquid recusandae repellendus qui quia numquam labore quibusdam eum fuga?
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-gray-800 mt-1">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            Can I sell my NFTs?
                        </div>
                        <div className="collapse-content">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi incidunt aliquid recusandae repellendus qui quia numquam labore quibusdam eum fuga?
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-gray-800 mt-1">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            How do I buy NFTs?
                        </div>
                        <div className="collapse-content">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi incidunt aliquid recusandae repellendus qui quia numquam labore quibusdam eum fuga?
                            </p>
                        </div>
                    </div>
                </div>


                <div className='text-center mt-20'>
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
            </div>
        </div>
    )
}

export default FAQ