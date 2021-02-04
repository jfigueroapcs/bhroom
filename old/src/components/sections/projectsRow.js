import { Link } from "gatsby"
import React from "react"

const Project = ({ project }) => {
    const { title, content,  butto } = project
  return (
    <section id="submit-property" data-parallax-speed="0">
        <span className="overlay"></span>
        <div className="container">
            <div className="section-detail">
                <h1>{ title }</h1>
                <h2>{ content }</h2>
            </div>
            <div className="row text-center">
                <a
                    href="/properties"
                    className="btn btn-reverse button-large"
                >
                    { butto }
                </a>
            </div>
        </div>
        </section>
  )
}

export default Project