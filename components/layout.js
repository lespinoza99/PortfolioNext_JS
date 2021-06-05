import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Bullets from './BulletInfo'
import dynamic from 'next/dynamic'
import MoreLinks from './MoreLinks'

const name = "Luis Espinoza"
export const siteTitle = 'Next.js Portfolio'
//Importing Carousel component
const DynamicComponentWithNoSSR = dynamic(
    () => import('../components/Carousel'),
    { ssr: false }
)

export default function Layout({ children }) {

    //While working with NextJS, I noticed that the way props are passed are different, along with how content is generated. With more time and research, I would like to have each carousel item to be a component in which I just fill in the necessary information.
    //I would also turn the bullet points for my highlighted skills and "More Links" into components to clean up the code.
    //After more research with TailwindCSS and NextJS I am confident that I can remake the carousel to be more effecient and utilize a timer as well.
    //I would also add responsive behaviours to everything, as some items are missing the responsive behaviours
    return (
        <div class="bg-yellow-50 h-full">
            <Head>
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(siteTitle)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
            </Head>
            <div class="container mx-auto px-4 py-10">

                <div class="flex container px-4 py-10" >
                    <div class="box-content pr-5 w-max">
                        <Image
                            class="rounded-full "
                            priority
                            src="/images/profile.jpg"
                            height={170}
                            width={170}
                            alt={name}
                        />
                        <main>{children}</main>
                    </div>
                    <Bullets />
                </div>
                <DynamicComponentWithNoSSR />
                <MoreLinks />
            </div>
        </div>
    )
}


//onClick={ () => {event.target.classList.add('translate-x-full'), event.target.classList.remove('translate-x-0') }}