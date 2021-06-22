
export default function ModalComp({ header, body, toggle }) {



    return(
        <div class=' animate-fadeIn fixed inset-0 z-50 overflow-auto bg-black-dark flex' >

                    <div style={{ background: 'white' }} class=' animate-fadeInUp fixed shadow-inner bottom-0 inset-x-0 align-top justify-end md:justify-center md:rounded md:h-auto md:shadow md:relative p-8 w-full max-w-md m-auto flex-col flex'>
                        <h2 class='text-4xl text-center md:leading-loose text-grey md:mt-8 mb-4'> { header } </h2>
                        <p class='text-xl leading-normal mb-8 text-center'> { body } </p>
                        <span onClick={toggle} class='cursor-pointer absolute top-0 bottom-0 right-0 p-2 h-3.5'> 
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class='h-12 w-12 transform rotate-45 hover:scale-110 transition duration-300 opacity-60 hover:opacity-100'> <title>Close</title>  <path class="secondary" fillRule="evenodd" d="M17 11a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4h4z"/></svg>
                        </span>
                    </div>
                </div>
    )
}

