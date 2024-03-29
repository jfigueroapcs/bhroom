import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Helmet from 'react-helmet'
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/vendor/fotorama/fotorama.css"
import "../styles/template/pages/property-page.css"
import Image from "../components/image"
// import "../styles/template/pages/property-page.css"

export default ( { pageContext } ) => {
    const datas = useStaticQuery(graphql`
        query ($agent: String){
            agt: allWordpressWpAgent(filter: {slug: {eq: $agent}}) {
                edges {
                  node {
                        title
                        slug
                        featured_media {
                            localFile {
                            childImageSharp {
                                fluid (maxWidth: 354, maxHeight: 250){
                                ...GatsbyImageSharpFluid
                                }
                            }
                            }
                        }
                        acf {
                            bio
                            social_agent {
                            type
                            value
                            }
                        }
                    }
                }
            }
            gallery: wordpressWpProperties(slug: {eq: "477-jersey-ave"}) {
                featured_media {
                    localFile {
                        url
                      childImageSharp {
                        fluid (maxWidth: 354, maxHeight: 250){
                          ...GatsbyImageSharpFluid
                          base64
                        }
                      }
                    }
                }
                acf {
                  gallery {
                    localFile {
                        url
                      childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                          base64
                        }
                      }
                    }
                  }
                }
              }
            allWordpressAcfOptions {
                edges {
                    node {
                        options {
                            details
                        }
                    }
                }
            }
        }
    `)
    
	const path = require('path')
    const { data } = pageContext
    const { details } = datas.allWordpressAcfOptions.edges[0].node.options
    // const agt = datas.agt.edges
    // const gallery = (datas.gallery !== null ? datas.gallery.acf.gallery : datas.gallery)
    const gallery = ((data.acf && data.acf.gallery !== null) ? data.acf.gallery : null)
    // console.log(data.acf?.gallery)
    // console.log(gallery)
    // console.log(datas.gallery.acf)
    // console.log(datas.gallery)
    // console.log(data.acf.agent_name.post_name)
    const agt = datas.agt.edges.filter(ag => {
        // console.log(ag.node.slug)
			return (ag.node.slug === data.acf.agent_name.post_name)
    })
    // console.log(agt[0].node.title)
    const detailOn = []

    details.forEach(( allDetail ) => {
        data.acf.details.forEach(( nDetail ) => {
            
            if(nDetail === allDetail){
                detailOn[allDetail] = { "label": allDetail, value: "fa fa-square" }
            }else{
                if(detailOn[allDetail]?.label){
                }else{
                    detailOn[allDetail] = { "label": allDetail, value: "fa fa-square-o" }
                }
            }

        })
    })
    const array = []
    for(const [ key, value ] of Object.entries(detailOn)){
        array.push({label: key, "value": value.value})
    }
    // console.log(data)
    
    return (
        <>
			<Layout>
				<SEO 
                    title={`property ${data.title} | ${data.acf.cities[0].value}`}
                    description={`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.`}
                    image={data?.featured_media?.localFile?.url}
                    article={false}
                />
                <section id="property-content" className="header-margin-dual-line">

                    <div className="container">
                        <div className="row">
                            <div className="col-md-9">
                                <span className="large-price">{ data.title }</span>
                                <div className="fotorama" data-width="100%" data-fit="cover" data-max-width="100%" data-nav="thumbs" data-transition="crossfade">
                                    <img src={data?.featured_media?.localFile?.url} alt={data.title} />
                                    {gallery?.map((img, i) => <img key={i} src={img?.localFile?.url}  alt={data.title}/>)}
                                </div>

                                <div className="row">
                                    
                                    <div className="col-md-12">

                                        <div className="section-title line-style">
                                            <h3 className="title">Description</h3>
                                        </div>
                                        <div className="description">
                                            <div dangerouslySetInnerHTML={{ __html: data.content}} />
                                        </div>

                                        {/* <div className="section-title line-style line-style">
                                            <h3 className="title">Property details</h3>
                                        </div>
                                        <div className="details">
                                            <div className="row">
                                                {
                                                    array.map((detail, i) => (
                                                            <div key={i} className="col-sm-4 col-xs-6">
                                                                <span className="detail">
                                                                    <i className={detail.value}></i> 
                                                                    { detail.label }
                                                                </span>
                                                            </div>
                                                        )
                                                    )
                                                }
                                            </div>
                                        </div> */}
                                        

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">

                                <div className="agent-box-card grey hidden-xs hidden-sm">
                                    <div className="image-content">
                                        <div className="image image-fill">
                                            <Image data={agt[0].node?.featured_media?.localFile}/>
                                        </div>						
                                    </div>
                                    <div className="info-agent">
                                        <span className="name"> { agt[0].node.title } </span>
                                        <div className="text">{ agt[0].node.acf.bio }</div>
                                        <ul className="contact">
                                            { agt[0].node?.acf.social_agent.map((sc, i) => (
                                                <li key={i}>
                                                    <Link className="icon" to={`${sc.type === 'envelope-o' ? `malito:` : ``}${sc.value}`}>
                                                        <i className={`fa fa-${sc.type}`}></i>
                                                    </Link>
                                                </li>
                                            ))}
                                            <li><Link className="icon" to={`/agent/${agt[0].node.slug}`}><i className="fa fa-info-circle"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="section-title line-style line-style">
                                    <h3 className="title">Property details</h3>
                                </div>
                                <div className="details">
                                    <div className="row">
                                        {
                                            array.map((detail, i) => (
                                                    <div key={i} className="col-sm-4 col-md-12 col-xs-6">
                                                        <span className="detail">
                                                            <i className={detail.value}></i> 
                                                            { detail.label }
                                                        </span>
                                                    </div>
                                                )
                                            )
                                        }
                                    </div>
                                </div>
                                

                            </div>
                            {/* <div className='col-md-12'>
                                <div className="section-title line-style">
                                    <h3 className="title">Find this property on map</h3>
                                </div>
                                <div className="map-container" id="map-canvas"></div>
                            </div> */}
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
				<script src={path.resolve('script/vendor/easydropdown/jquery.easydropdown.min.js')} async defer />
				<script src={path.resolve('script/vendor/fotorama/fotorama.min.js')} async defer />
				<script src={path.resolve('script/vendor/noui-slider/nouislider.all.min.js')} async defer />
				<script src={path.resolve('script/vendor/carousel/responsiveCarousel.min.js')} async defer />
				<script src={path.resolve('script/custom.js')} async defer />
                <script src={path.resolve('script/menu.js')} async defer />
                {/* <script	src="http://maps.google.com/maps/api/js?sensor=false" async defer />
				<script src={path.resolve('script/map.js')} /> async defer */}
                
			</Helmet>
        </>
    )
}


