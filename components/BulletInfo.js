import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faNode } from "@fortawesome/free-brands-svg-icons"

export default function Bullets() {
    return (
        <div class="sm:box-content w-full py-4 px-6">
            <p class=" font-sans font-semibold text-3xl" >Luis Espinoza</p> <br />
            <p>Full Stack Developer</p>
            <p>Curiosity fueled the developer</p>

            <div class="box-content w-auto sm:p-4" >
                <div class="box-content w-auto flex">
                    <img class=" h-6 w-6 "
                        src="/images/next-js_Logo.png"
                        alt="Next.js Logo"
                    />
                    <p class="pl-2">Built with React framework, Next.js</p>
                </div>
                <div class="box-content w-auto flex  ">
                    <img class="animate-pulse w-6 h-5"
                        src="/images/TailwindCSS.png"
                        alt="Tailwind Logo"
                    />
                    <p class="pl-2">Customized using CSS framework, TailwindCSS</p>
                </div>
                <div class="box-content w-auto flex">
                    <img class=" h-5 w-6 "
                        src="/images/Sneaker-icon.png"
                        alt="Sneaker"
                    />
                    <p class="pl-2">Sneakerhead: /ˈsnēkərˌhed/ "A sneaker enthusiast"</p>

                </div>
                <div class="box-content w-auto flex">
                    <FontAwesomeIcon style={{ width: 30, height: 30 }} icon={faNode} />
                    <p class="pl-2"> Powered by NodeJS </p>

                </div>


            </div>

        </div>

    )
}