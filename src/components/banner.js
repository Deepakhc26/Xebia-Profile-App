import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      gatsby_top: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gatsby_mid: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gatsby_bot: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="side-image left">
            <Img fluid={data.gatsby_top.childImageSharp.fluid} />
          </div>
          <div className="main-text">I'm Deepak</div>
          <div className="main-image">
            <Img fluid={data.gatsby_mid.childImageSharp.fluid} />
          </div>
          <div className="side-image right">
            <Img fluid={data.gatsby_bot.childImageSharp.fluid} />
          </div>
        </div>
        <hr/>
      </div>
      <div className="fixed-misc">I Love Coding and Design</div>
    </div>
  )
}

export default Banner