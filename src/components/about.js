import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      cont: file(relativePath: { eq: "cont.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      prog: file(relativePath: { eq: "prog.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="about-blurb"  id="scroll">
      <div className="container">
        <div className="inner-blurb">
          <div className="content">
            <h3>Somthing about me</h3>
            <p>
            I think like a designer and i want code like a pro. 
            I have 5+ years of experience in developing software application for enterprise. 
            I use <strong>HTML, CSS, JS, ReactJS</strong> and <strong>NodeJS</strong> as a tool to craft my work.
            </p>
            <h3>Crazy for computer games</h3>
            <p>I am not a pro gamer but i love to play whenever i am free. I am a big fan of call of duty and crysis.</p>           
          </div>
          <div className="images">
            <div className="top-right">
              <Img fluid={data.prog.childImageSharp.fluid} />
            </div>
            <div className="bottom-left">
              <Img fluid={data.cont.childImageSharp.fluid} />
            </div>
          </div>
        </div>
      </div>
      <div className="black-box"></div>
      <div className="black-box overlay"></div>
    </div>
  )
}

export default About