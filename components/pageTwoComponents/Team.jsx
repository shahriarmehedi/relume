import React from 'react'
import { SocialIcon } from 'react-social-icons'



function Team() {

    const team = [
        {
            id: 1,
            name: 'John Doe',
            position: 'CEO',
            image: 'https://media.istockphoto.com/id/1367391515/photo/portrait-of-successful-businessman.jpg?s=612x612&w=0&k=20&c=COBjoH3I-mJcim_w8frbEfhFHW9pEvZf4FV_jjby3xo=',
            description: 'Bringing years of experience in gaming and blockchain technology to the team.',
            linkedIn: 'https://www.linkedin.com/',
            twitter: 'https://twitter.com/',
            dribbble: 'https://dribbble.com/'
        },
        {
            id: 2,
            name: 'John Doe',
            position: 'CEO',
            image: 'https://media.istockphoto.com/id/1367391515/photo/portrait-of-successful-businessman.jpg?s=612x612&w=0&k=20&c=COBjoH3I-mJcim_w8frbEfhFHW9pEvZf4FV_jjby3xo=',
            description: 'Bringing years of experience in gaming and blockchain technology to the team.',
            linkedIn: 'https://www.linkedin.com/',
            twitter: 'https://twitter.com/',
            dribbble: 'https://dribbble.com/'
        },
        {
            id: 3,
            name: 'John Doe',
            position: 'CEO',
            image: 'https://media.istockphoto.com/id/1367391515/photo/portrait-of-successful-businessman.jpg?s=612x612&w=0&k=20&c=COBjoH3I-mJcim_w8frbEfhFHW9pEvZf4FV_jjby3xo=',
            description: 'Bringing years of experience in gaming and blockchain technology to the team.',
            linkedIn: 'https://www.linkedin.com/',
            twitter: 'https://twitter.com/',
            dribbble: 'https://dribbble.com/'
        },
        {
            id: 4,
            name: 'John Doe',
            position: 'CEO',
            image: 'https://media.istockphoto.com/id/1367391515/photo/portrait-of-successful-businessman.jpg?s=612x612&w=0&k=20&c=COBjoH3I-mJcim_w8frbEfhFHW9pEvZf4FV_jjby3xo=',
            description: 'Bringing years of experience in gaming and blockchain technology to the team.',
            linkedIn: 'https://www.linkedin.com/',
            twitter: 'https://twitter.com/',
            dribbble: 'https://dribbble.com/'
        },
        {
            id: 5,
            name: 'John Doe',
            position: 'CEO',
            image: 'https://media.istockphoto.com/id/1367391515/photo/portrait-of-successful-businessman.jpg?s=612x612&w=0&k=20&c=COBjoH3I-mJcim_w8frbEfhFHW9pEvZf4FV_jjby3xo=',
            description: 'Bringing years of experience in gaming and blockchain technology to the team.',
            linkedIn: 'https://www.linkedin.com/',
            twitter: 'https://twitter.com/',
            dribbble: 'https://dribbble.com/'
        },
        {
            id: 6,
            name: 'John Doe',
            position: 'CEO',
            image: 'https://media.istockphoto.com/id/1367391515/photo/portrait-of-successful-businessman.jpg?s=612x612&w=0&k=20&c=COBjoH3I-mJcim_w8frbEfhFHW9pEvZf4FV_jjby3xo=',
            description: 'Bringing years of experience in gaming and blockchain technology to the team.',
            linkedIn: 'https://www.linkedin.com/',
            twitter: 'https://twitter.com/',
            dribbble: 'https://dribbble.com/'
        },
        {
            id: 7,
            name: 'John Doe',
            position: 'CEO',
            image: 'https://media.istockphoto.com/id/1367391515/photo/portrait-of-successful-businessman.jpg?s=612x612&w=0&k=20&c=COBjoH3I-mJcim_w8frbEfhFHW9pEvZf4FV_jjby3xo=',
            description: 'Bringing years of experience in gaming and blockchain technology to the team.',
            linkedIn: 'https://www.linkedin.com/',
            twitter: 'https://twitter.com/',
            dribbble: 'https://dribbble.com/'
        },
        {
            id: 8,
            name: 'John Doe',
            position: 'CEO',
            image: 'https://media.istockphoto.com/id/1367391515/photo/portrait-of-successful-businessman.jpg?s=612x612&w=0&k=20&c=COBjoH3I-mJcim_w8frbEfhFHW9pEvZf4FV_jjby3xo=',
            description: 'Bringing years of experience in gaming and blockchain technology to the team.',
            linkedIn: 'https://www.linkedin.com/',
            twitter: 'https://twitter.com/',
            dribbble: 'https://dribbble.com/'
        },
    ]



    const TeamDiv = ({ name, position, image, description, linkedIn, twitter, dribbble }) => {
        return (
            <div className=" flex flex-col mb-10">
                <img src={image} alt={name} className=" w-full h-full object-cover" />
                <h1 className="text-2xl font-bold mt-4">{name}</h1>
                <p className="text-gray-300">{position}</p>
                <p className="text-gray-300 mt-2">{description}</p>
                <div className="flex gap-3 mt-5">
                    <SocialIcon
                        url={linkedIn}
                        bgColor="#ffffff"
                        fgColor="#000000"
                        style={{ height: 30, width: 30 }}
                    />
                    <SocialIcon
                        url={twitter}
                        bgColor="#ffffff"
                        fgColor="#000000"
                        style={{ height: 30, width: 30 }}
                    />
                    <SocialIcon
                        url={dribbble}
                        bgColor="#ffffff"
                        fgColor="#000000"
                        style={{ height: 30, width: 30 }}
                    />
                </div>
            </div>
        )
    }




    return (
        <div className='max-w-7xl mx-auto px-5 2xl:px-0 mt-48'>
            <div className="flex flex-col gap-2">
                <p className=" text-gray-300 pb-2">
                    Experienced
                </p>
                <h2 className="text-3xl lg:text-5xl font-bold">Meet Our Team</h2>
                <p className=" text-gray-300 pb-2">
                    Discover the talented individuals behind Shiba Shanti Inu.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-7 mt-14">

                {team.map((member) => (
                    <TeamDiv
                        key={member.id}
                        name={member.name}
                        position={member.position}
                        image={member.image}
                        description={member.description}
                        linkedIn={member.linkedIn}
                        twitter={member.twitter}
                        dribbble={member.dribbble}
                    />
                ))}

            </div>
        </div>
    )
}

export default Team