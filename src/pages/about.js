import * as React from "react"
import { graphql } from "gatsby"

import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/Reuseable/HeroSection'
import Infoblock from '../components/Reuseable/infoblock'
import DualInfoblock from '../components/Reuseable/DualInfoblock'
import Teamphotosection from '../components/About/Teamphotosection'

const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
    img={data.img.childImageSharp.fluid}  
    title="About LearnCode Online "
    subtitle=""
    heroclass="about-background"/>
    <DualInfoblock heading="A message from CEO"/>
    <Infoblock heading="About Vision"/>
    <Teamphotosection/>
    
  </Layout>
)

export const query = graphql`
{
	img: file(relativePath: {eq: "about.png"}){
			childImageSharp {
				fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
  }
}
`

export default AboutPage
