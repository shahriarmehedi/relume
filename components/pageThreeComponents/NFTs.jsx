import React from 'react'

function NFTs() {


    const nfts = [
        {
            id: 1,
            image: 'https://placeholder.co/150x150',
            title: 'NFT Title',
            description: 'NFT Description',
            price: 199,
        },
        {
            id: 2,
            image: 'https://placeholder.co/150x150',
            title: 'NFT Title',
            description: 'NFT Description',
            price: 199,
        },
        {
            id: 3,
            image: 'https://placeholder.co/150x150',
            title: 'NFT Title',
            description: 'NFT Description',
            price: 199,
        },
        {
            id: 4,
            image: 'https://placeholder.co/150x150',
            title: 'NFT Title',
            description: 'NFT Description',
            price: 199,
        },
        {
            id: 5,
            image: 'https://placeholder.co/150x150',
            title: 'NFT Title',
            description: 'NFT Description',
            price: 199,
        },
        {
            id: 6,
            image: 'https://placeholder.co/150x150',
            title: 'NFT Title',
            description: 'NFT Description',
            price: 199,
        },
        {
            id: 7,
            image: 'https://placeholder.co/150x150',
            title: 'NFT Title',
            description: 'NFT Description',
            price: 199,
        },
        {
            id: 8,
            image: 'https://placeholder.co/150x150',
            title: 'NFT Title',
            description: 'NFT Description',
            price: 199,
        }
    ]


    const SingleNftDiv = ({ nft }) => {
        return (
            <div className="flex flex-col items-center gap-2 mb-14">
                <img src={nft.image} alt={nft.title} className="w-full h-full" />
                <h3 className="text-xl font-bold mt-2">{nft.title}</h3>
                <p className="text-gray-300">{nft.description}</p>
                <p className="text-2xl text-gray-100">${nft.price}</p>
                <div class="cursor-pointer h-16 w-full bg-gradient-to-r from-sky-500 to-red-500 p-[1px]">
                    <div class="flex h-full w-full items-center justify-center bg-gray-800">
                        <h1 class="text-white">Add to cart</h1>
                    </div>
                </div>
            </div>
        )
    }








    return (
        <div className='max-w-7xl mx-auto px-5 2xl:px-0 mt-48'>
            <div className="flex flex-col justify-center items-center gap-2">
                <p className=" text-gray-300 pb-2">
                    Discover
                </p>
                <h2 className="text-3xl lg:text-5xl font-bold">NFTs</h2>
                <p className=" text-gray-300 pb-2">
                    Explore our collection of unique NFTs
                </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
                {nfts.map(nft => <SingleNftDiv nft={nft} key={nft.id} />)}

            </div>

            <div className='flex justify-center items-center mt-10'>
                <div class="cursor-pointer h-12 w-36 bg-gradient-to-r from-sky-500 to-red-500 p-[1px]">
                    <div class="flex h-full w-full items-center justify-center bg-gray-800">
                        <h1 class="text-white">View all</h1>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default NFTs