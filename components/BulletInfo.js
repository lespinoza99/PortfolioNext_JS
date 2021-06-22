import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNode } from "@fortawesome/free-brands-svg-icons"
import React, { useState, useEffect } from 'react'
import ModalComp from './Modal'

export default function Bullets() {
    const [ Modal, setModal ] = useState(false)
    const [ Header, setHeader ] = useState('')
    const [ Body, setBody ] = useState('')
    //Setting the "Header" and "Body" value to be passed to our modal using props
    const modalToggle = (e) => {
        setModal(!Modal)
        setBody(e.currentTarget.innerHTML)
        setHeader(e.target.id)
    }
    return (
        <div class="sm:box-content w-full py-4 px-6">
            <p class=" font-sans font-semibold text-3xl" >Luis Espinoza</p> <br />
            <p>Full Stack Developer</p>
            <p>Curiosity fueled the developer</p>

            <div class="box-content w-auto sm:p-4" >
                <div class="box-content w-auto flex">
                    <img style={{ maxHeight: '1.5rem' }}
                        class="h-6 w-6 "
                        src="/images/next-js_Logo.png"
                        alt="Next.js Logo"
                    />
                    <p id="NextJS" onClick={modalToggle} class="pl-2 cursor-pointer ">Built with React framework, Next.js</p>
                </div>
                <div class="box-content w-auto flex  ">
                    <img style={{ maxHeight: '1.5rem' }}
                        class="animate-pulse w-6 h-5"
                        src="/images/TailwindCSS.png"
                        alt="Tailwind Logo"
                    />
                    <p id="TailwindCSS" onClick={modalToggle} class="pl-2 cursor-pointer">Customized using CSS framework, TailwindCSS</p>
                </div>
                <div class="box-content w-auto flex">
                    <img style={{ maxHeight: '1.5rem' }}
                        class="h-5 w-6"
                        src="/images/Sneaker-icon.png"
                        alt="Sneaker"
                    />
                    <p id="Sneakerhead" onClick={modalToggle} class="pl-2 cursor-pointer">Sneakerhead: /ˈsnēkərˌhed/ "A sneaker enthusiast"</p>

                </div>
                <div class="box-content w-auto flex">
                    <FontAwesomeIcon style={{ width: 30, height: 30 }} icon={faNode} />
                    <p id="NodeJS" onClick={modalToggle} class="pl-2 cursor-pointer"> Powered by NodeJS </p>

                </div>


            </div>
            {
            //Conditionally rendering the modal once the user clcks on a bullet point
            //Passing the toggle function allows us to close the modal from the child component "ModalComp"
            Modal ?
                <ModalComp header={Header} body={ Body } toggle={ modalToggle }/>
                :
                ''
            }

        </div>

    )
}