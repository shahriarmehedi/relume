import FAQ from '@/components/pageThreeComponents/FAQ'
import Discover from '@/components/pageThreeComponents/Discover'
import Explore from '@/components/pageThreeComponents/Explore'
import Points from '@/components/pageThreeComponents/Points'
import NFTs from '@/components/pageThreeComponents/NFTs'
import NFTShowcase from '@/components/pageThreeComponents/NFTShowcase'
import Review from '@/components/pageThreeComponents/Review'
import CTA from '@/components/pageThreeComponents/CTA'
import Contact from '@/components/pageThreeComponents/Contact'

function page() {
    return (
        <div className='bg-gray-900 text-white'>
            <Discover />
            <Explore />
            <Points />
            <NFTs />
            <NFTShowcase />
            <Review />
            <FAQ />
            <CTA />
            <Contact />
        </div>
    )
}

export default page