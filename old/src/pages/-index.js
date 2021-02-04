import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../../../src/components/seo"
import Slider from "../components/sections/slider"
import SearchBox from "../components/sections/searchBox"
import RecentlyAdded from "../components/sections/recentlyAdded"
import Services from "../components/sections/services"
import Project  from "../components/sections/projectsRow"
import Testimonials  from "../components/sections/testimilians"
import Helmet from 'react-helmet'


export default function Home() {
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
      allWordpressWpPropertiesFeatured: allWordpressWpProperties(limit: 3, filter: {categories: {elemMatch: {name: {eq: "Featured"}}}}) {
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
      allWordpressWpProperties(limit: 3) {
        edges {
          node {
            id
            title
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
            }
          }
        }
      }
    }
  `)
  const { title, content,  butto } = data.allWordpressAcfOptions.edges[0].node.options
  const project = { title, content,  butto }
  console.log(data)
  // console.log(project)
  return (
    <Layout>
      <SEO title="Home" />
      {/* <Slider newBanners={data.allWordpressAcfOptions.edges[0].node.options.banners} /> */}
      {/* <SearchBox 
        ciudades={ data.allWordpressAcfOptions.edges[0].node.options.cities }
        purposes={ data.allWordpressAcfOptions.edges[0].node.options.purpose }
        types={ data.allWordpressAcfOptions.edges[0].node.options.type }
        statuses={ data.allWordpressAcfOptions.edges[0].node.options.status }
      /> */}
      {/* <RecentlyAdded
        property={ data.allWordpressWpProperties.edges }
        propertyFeatured={ data.allWordpressWpPropertiesFeatured.edges }
      /> */}
      {/* <Services newServices={ data.allWordpressAcfOptions.edges[0].node.options } /> */}
      {/* <Testimonials testimonials={data.allWordpressAcfOptions.edges[0].node.options.testimonials} /> */}
      {/* <Project project={ project } /> */}
      {/* <Helmet>
        <script src='script/test.js' />
      </Helmet> */}
    </Layout>
  )
}


