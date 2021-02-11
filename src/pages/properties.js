import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import * as queryString from "query-string"
import Helmet from 'react-helmet'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Property from '../components/sections/properties/property'
import SearchBox from "../components/sections/properties/searchBox"

export const newProperts = (propers, filtros) => {
	// return filtros
	// return propers.filter(nP => (
	// 	nP.node.acf.cities[0].value === filtros.city
	// 	&& nP.node.acf.purpose[0].value === filtros.purpose 
	// 	&& nP.node.acf.type[0].value === filtros.type 
	// 	&& nP.node.acf.status[0].value === filtros.status 
	// ))
	var ps = propers
	if(filtros?.city){
		ps =  ps.filter(nP => {
			return (nP.node.acf.cities[0].value === filtros.city)
		})
	}
	if(filtros?.purpose){
		ps =  ps.filter(nP => {
			return (nP.node.acf.purpose[0].value === filtros.purpose)
		})
	}
	if(filtros?.type){
		ps =  ps.filter(nP => {
			return (nP.node.acf.type[0].value === filtros.type)
		})
	}
	if(filtros?.status){
		ps =  ps.filter(nP => {
			return (nP.node.acf.status[0].value === filtros.status)
		})
	}
	if(filtros?.bathroom){
		ps =  ps.filter(nP => {
			return (nP.node.acf.bathroom[0].value === filtros.bathroom)
		})
	}
	if(filtros?.bedroom){
		ps =  ps.filter(nP => {
			return (nP.node.acf.bedroom[0].value === filtros.bedroom)
		})
	}
	if(!ps[0]?.node){
		console.log('Property not found')
	}
	// console.log(ps)
	if(!ps[0]?.node){
		return true
	}
	return ps
}

export const Base = ({ data, pros, children, defaults }) => {
	const path = require('path')
	// console.log(defaults)
	const newDwfauls = {}
	if(defaults?.city){
		newDwfauls.cities = [{value: defaults.city,  label : defaults.city}]
	}
	if(defaults?.purpose){
		newDwfauls.purpose = [{value: defaults.purpose,  label : defaults.purpose}]
	}
	if(defaults?.type){
		newDwfauls.type = [{value: defaults.type,  label : defaults.type}]
	}
	if(defaults?.status){
		newDwfauls.status = [{value: defaults.status,  label : defaults.status}]
	}
	// console.log(newDwfauls)
	return (
		<>
			<Layout>
				<SEO title="Propieties" />
				<section id="header-page" className="header-margin-base">
					<div className="skyline">
					<div data-offset="50" className="p1 parallax"></div>
					<div data-offset="25" className="p2 parallax"></div>
					<div data-offset="15" className="p3 parallax"></div>
					<div data-offset="8" className="p4 parallax"></div>
					<span className="cover"></span>
						<div className="container header-text">
							<div><h1 className="title">Grid left column</h1></div>
							<div><h2 className="sub-title">Lorem ipsum dolor dipiscing elit justo</h2></div>
						</div>
					</div>
					<div id="breadcrumb">
						<div className="container">
							<ol className="breadcrumb">
							<li>
								<Link to="#"><i className="fa fa-home"></i></Link>
							</li>
							<li><Link to="#">Property</Link></li>
							{/* <li className="active">Grid left column</li> */}
							</ol>
						</div>
					</div>
					<span className="cover"></span>
				</section>
				<section id="grid-content">
					<div className="container">
						<div className="row">
							<div className="col-sm-8 col-md-9 col-md-push-3 col-sm-push-4">
							<div className="row">
								{
									children
									// prs?.map((p, index) => {
									// // city
										
									// 	return (<Property
									// 		key={index}
									// 		pr={p}
									// 		cls="box-grid"
									// 		col="col-sm-6 col-md-4"
									// 	/>)
									// })
								}
								{/* <div className="col-sm-6 col-md-4 msjnone">
									<div className="box-ads-juan box-grid" >
										<span className="address" style={{textAlign: 'center'}}>
											Property not found
										</span>
									</div>
								</div>  */}
							</div>
							</div>
							<div className="col-sm-4 col-md-3 col-md-pull-9 col-sm-pull-8">
							<div className="section-title line-style">
								<h3 className="title">Search Box</h3>
							</div>
								<SearchBox 
									ciudades={ data.allWordpressAcfOptions.edges[0].node.options.cities }
									purposes={ data.allWordpressAcfOptions.edges[0].node.options.purpose }
									types={ data.allWordpressAcfOptions.edges[0].node.options.type }
									statuses={ data.allWordpressAcfOptions.edges[0].node.options.status }
									bathrooms={ data.allWordpressAcfOptions.edges[0].node.options.bathroom }
									bedrooms={ data.allWordpressAcfOptions.edges[0].node.options.bedroom }
									props={pros}
									defaults={newDwfauls}
								/>
							</div>
						</div>
					</div>
				</section>
			</Layout>
			
			<Helmet>
				<style type="text/css">
					{`
						.msjnone {
							position: absolute;
							z-index: -1;
							background: white;
						}
					`}
				</style>
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
				<script src={path.resolve('script/custom.js')} />
			</Helmet>
		</>
	)
}

export default (props) => {
    const data = useStaticQuery(graphql`
    query MyQueryQ {
		allWordpressAcfOptions {
			edges {
			  node {
				options {
				  title
				  content
				  butto
				  slogan
				  banners {
					texts {
					  value
					}
					image {
					  id
					  source_url
					}
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
					value
					label
				  }
				  status {
					value
					label
				  }
				  bathroom {
					value
					label
				  }
				  bedroom {
					value
					label
				  }
				  services {
					  icon
					  title
					  text
				  }
				  testimonials {
					full_name
					address
					age
					title_testimonial
					rating
					testimonial
					avatar {
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
		}
        allWordpressWpProperties(limit: 12) {
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
    `)
	const properts = data.allWordpressWpProperties.edges
	  
	
	const fArray = [
		// {
		// 	"city": "Wembley",
		// 	"purpose": "Rent",
		// 	"c",
		// 	"status": "Available",
		// 	"bathroom": 1,
		// 	"bedroom": 1
		// }
	]
	if(queryString.parse(props.location.search)?.city){fArray.city=queryString.parse(props.location.search).city}
	if(queryString.parse(props.location.search)?.purpose){fArray.purpose=queryString.parse(props.location.search).purpose}
	if(queryString.parse(props.location.search)?.type){fArray.type=queryString.parse(props.location.search).type}
	if(queryString.parse(props.location.search)?.status){fArray.status=queryString.parse(props.location.search).status}
	if(queryString.parse(props.location.search)?.bathroom){fArray.bathroom=queryString.parse(props.location.search).bathroom}
	if(queryString.parse(props.location.search)?.bedroom){fArray.bedroom=queryString.parse(props.location.search).bedroom}
	
	// fArray.=1
	// fArray.=1

	const prs = newProperts(properts,  fArray)
	if(prs === true){
		return (
			<Base data={data} pros={props} defaults={fArray}>
				<div className="col-sm-6 col-md-4 msjnone">
					<div className="box-ads-juan box-grid" >
						<span className="address" style={{textAlign: 'center'}}>
							Property not found
						</span>
					</div>
				</div>
			</Base>
		)
		// console.log('trueeeeeeeee')
	}
	return (
		<Base data={data} pros={props} defaults={fArray}>
			{
				prs.map((p, index) => {
				// city
					
					return (<Property
						key={index}
						pr={p}
						cls="box-grid"
						col="col-sm-6 col-md-4"
					/>)
				})
			}
		</Base>
	)
	
}
