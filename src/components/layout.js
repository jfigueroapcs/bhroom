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
    <>
      <div id="page-container">
        <Header />
          <>{children}</>
        <Footer LogoFooter={data.LogoFooter} />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
