import React from 'react'
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import "../styles/template/navbar.css"

export default () => {
    const Logo = useStaticQuery(graphql`
      query Logo {
        Logo: file(relativePath: { eq: "logo.png" }){
          childImageSharp{
            fluid(maxWidth: 210){
            ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)
    // console.log(Logo.Logo)
    return(
        <header className="menu-dual-line" id="header-container-box">
            <div className="info">
                <div className="container">
                    <div className="row">
                    <div className="col-md-6">
                        <a id="mobile-menu-button" href="#mobile-menu" className="visible-xs">
                        <i className="fa fa-bars"></i>
                        </a>
                        <a className="hidden-xs" href="call:1-800-555-1234">
                        <i className="icon fa fa-phone"></i> (011)-8800-555
                        </a>
                        <Link
                        className="hidden-xs"
                        data-section="modal-contact"
                        data-target="#modal-contact"
                        data-toggle="modal"
                        to="#"
                        >
                            <i className="icon fa fa-envelope-o"></i> Info
                            </Link>
                    </div>
                    </div>
                </div>
            </div>
            <div className="container hidden-xs" id="menu-nav">
                <div className="logo">
                    <Link to="/" id="logo-header" style={{width: 209, display: 'block'}}>
                    {/* <Image  data={Logo.Logo} clas="" /> */}
                    <Img fluid={Logo.Logo.childImageSharp.fluid} loading={`auto`} />
                    </Link>
                </div>
                <nav id="navigation">
                    <ul>
                    <li><Link to="/about-us">About</Link></li>
                    <li><Link to="/properties">Properties</Link></li>
                    <li><Link to="/agents">Agents</Link></li>
                    <li><Link to="/">FAQ</Link></li>
                    <li><Link to="/">Contact</Link></li> 
                    </ul>
                </nav>
            </div>
      </header>
    )
}