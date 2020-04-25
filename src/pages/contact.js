import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

const Contact = () => { 
  return (
    <div className="about-blurb">
      <div className="container">
        <div className="inner-blurb">
          <div className="content">
            <h3>Contact Me</h3>
            <p>
            #731/1, Hebbal 1st Stage, 3rd Cross, <br/>
            Basaveshwar Nagar, Mysore, 
            KA, <br/> 
            India - 570016 <br/><br/>         
            <strong>Mobile :</strong> (+91) 7019506097 <br/>
            <strong>Email :</strong> deepakhc0309@gmail.com <br/>
            </p>
            <div className="btn-row">
              <Link to="/"><span>&#8617;</span> Back</Link>
            </div>
          </div>
        </div>
      </div>     
    </div>
  )
}

export default Contact