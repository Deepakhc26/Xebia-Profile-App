import React, { useState, useEffect } from "react" // highlight-line
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const Work = () => {
//  // Build Time Data Fetching
//  const gatsbyRepoData = useStaticQuery(graphql`
//  query {
//    github {
//      repository(name: "gatsby", owner: "gatsbyjs") {
//        id
//        nameWithOwner
//        url
//      }
//    }
//  }
// `)
// // Client-side Runtime Data Fetching
// const [starsCount, setStarsCount] = useState(0)
// useEffect(() => {
//  // get data from GitHub api
//  fetch(`https://api.github.com/repos/gatsbyjs/gatsby`)
//    .then(response => response.json()) // parse JSON from request
//    .then(resultData => {
//      setStarsCount(resultData.stargazers_count)
//    }) // set data for the number of stars
// }, [])


  return (
    <div className="about-blurb">
      <div className="container">
        <div className="inner-blurb">
          <div className="content">
            <h3>My GitHub Repo</h3>
              {/* <p>Just to demonstrate how dynamically we can fetch github repo data using API : </p>
              <p>My Gatsby repo -> {` `}
                <a href={gatsbyRepoData.github.repository.url}>
                  {gatsbyRepoData.github.repository.nameWithOwner}
                </a>
              </p> */}
              {/* <p>Runtime Data: Star count for the Gatsby repo {starsCount}</p> */}
              <div className="btn-row">
                <Link to="/"><span>&#8617;</span> Back</Link>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work