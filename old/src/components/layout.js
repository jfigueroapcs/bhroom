import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children, siteTitle }) => {
  const data = useStaticQuery(graphql`
  query MyQuery2 {
    site {
      siteMetadata {
        title
      }
    }
    LogoFooter: file(relativePath: { eq: "mini-logo-x1.png" }){
      childImageSharp{
        fluid(maxWidth: 26){
        ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)
  return (
    <div id="page-container">
      <Header siteTitle={`${data.site.siteMetadata?.title}` || `Title`} />
        <>{children}</>
        <Footer LogoFooter={data.LogoFooter} />
        {/* <footer id="footer-page" className="section-color" style={{
          marginTop: `2rem`
        }}>
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-3">
                <span className="title with-icon">
                  <Image data={data.LogoFooter} clas="logo-footer" />
                  Shortly About Us
                </span>
                <span className="text">
                  There are many variations of passages of Lorem Ipsum available,
                  but the majority have suffered alteration inble. If you are of
                  going.
                </span>
              </div>
              <div className="col-sm-6 col-md-3">
                <span className="title">CALL US NOW</span>
                <span className="phone">
                  <i className="fa fa-phone"></i> (011)-8800-555</span>
                <span className="address"> </span>
                339 Broadway Ave, <strong>New York</strong><br />
                <i className="fa fa-map-marker"></i> NY 10013, USA
              </div>
              <div className="hidden-xs hidden-sm col-md-3">
                <span className="title">Sections</span>
                <ul className="link-extra">
                  <li><Link to="#">Properties</Link></li>
                  <li><Link to="#">Agents</Link></li>
                  <li><Link to="#">Contact</Link></li>
                  <li><Link to="#">FAQ</Link></li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-3">
                <span className="title">Our Newsletter</span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                eu condimentum neque.
                <div className="newsletter-box">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your email"
                  />
                  <button className="btn btn-default send" type="button">
                    <i className="fa fa-envelope-o"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="credits">
            <div className="container">
              <div className="row">
                <div className="hidden-xs col-md-6 credits-text">

                  Copyright © {new Date().getFullYear()} <b>Bhoomimantra</b> | All Rights Reserved | IT RUBIK
                </div>
                <div className="col-md-6">
                  <ul className="social-icons">
                    <li>
                      <a href="#"><i className="fa fa-facebook"></i></a>
                    </li>
                    <li>
                      <a href="#"><i className="fa fa-twitter"></i></a>
                    </li>
                    <li>
                      <a href="#"><i className="fa fa-google-plus"></i></a>
                    </li>
                    <li>
                      <a href="#"><i className="fa fa-linkedin"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer> */}
        {/* <div className="modal fade login-modal" tabindex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog">
            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
              <i className="fa fa-close"></i>
            </button>
            <div className="login-button-container">
              <a href="#" data-section="login"><i className="fa fa-user"></i></a>
              <a href="#" data-section="sign-in"><i className="fa fa-pencil-square-o"></i></a>
              <a href="#" data-section="recovery"><i className="fa fa-lock"></i></a>
              <a href="#" data-section="setting"><i className="fa fa-cog"></i></a>
            </div>
          </div>
        </div> */}
        {/* <div  className="modal fade"  id="modal-contact"  tabindex="-1"  role="dialog"  aria-hidden="true">
          <div className="modal-dialog">
            <button  type="button"  className="close"  data-dismiss="modal"  aria-hidden="true">
              <i className="fa fa-close"></i>
            </button>

            <div className="form-container full-fixed">
              <form method="post" action="#">
                <div id="form-modal-contact" className="box active modal-contact">
                  <h2 className="title">How can we help?</h2>
                  <h3 className="sub-title">
                    Please send us your thoughts by filling out the below form.
                    Comments are solely for internal use. Your address will not be
                    shared with outside parties or used for any other purpose than
                    to respond to your comments.
                  </h3>
                  <ul className="object-contact">
                    <li>
                      <a href="#"><i className="fa fa-code"></i>Suggestion</a>
                    </li>
                    <li>
                      <a href="#"><i className="fa fa-question"></i>Question</a>
                    </li>
                    <li>
                      <a href="#" className="active">
                        <i className="fa fa-bug"></i>Problems</a>
                    </li>
                    <li>
                      <a href="#"><i className="fa fa-comment-o"></i>Feedback</a>
                    </li>
                  </ul>
                  <div className="field">
                    <textarea  className="form-control"  name="message"  id="message"  placeholder="Your message"></textarea>
                  </div>
                  <div className="field">
                    <input  id="short-summary"  className="form-control"  type="text"  name="short-summary"  placeholder="Short summary"/>
                    <i className="fa fa-tag"></i>
                  </div>
                  <div className="field">
                    <input  id="email-help"  className="form-control"  type="text"  name="email-help"  placeholder="Your email"/>
                    <i className="fa fa-envelope-o"></i>
                  </div>
                  <div className="field footer-form text-right">
                    <button type="button" className="btn btn-reverse button-form">
                      Cancel
                    </button>
                    <button type="button" className="btn btn-default button-form">
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div> */}


          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
