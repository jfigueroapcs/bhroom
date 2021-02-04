
import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"

const Figure = ({ img }) => {
  return (
    <figure
      className="crsl-item"
      data-image={img.image.source_url}
    >
      <div className="container slider-box">
        <div className="content"><h2>{img.texts[0].value}</h2></div>
        <div className="content"><h1>{img.texts[1].value}</h1></div>
        <div className="content"><h3>{img.texts[2].value}</h3></div>
      </div>
    </figure>
  )
}


const Slider = ({ newBanners }) => {
  return (
      <section id="home-slide" className="header-margin-dual-line">
        <div className="home-slider carousel" data-navigation=".home-slider-nav">
          <div className="crsl-wrap">
            {newBanners.map((i, index) => 
              <Figure img={i}  key={index} />  
            )}
          </div>
          <p className="home-slider-nav previus">
            <Link to="#" className="previous">previous</Link>
          </p>
          <p className="home-slider-nav next">
            <Link to="#" className="next">next</Link>
          </p>
        </div>
      </section>
  )
}

export default Slider