import { Link } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"

export default ({ project }) => {
    const { title, content,  butto, parallax } = project
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
            <Helmet>
                <style type="text/css">
                    {`
                        #submit-property {
                            background: url(${parallax.localFile.childImageSharp.fluid.src});
                            padding: 80px 0 140px;
                            position: relative;
                            color: #ffffff;
                        }
                    `}
                </style>
            </Helmet>
        </section>
    )
}