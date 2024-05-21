import Mining from '@/components/pageFourComponents/Mining'
import Hero from '@/components/pageFourComponents/Hero'
import Points from '@/components/pageFourComponents/Points'
import Unlock from '@/components/pageFourComponents/Unlock'
import Integrate from '@/components/pageFourComponents/Integrate'
import CTA from '@/components/pageFourComponents/CTA'
import Timeline from '@/components/pageFourComponents/Timeline'
import Review from '@/components/pageFourComponents/Review'
import FAQ from '@/components/pageFourComponents/FAQ'
import CTA2 from '@/components/pageFourComponents/CTA2'
import Gallery from '@/components/pageFourComponents/Gallery'
import Inspired from '@/components/pageFourComponents/Inspired'


function page() {
    return (
        <div className='bg-gray-900 text-white'>
            <Mining />
            <Hero />
            <Points />
            <Unlock />
            <Integrate />
            <CTA />
            <Timeline />
            <Review />
            <FAQ />
            <CTA2 />
            <Gallery />
            <Inspired />



        </div>
    )
}

export default page