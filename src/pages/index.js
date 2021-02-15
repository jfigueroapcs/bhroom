import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Helmet from 'react-helmet'
import "../styles/template/pages/home.css"
import "../styles/template/info-box.css"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Slider from "../components/sections/home/slider"
import SearchBox from "../components/sections/home/searchBox"
import RecentlyAdded from "../components/sections/home/recentlyAdded"
import Services from "../components/sections/home/services"
import Testimonials  from "../components/sections/home/testimilians"
import Project  from "../components/sections/home/projectsRow"

export default () => {
    const data = useStaticQuery(graphql`
      query MyQuery {
        allWordpressAcfOptions {
          edges {
            node {
              options {
                title
                content
                butto
                slogan
                parallax {
                  localFile{
                    childImageSharp {
                      fluid (maxWidth: 1920, maxHeight: 1000){
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
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
        allWordpressWpPropertiesFeatured: allWordpressWpProperties(limit: 3, filter: {categories: {elemMatch: {name: {eq: "Featured"}}}}) {
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
              }
            }
          }
        }
        allWordpressWpProperties(limit: 3) {
          edges {
            node {
              id
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
              categories {
                id
                name
              }
              acf {
                description
                details
                location
                location_longitud
                location_latitude
                characteristics_properties {
                  type
                  value
                }
                cities {
                  label
                  value
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
              }
            }
          }
        }
      }
    `)
    const { title, content,  butto, parallax } = data.allWordpressAcfOptions.edges[0].node.options
    const project = { title, content,  butto, parallax }
    return(
        <>
            <Layout>
                <SEO title="Home" />
                <Slider newBanners={data.allWordpressAcfOptions.edges[0].node.options.banners} />
                <SearchBox 
                    ciudades={ data.allWordpressAcfOptions.edges[0].node.options.cities }
                    purposes={ data.allWordpressAcfOptions.edges[0].node.options.purpose }
                    types={ data.allWordpressAcfOptions.edges[0].node.options.type }
                    statuses={ data.allWordpressAcfOptions.edges[0].node.options.status }
                    bathrooms={ data.allWordpressAcfOptions.edges[0].node.options.bathroom }
                    bedrooms={ data.allWordpressAcfOptions.edges[0].node.options.bedroom }
                />
                <RecentlyAdded
                    property={ data.allWordpressWpProperties.edges }
                    propertyFeatured={ data.allWordpressWpPropertiesFeatured.edges }
                />
                <Services newServices={ data.allWordpressAcfOptions.edges[0].node.options } />
                <Testimonials testimonials={data.allWordpressAcfOptions.edges[0].node.options.testimonials} />
                <Project project={ project } />
            </Layout>
            <Helmet>
                <script src='script/jquery.min.js' />
                <script src="script/jquery-ui.min.js" />
                <script src="script/bootstrap.min.js" />
                <script src="script/vendor/mmenu/mmenu.min.all.js" async defer />
                <script src="script/vendor/animation-wow/wow.min.js" async defer />
                <script src="script/vendor/labelauty/labelauty.min.js" async defer />
                <script src="script/vendor/parallax/parallax.min.js" async defer />
                <script src="script/vendor/images-fill/imagesloaded.min.js" async defer />
                <script src="script/vendor/images-fill/imagefill.min.js" async defer />
                <script src="script/vendor/carousel/responsiveCarousel.min.js" async defer />
                <script src="script/custom.js" async defer />
                <script src="script/menu.js" async defer />
                
            </Helmet>
        </>
    )
}