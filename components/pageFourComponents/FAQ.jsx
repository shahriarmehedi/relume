import React from 'react'

function FAQ() {
    return (
        <div className='max-w-7xl mx-auto px-5 2xl:px-0 mt-48'>
            <div className=''>
                <div className='text-center'>
                    <h2 className="text-3xl font-bold mt-5">
                        FAQ's
                    </h2>
                    <p className="mt-7 text-gray-300">
                        Find answers to frequently asked questions about our game features, system requirements, NFT functionality, and more.
                    </p>
                </div>

                <div>
                    <div className="collapse collapse-plus bg-gray-800 mt-10">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            What are the system requirements?
                        </div>
                        <div className="collapse-content">
                            <p>NFT assets are unique digital items that can be bought, sold, and owned on the blockchain. In our game, you can purchase 3D objects as NFT assets and use them in your gameplay.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-gray-800 mt-1">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            How can I purchase NFT assets?
                        </div>
                        <div className="collapse-content">
                            <p>Tokenomics refers to the economic system of our token. With a deflationary buy and burn mechanism, our token supply decreases over time, increasing its scarcity and potential value.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-gray-800 mt-1">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            Can I use NFT assets in the game?
                        </div>
                        <div className="collapse-content">
                            <p>Game mechanics are the rules and systems that govern gameplay. In our RTS game, you'll engage in real-time strategy, mining rare elements on the dark side of the moon, and building civilizations.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-gray-800 mt-1">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            What is the storyline of the game?
                        </div>
                        <div className="collapse-content">
                            <p>Yes, you can modify and upgrade space-based weapons for surface combat. Explore advanced DARPA-type technology and customize your arsenal for strategic advantage.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-gray-800 mt-1">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            Are there enemies in the game?
                        </div>
                        <div className="collapse-content">
                            <p>Our game will be available on iOS, Android, PC, and the PlayStation Store, allowing you to enjoy the immersive RTS experience across multiple platforms.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ