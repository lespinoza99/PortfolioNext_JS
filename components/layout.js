import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faNode } from "@fortawesome/free-brands-svg-icons"
import { useState } from 'react'

const name = "Luis Espinoza"
export const siteTitle = 'Next.js Portfolio'


export default function Layout({ children }) {

    //This function is used in our carousel. The function will look for the next element sibling and use tailwindcss' animations to animate the slides to the next slide
    function nextSlide() {
        let activeSlide = document.querySelector('.slide.translate-x-0');
        let nextSlide = activeSlide.nextElementSibling;

        if (nextSlide != null) {

            activeSlide.classList.remove('translate-x-0');
            activeSlide.classList.add('-translate-x-full')
        }

        if (nextSlide != null) {

            nextSlide.classList.remove('translate-x-full');
            nextSlide.classList.add('translate-x-0')

        }

    }

    //This is the second part to the carousel function, this function will go to the previous slide
    function previousSlide() {
        let activeSlide = document.querySelector('.slide.translate-x-0');
        let previousSlide = activeSlide.previousElementSibling;
        if (previousSlide != null) {
            activeSlide.classList.remove('translate-x-0');
            activeSlide.classList.add('translate-x-full')
        }

        if (previousSlide != null) {
            previousSlide.classList.remove('-translate-x-full');
            previousSlide.classList.add('translate-x-0')
        }

    }

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

                    <div class="box-content w-full py-4 px-6">
                        <p class=" font-sans font-semibold text-3xl" >Luis Espinoza</p> <br />
                        <p>Full Stack Developer</p>
                        <p>Curiosity fueled the developer</p>

                        <div class="box-content w-auto p-4" >
                            <div class="box-content w-auto flex">
                                <Image
                                    src="/images/next-js_Logo.png"
                                    width={25}
                                    height={20}
                                    alt="Next.js Logo"
                                />
                                <p class="pl-2">Built with React framework, Next.js</p>
                            </div>
                            <div class="box-content w-auto flex">
                                <Image class="animate-pulse"
                                    src="/images/TailwindCSS.png"
                                    width={25}
                                    height={20}
                                    alt="Tailwind Logo"
                                />
                                <p class="pl-2">Customized using CSS framework, TailwindCSS</p>
                            </div>
                            <div class="box-content w-auto flex">
                                <Image
                                src="/images/Sneaker-icon.png"
                                width={25}
                                height={20}
                                alt="Sneaker"
                                />
                                <p class="pl-2">Sneakerhead: /ˈsnēkərˌhed/ "A sneaker enthusiast"</p>

                            </div>
                            <div class="box-content w-auto flex">
                                <FontAwesomeIcon style={{width: 30}} icon={faNode}/>
                                <p class="pl-2"> Powered by NodeJS </p>

                            </div>


                        </div>

                    </div>

                </div>
                <div class="box-content">
                    <p class="text-center text-4xl pb-5"> Projects </p>

                    <div class="relative overflow-hidden h-96">
                        <div class="absolute w-full h-full bg-white-500 text-white flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 transform translate-x-0 slide ">
                            <Image
                                src="/images/YHM.png"
                                width={800}
                                height={400}
                                alt="YHM"
                            />
                            <div class="box-content m-0 w-3/12">
                            <p class="text-black text-4xl text-center"> YHM </p>
                            <p class="text-black text-sm h-full pl-10 pt-10"> YourHarmoniousMind is a website a partner and I developed, deployed and maintained as a part of an apprenticeship at <a class="text-blue-500" href="https://www.slateimpact.com/"> Slate Impact </a>. The website was developed on React. I developed the search functionality, commenting on blogs functionality, integrated various APIs such as Google Maps, Google Geolocation, Google Autopopulate, and Google/Facebook SSO, and utilized many tools to help deploy and maintain the website. Said tools include, TravisCI (for continous integration), PostgresSQL, Headless CMS Srapi, and Amazon's many web tools, AWS, RDS, S3, EC2, etc. </p>
                            </div>
                        </div>


                        <div class='absolute w-full h-full bg-white-500 text-white flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 transform translate-x-full slide '>
                            <Image
                                src="/images/ColorFillGif.gif"
                                width={700}
                                height={400}
                                alt="ColorFill"

                            />
                            <div class="box-content m-0 w-3/12 pl-5" >
                            <p class="text-black text-4xl text-center"> ColorFill </p>
                            <p class="text-black text-sm h-full pt-5"> ColorFill is a coloring application that utalizes a color fill algorithm to fill in surrounding squares of the same color! Bonus features include, random color selector, color squares using click and drag to simulate using pencil, and modified fill (Fill only adjacent squares). See more on my  <a class="text-blue-500" target="_blank" href="https://github.com/lespinoza99">Github</a>! </p>
                            </div>
                        </div>


                        <div class='absolute w-full h-full bg-white-500 text-white flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 transform translate-x-full slide '>
                            <Image
                                src="/images/Portfolio.png"
                                width={800}
                                height={450}
                                alt="Portfolio"
                            />
                            <div class="box-content m-0 w-3/12">
                                <p class="text-black text-4xl text-center"> My Portfolio</p>
                                <p class="text-black text-sm h-full  pl-10 pt-4"> This portfolio is one of my most recent projects! So far it is being built with Next.js and TailwindCSS. I plan on showcasing more projects to this portfolio and will continue to add new features to make it more appealing to the eye. Check back frequently for more! for now, you can always connect with me on <a class="text-blue-500" target="_blank" href="https://www.linkedin.com/in/luis-espinoza99/">Linkedin</a> or follow me on <a class="text-blue-500" target="_blank" href="https://github.com/lespinoza99">Github</a> to keep up with me.</p>
                            </div>
                        </div>
                    </div>
                    <div class="box-content justify-between flex m-auto w-10/12">

                    <button class="w-16 h-10 border-2 rounded-2xl"  onClick={previousSlide} > &#x276E;</button>
                    <button class="w-16 h-10 rounded-2xl border-2" onClick={nextSlide}> &#x276F; </button>

                    </div>
                </div>
                <div class="box-content h-40 pt-16">
                <p>More Links</p>

                <div class="box-content flex justify-evenly">
                   
                        <li class="list-none text-blue-500"><a href="https://github.com/lespinoza99" target="_blank">Github </a> </li>
                        <li  class="list-none text-blue-500" ><a href="https://github.com/lespinoza99" target="_blank">Github </a></li>
                        <li class="list-none text-blue-500"> <a href="https://github.com/lespinoza99" target="_blank"> Github </a></li>
                   
                </div>


                </div>
            </div>
        </div>
    )
}


//onClick={ () => {event.target.classList.add('translate-x-full'), event.target.classList.remove('translate-x-0') }}