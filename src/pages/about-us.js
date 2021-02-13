import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/template/pages/about.css"
import Image from "../components/image"

export default () => {
    const page = useStaticQuery(graphql`
        query {
            wordpressAcfOptions {
                options {
                    social {
                        type
                        value
                    }
                }
            }
            wordpressPage(slug: {eq: "about-us"}) {
                title
                featured_media {
                    localFile {
                        childImageSharp {
                            fluid {
                                aspectRatio
                                base64
                                sizes
                                src
                                srcSet
                            }
                        }
                    }
                }
                content
                acf {
                    counters_page {
                        number
                        short_description
                    }
                    background {
                        localFile {
                            url
                            childImageSharp {
                                fluid {
                                    aspectRatio
                                    base64
                                    sizes
                                    src
                                    srcSet
                                }
                            }
                        }
                    }
                }
            }
            agts: allWordpressWpAgent (filter: {acf: {best: {eq: true}}}) {
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
	const path = require('path')
    const data = page.wordpressPage
    const { social } = page.wordpressAcfOptions.options
    const {background, counters_page} = data.acf
    // console.log(page)
    return (
        <>
        <Layout>
            <SEO title={data.title} />
            <section id="header-page" className="header-margin-base">
                <div className="skyline">
                <div data-offset="50" className="p1 parallax"></div>
                <div data-offset="25" className="p2 parallax"></div>
                <div data-offset="15" className="p3 parallax"></div>
                <div data-offset="8" className="p4 parallax"></div>
                <span className="cover"></span>
                <div className="container header-text">
                    <div><h1 className="title">About US</h1></div>
                    <div>
                        {/* <h2 className="sub-title">Lorem ipsum dolors adipiscing justo</h2> */}
                    </div>
                </div>
                </div>
                <div id="breadcrumb">
                <div className="container">
                    <ol className="breadcrumb">
                    <li>
                        <Link to="/"><i className="fa fa-home"></i></Link>
                    </li>
                    <li className="active">{data.title}</li>
                    </ol>
                </div>
                </div>
                <span className="cover"></span>
            </section>
            <section id="about-us">
                <div className="container">
                <div className="row">
                    <div className="col-md-12 director-image">
                        <Image data={data?.featured_media?.localFile} />
                    {/* <img
                        src="http://placehold.it/680x240/bbbbbb/ffffff"
                        alt="Image sample"
                        className="img-responsive center-block"
                    /> */}
                    </div>
                </div>
                </div>
                <div className="team juan">
                <div className="container">
                    <div className="row">
                    <div className="col-md-6 col-md-offset-3 agent director">
                        <div className="agent-box-card">
                        <div className="info-agent">
                            <span className="name">Dharam Vir</span>
                            <div className="text">
                                <div dangerouslySetInnerHTML={{ __html: data.content}} />
                            </div>
                            <ul className="contact">
                                { social.map((sc, i) => <SocialIcons item={sc} key={i} />)}
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                        {page?.agts?.edges ? (
                            page.agts.edges.map((agt, i) => <Agents item={agt} key={i} />)
                        ) : null}
                    </div>
                </div>
                <div id="counter">
                    <div className="container">
                        <div className="row">
                            
                        { counters_page ? (
                            counters_page.map((c, i) => (
                                <Counters item={c} key={i} />
                            ))
                        ) : null }
                           
                        </div>
                    </div>
                </div>
                </div>
                {/* <div id="contact" className="container">
                    <div className="section-detail">
                        <h1>Contact Us</h1>
                        <h2>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                        dolor, sagittis sed elementum dignissim.
                        </h2>
                    </div>
                </div> */}
            </section>
        </Layout>
        
        <Helmet>
            <style>{`
                #about-us .team.juan {
                    padding: 60px 0 0;
                    position: relative;
                    z-index: 1;
                    color: #ffffff;
                    border-top: 4px solid #fbd00f;
                    border-bottom: 4px solid #fbd00f;
                    margin-top: -20px;
                    background: url(${background.localFile.url});
                    background-size: cover;
                }
            `}</style>
                <script src={path.resolve('script/jquery.min.js')} />
                <script src={path.resolve('script/jquery-ui.min.js')} />
                <script src={path.resolve('script/bootstrap.min.js')} />
                <script src={path.resolve('script/vendor/mmenu/mmenu.min.all.js')} />
                <script src={path.resolve('script/vendor/animation-wow/wow.min.js')} />
                <script src={path.resolve('script/vendor/labelauty/labelauty.min.js')} />
                <script src={path.resolve('script/vendor/parallax/parallax.min.js')} />
                <script src={path.resolve('script/vendor/images-fill/imagesloaded.min.js')} />
                <script src={path.resolve('script/vendor/images-fill/imagefill.min.js')} />
                <script src={path.resolve('script/vendor/carousel/responsiveCarousel.min.js')} />
                <script src={path.resolve('script/vendor/skill-bars/custom.js')} />
                <script src={path.resolve('script/vendor/countTo/countTo.min.js')} />
                <script src={path.resolve('script/vendor/countTo/custom.js')} />
                <script src={path.resolve('script/custom.js')} />
                <script src={path.resolve('script/menu.js')} />
            </Helmet>
        </>
    )
}
export const SocialIcons = ({item}) => {
    // console.log('item', item)
    return(
        <li>
            <Link className="icon" to={`${item.type === 'envelope-o' ? `malito:` : ``}${item.value}`}>
                <i className={`fa fa-${item.type}`}></i>
            </Link>
        </li>
    )
}
export const Counters = ({item}) => {
    // console.log(item)
    const { number, short_description } = item
    return (
        <>
            <div className="col-md-3">
                <div className="counter-slide">
                    <span className="timer" data-to={number} data-from="0"></span>
                    <span className="type">{ short_description }</span>
                </div>
            </div>
        </>
    )
}

export const Agents = ({item}) => {
    const { node } = item
    // console.log(node)
    return (
        <div className="col-sm-6 col-md-3">
            <div className="agent-box-card rounded top-agent">
                <div className="image-content">
                    <div className="image image-fill">
                        <Image data={node?.featured_media?.localFile} />
                    </div>
                </div>
                <div className="info-agent">
                    <span className="name">{ node.title }</span>
                    <div className="text">
                    { node.acf.bio }
                    </div>
                    <ul className="contact">
                        {node?.acf?.social_agent ? (
                            node?.acf?.social_agent.map((sc, i) => <SocialIcons item={sc} key={i} />)
                        ): null}
                        <li><Link className="icon" to={`/agent/${node.slug}`}><i className="fa fa-info-circle"></i></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}