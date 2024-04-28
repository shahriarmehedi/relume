import React from 'react'

import Hero from '@/components/pageTwoComponents/Hero'
import CTA from '@/components/pageTwoComponents/CTA'
import Hero2 from '@/components/pageTwoComponents/Hero2'
import CTA2 from '@/components/pageTwoComponents/CTA2'
import Collection from '@/components/pageTwoComponents/Collection'
import Journey from '@/components/pageTwoComponents/Journey'
import Team from '@/components/pageTwoComponents/Team'
import Hiring from '@/components/pageTwoComponents/Hiring'
import Achievements from '@/components/pageTwoComponents/Achievements'
import Customer from '@/components/pageTwoComponents/Customer'
import TrustedBy from '@/components/pageTwoComponents/TrustedBy'

function page() {
    return (
        <div className='bg-gray-900 text-white'>
            <CTA />
            <Hero />
            <Collection />
            <Journey />
            <Team />
            <Hiring />
            <Achievements />
            <Hero2 />
            <Customer />
            <CTA2 />
            <TrustedBy />
        </div>
    )
}

export default page