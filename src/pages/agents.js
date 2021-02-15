import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import Agent from "../components/sections/agents/agent"
import SEO from "../components/seo"

export default () => {
	const path = require('path')
    // console.log(data)
    const data = useStaticQuery(graphql`
    query Agemts {
		allWordpressWpAgent {
            edges {
              node {
                title
                content
                slug
                acf {
                  best
                  bio
                  social_agent {
                    type
                    value
                  }
                  skill_agent {
                    name
                    value
                  }
                }
                featured_media {
                  localFile {
                    childImageSharp {
                      fluid {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
        }
      }
    `)
    return (
        <>
            <Layout>
                <SEO title="Agentsthe properties" />
                <section id="header-page" className="header-margin-base">
                    <div className="skyline">
                        <div data-offset="50" className="p1 parallax"></div>
                        <div data-offset="25" className="p2 parallax"></div>
                        <div data-offset="15" className="p3 parallax"></div>
                        <div data-offset="8"  className="p4 parallax"></div>
                        <span className="cover"></span>
                        <div className="container header-text">
                            <div><h1 className="title">Agents list</h1></div>
                            <div><h2 className="sub-title">Lorem ipsum sectetur ats adipiscing elit justo</h2></div>
                        </div>
                    </div>
                    <div id="breadcrumb">
                        <div className="container">
                            <ol className="breadcrumb">
                                <li><Link to="/"><i className="fa fa-home"></i></Link></li>
                                <li className="active">Agents lists</li>
                            </ol>
                        </div>
                    </div>
                    <span className="cover"></span>
                </section>
                <section id="agent-list">
                    <div className="section-detail">
                        <h1>Agents list</h1>
                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dolor, sagittis sed elementum dignissim.</h2>		
                    </div>
                    <div className="container">
                        <div className="row">
                            {data.allWordpressWpAgent.edges.map( (agt, index) => 
                                <Agent
                                    key={index}
                                    agt={agt}
                                />
                            )}
                        </div>
                    </div>
                </section>
            </Layout>
            <Helmet>
                <script src={path.resolve('script/jquery.min.js')} async defer />
                <script src={path.resolve('script/jquery-ui.min.js')} async defer />
                <script src={path.resolve('script/bootstrap.min.js')} async defer />
                <script src={path.resolve('script/vendor/mmenu/mmenu.min.all.js')} async defer />
                <script src={path.resolve('script/vendor/animation-wow/wow.min.js')} async defer />
                <script src={path.resolve('script/vendor/labelauty/labelauty.min.js')} async defer />
                <script src={path.resolve('script/vendor/parallax/parallax.min.js')} async defer />
                <script src={path.resolve('script/vendor/images-fill/imagesloaded.min.js')} async defer />
                <script src={path.resolve('script/vendor/images-fill/imagefill.min.js')} async defer />
                <script src={path.resolve('script/menu.js')} async defer />
                {/* <script src={path.resolve('script/vendor/carousel/responsiveCarousel.min.js')} /> async defer */}
                {/* <script src={path.resolve('script/custom.js')} /> async defer */}
            </Helmet>
        </>
    )
}


