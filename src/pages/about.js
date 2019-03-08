import { graphql } from "gatsby"
import React from "react"
import HeroSection from "../components/Globals/HeroSection"
import Info from "../components/Home/Info"
import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  {
    img: file(relativePath: { eq: "about-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="about us"
      styleClass="about-background"
    />
    <Info />
  </Layout>
)

export default AboutPage
