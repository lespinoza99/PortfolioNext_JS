import Image from 'next/image'


export default function Carousel() {

    
    //This function is used in our carousel. The function will look for the next element sibling and use tailwindcss' animations to animate the slides to the next slide
    function nextSlide() {
        let firstSlide = document.querySelector('.first')
        let secondSlide = document.querySelector('.second')
        let thirdSlide = document.querySelector('.third')
        let activeSlide = document.querySelector('.slide.translate-x-0');
        let nextSlide = activeSlide.nextElementSibling;

        if (nextSlide != null) {

            activeSlide.classList.remove('translate-x-0');
            activeSlide.classList.add('-translate-x-full')
        }

        if (nextSlide == null) {
            thirdSlide.classList.remove('translate-x-0')
            thirdSlide.classList.add('translate-x-full')

            secondSlide.classList.remove('-translate-x-full')
            secondSlide.classList.add('translate-x-full')

            firstSlide.classList.remove('-translate-x-full')
            firstSlide.classList.add('translate-x-0')
            
            
        }else{
            nextSlide.classList.remove('translate-x-full');
            nextSlide.classList.add('translate-x-0')
        }

    }

    //This is the second part to the carousel function, this function will go to the previous slide
    function previousSlide() {
        let firstSlide = document.querySelector('.first')
        let secondSlide = document.querySelector('.second')
        let thirdSlide = document.querySelector('.third')
        let activeSlide = document.querySelector('.slide.translate-x-0');
        let previousSlide = activeSlide.previousElementSibling;
        if (previousSlide != null) {
            
            activeSlide.classList.remove('translate-x-0');
            activeSlide.classList.add('translate-x-full')
        }

        if (previousSlide == null) {
        thirdSlide.classList.remove('translate-x-full')
        thirdSlide.classList.add('translate-x-0')

        secondSlide.classList.remove('translate-x-full')
        secondSlide.classList.add('-translate-x-full')

        
        firstSlide.classList.remove('translate-x-0')
        firstSlide.classList.add('-translate-x-full')

            
        }else{
            previousSlide.classList.remove('-translate-x-full');
            previousSlide.classList.add('translate-x-0')
        }

    }

    setInterval(function(){
        let firstSlide = document.querySelector('.first')
        let secondSlide = document.querySelector('.second')
        let thirdSlide = document.querySelector('.third')
        let activeSlide = document.querySelector('.slide.translate-x-0');
        let nextSlide = activeSlide.nextElementSibling;

        if (nextSlide != null) {

            activeSlide.classList.remove('translate-x-0');
            activeSlide.classList.add('-translate-x-full')
        }

        if (nextSlide == null) {
            thirdSlide.classList.remove('translate-x-0')
            thirdSlide.classList.add('translate-x-full')

            secondSlide.classList.remove('-translate-x-full')
            secondSlide.classList.add('translate-x-full')

            firstSlide.classList.remove('-translate-x-full')
            firstSlide.classList.add('translate-x-0')
            
            
        }else{
            nextSlide.classList.remove('translate-x-full');
            nextSlide.classList.add('translate-x-0')
        }

    },10000)
    
    //Todo
    //Add Flex Direction Column and add responsive sizing to description and image
    return (
        <div class="box-content">
            <p class="text-center text-4xl pb-5"> Projects </p>

            <div class=" relative overflow-hidden h-96">
                <div class="absolute w-full h-full bg-white-500 text-white flex items-center justify-center lg:flex-row text-5xl transition-all ease-in-out duration-1000 first transform translate-x-0 slide ">
                    <Image
                        src="/images/YHM.png"
                        width={800}
                        height={400}
                        alt="YHM"
                    />
                    <div class="box-content m-0 w-3/12">
                        <p class="text-black text-4xl text-center"> YHM </p>
                        <p class="text-black text-sm h-full sm:pl-10 sm:pt-10"> YourHarmoniousMind is a website a partner and I developed, deployed and maintained as a part of an apprenticeship at <a class="text-blue-500" href="https://www.slateimpact.com/"> Slate Impact </a>. The website was developed on React. I developed the search functionality, commenting on blogs functionality, integrated various APIs such as Google Maps, Google Geolocation, Google Autopopulate, and Google/Facebook SSO, and utilized many tools to help deploy and maintain the website. Said tools include, TravisCI (for continous integration), PostgresSQL, Headless CMS Srapi, and Amazon's many web tools, AWS, RDS, S3, EC2, etc. </p>
                    </div>
                </div>


                <div class='absolute w-full h-full bg-white-500 text-white flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 second transform translate-x-full slide '>
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


                <div class='absolute w-full h-full bg-white-500 text-white flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 third transform translate-x-full slide '>
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

                <button class="w-16 h-10 border-2 rounded-2xl" onClick={previousSlide} > &#x276E;</button>
                <button class="w-16 h-10 rounded-2xl border-2" onClick={nextSlide}> &#x276F; </button>

            </div>
        </div>
    )
}