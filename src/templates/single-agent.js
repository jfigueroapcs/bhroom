import { Link, graphql } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/template/pages/home.css"
import "../styles/template/info-box.css"
import Image from "../components/image"
export const query = graphql`
    query Agent ($slug: String) {
        Agent: wordpressWpAgent(slug: {eq: $slug}) {
            id
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
        Properties: allWordpressWpProperties(
            filter: {
                acf: {
                    agent_name: {
                        post_name: {eq: $slug}
                    }
                }
            }){
            edges {
                node {
                id
                title
                slug
                featured_media {
                    localFile {
                    childImageSharp {
                        fluid(maxWidth: 354, maxHeight: 250) {
                        ...GatsbyImageSharpFluid
                        }
                    }
                    }
                }
                categories {
                    name
                    id
                }
                acf {
                    description
                    details
                    location
                    location_longitud
                    location_latitude
                    characteristics_properties {
                    value
                    type
                    }
                    cities {
                    value
                    label
                    }
                    purpose {
                    value
                    label
                    }
                    type {
                    label
                    value
                    }
                    status {
                    label
                    value
                    }
                    bathroom {
                    value
                    label
                    }
                    bedroom {
                    value
                    label
                    }
                }
                }
            }
        }
    }
`

export default ( { data } ) => {
	const path = require('path')
    const { Agent, Properties } = data
    // console.log(Agent)
    // console.log(Properties)
    // console.log(data.slug)
    

    return (
        <>
        
            <Layout>
                <SEO title={ Agent.title } />
                <section id="header-page" className="header-margin-base">
                    <div className="skyline">
                        <div data-offset="50" className="p1 parallax"></div>
                        <div data-offset="25" className="p2 parallax"></div>
                        <div data-offset="15" className="p3 parallax"></div>
                        <div data-offset="8"  className="p4 parallax"></div>
                        <span className="cover"></span>
                        <div className="container header-text">
                            <div><h1 className="title">{ Agent.title }</h1></div>
                            {/* <div><h2 className="sub-title">Lorem ipsum sectetur ats adipiscing elit justo</h2></div> */}
                        </div>
                    </div>
                    <div id="breadcrumb">
                        <div className="container">
                            <ol className="breadcrumb">
                                <li><Link to="/"><i className="fa fa-home"></i></Link></li>
                                <li><Link to="/agents">Agents lists</Link></li>
                                <li className="active">{ Agent.title }</li>
                            </ol>
                        </div>
                    </div>
                    <span className="cover"></span>
                </section>
                <section id="agent-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-sm-8 col-md-8 col-sm-push-4">
                                        <h1 className="name"> 
                                            {Agent.title}
                                        </h1>
                                        <div dangerouslySetInnerHTML={{ __html: Agent.content}} />
                                        
                                        <div className="skill-box">
                                            {Agent.acf.skill_agent.map((sk, i) => (
                                                <div key={i} className="skillbar" data-percent={`${ sk.value }%`}>
                                                    <div className="skillbar-title"><span>{ sk.name }</span></div>
                                                    <div className="skillbar-bar"></div>
                                                    <div className="skill-bar-percent">{ sk.value }%</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="col-sm-4 col-md-4 col-sm-pull-8">
                                        <div className="agent-box-card grey">
                                            <div className="image-content">
                                                <div className="image image-fill">
                                                    <Image data={Agent?.featured_media?.localFile} />
                                                </div>						
                                            </div>
                                            <div className="info-agent">
                                                <div className="text">
                                                    <i className="fa fa-quote-left"></i> { Agent.acf.bio } <i className="fa fa-quote-right"></i>
                                                </div>
                                                <ul className="contact">
                                                    { Agent.acf.social_agent.map((sc, i) => (
                                                        <li key={i}>
                                                            <Link className="icon" to={`${sc.type === 'envelope-o' ? `malito:` : ``}${sc.value}`}>
                                                                <i className={`fa fa-${sc.type}`}></i>
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="section-title line-style no-margin">
                            <h3 className="title">My Properties</h3>
                        </div>

                        <div className="my-property" data-navigation=".my-property-nav">
                            <div className="crsl-wrap">
                                {Properties.edges.map((pr,i)=> (
                                    <figure key={i} className="crsl-item">
                                        <div className="box-ads-juan box-grid">
                                            <Link 
                                                className="hover-effect image image-fill"
                                                to={`/property/${pr.node.slug}`}
                                            >
                                                <span className="cover"></span>
                                                <Image
                                                    data={pr.node.featured_media.localFile}
                                                    // alt="Gatsby Docs are awesome"
                                                    clas="img-responsive"
                                                />
                                                {/* <img alt="Sample images" src="http://placehold.it/1240x745/bbbbbb/ffffff" /> */}
                                                <h3 className="title">{ pr.node.title }</h3>
                                            </Link>
                                            <span className="price"></span>
                                            <span className="address"><i className="fa fa-map-marker"></i> {pr.node.acf.location}</span>
                                            <span className="description">{pr.node.acf.description}</span>
                                            <dl className="detail">
                                                {pr.node.acf.characteristics_properties.map((cha, index) => 
                                                    <div key={`${pr.node.id}-${index}`}>
                                                    <dt className={cha.type}>{cha.type}:</dt>
                                                    <dd><span>{cha.value}</span></dd>
                                                    </div>
                                                )}
                                            </dl>
                                            <div className="footer">
                                                <Link className="btn btn-default" to={`/property/${pr.node.slug}`}>Read now</Link>
                                            </div>
                                        </div>
                                    </figure>
                                ))}
                                
                            </div>

                            <div className="my-property-nav">
                                <p className="button-container">
                                    <Link to="#" className="next">next</Link>
                                    <Link to="#" className="previous">previous</Link>
                                </p>
                            </div>

                        </div>

                    </div>
                </section>
            </Layout>
            <Helmet>
                <style>{`
                    .agent-box-card .info-agent .contact li {
                        width: 25%;
                    }
                `}</style>
                <script src={path.resolve('script/jquery.min.js')} async defer />
                <script src={path.resolve('script/jquery-ui.min.js')} async defer />
                <script src={path.resolve('script/bootstrap.min.js')} async defer />
                <script src={path.resolve('script/vendor/mmenu/mmenu.min.all.js')} async defer />
                <script src={path.resolve('script/vendor/animation-wow/wow.min.js')} async defer />
                <script src={path.resolve('script/vendor/labelauty/labelauty.min.js')} async defer />
                <script src={path.resolve('script/vendor/parallax/parallax.min.js')} async defer />
                <script src={path.resolve('script/vendor/images-fill/imagesloaded.min.js')} async defer />
                <script src={path.resolve('script/vendor/images-fill/imagefill.min.js')} async defer />
                <script src={path.resolve('script/vendor/easydropdown/jquery.easydropdown.min.js')} async defer />
                <script src={path.resolve('script/vendor/carousel/responsiveCarousel.min.js')} async defer />
                {/* <script src={path.resolve('script/vendor/noui-slider/nouislider.all.min.js')} /> async defer */}
                <script src={path.resolve('script/vendor/skill-bars/custom.js')} async defer />
                <script src={path.resolve('script/custom.js')} async defer />
                <script src={path.resolve('script/menu.js')} async defer />
                <script src={path.resolve('script/singleAgent.js')} async defer />

                
            </Helmet>
        </>
    )
}




