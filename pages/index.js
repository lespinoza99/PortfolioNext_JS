import Head from 'next/head'
import Image from 'next/image'
import Layout, { siteTitle } from '../components/layout'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons"
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'


export default function Home( ){
return(
  <Layout >
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <section class="flex justify-center">
      <a href="https://www.linkedin.com/in/luis-espinoza99/" target="_blank"> <FontAwesomeIcon style={{height: 30}} icon={faLinkedin}/> </a>
      <a href="https://github.com/lespinoza99" target="_blank"> <FontAwesomeIcon style={{height: 30, padding: "0 10"}} icon={faGithubSquare}/> </a>
      <a href="/images/Luis_B_Espinoza_Resume.pdf" download> <FontAwesomeIcon style={{height: 30}} icon={faFileAlt} /> </a>
    </section>
  </Layout>
)

}