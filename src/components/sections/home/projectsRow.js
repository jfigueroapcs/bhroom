import { Link } from "gatsby"
import React from "react"

export default ({ project }) => {
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
                    <Link
                        to="/properties"
                        className="btn btn-reverse button-large"
                    >
                        { butto }
                    </Link>
                </div>
            </div>
        </section>
    )
}