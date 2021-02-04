import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from 'react-helmet'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Property from '../components/sections/properties/property'
import SearchBox from "../components/sections/properties/searchBox"

export default () => {
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
              }
            }
          }
        }
      }
    `)
  console.log(data.allWordpressAcfOptions.edges)
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
								<a href="#"><i className="fa fa-home"></i></a>
							</li>
							<li><a href="#">Property</a></li>
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
						{data.allWordpressWpProperties.edges.map(p =>
							<Property
								key={p.node.id}
								pr={p}
								cls="box-grid"
								col="col-sm-6 col-md-4"
							/>
						)}
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
						/>
					</div>
				</div>
				</div>
			</section>
			</Layout>
			
			<Helmet>
				<script src='../script/jquery.min.js' />
				<script src="../script/jquery-ui.min.js" />
				<script src="../script/bootstrap.min.js" />
				<script src="../script/vendor/mmenu/mmenu.min.all.js" />
				<script src="../script/vendor/animation-wow/wow.min.js" />
				<script src="../script/vendor/labelauty/labelauty.min.js" />
				<script src="../script/vendor/parallax/parallax.min.js" />
				<script src="../script/vendor/images-fill/imagesloaded.min.js" />
				<script src="../script/vendor/images-fill/imagefill.min.js" />
				<script src="../script/vendor/carousel/responsiveCarousel.min.js" />
				<script src="../script/custom.js" />
			</Helmet>
		</>
  )
}


