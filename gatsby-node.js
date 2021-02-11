
// const path = require('path')

// exports.createPages = async ({ graphql, actions }) => {
//     const { createPage } = actions
//     const { data } = await graphql(`
//         query MyQueryPages{
//             all: allWordpressAcfOptions {
//                 edges {
//                   node {
//                     options {
//                       cities {
//                         value
//                         label
//                       }
//                       purpose {
//                         value
//                         label
//                       }
//                       type {
//                         value
//                         label
//                       }
//                       status {
//                         value
//                         label
//                       }
//                       bathroom {
//                         value
//                         label
//                       }
//                       bedroom {
//                         value
//                         label
//                       }
//                     }
//                   }
//                 }
//             }
//         }
//     `)
//     const _bathroom =[
//         { value: "1", label: "1 Bathroom" },
//         { value: "2", label: "2 Bathroom" },
//         { value: "3", label: "3 Bathroom" },
//         { value: "4", label: "4 Bathroom" },
//         { value: "5", label: "5 Bathroom" },
//         { value: "6", label: "6 Bathroom" },
//         { value: "7", label: "7 Bathroom" },
//         { value: "8", label: "8 Bathroom" },
//         { value: "9", label: "9 Bathroom" },
//       ]
//     const _bedroom = [
//         { value: "1", label: "1 Bedroom" },
//         { value: "2", label: "2 Bedroom" },
//         { value: "3", label: "3 Bedroom" },
//         { value: "4", label: "4 Bedroom" },
//         { value: "5", label: "5 Bedroom" },
//         { value: "6", label: "6 Bedroom" },
//         { value: "7", label: "7 Bedroom" },
//         { value: "8", label: "8 Bedroom" },
//         { value: "9", label: "9 Bedroom" },
//       ]
//     const filterPropertiesTemplate = path.resolve('./src/templates/properties.js')

//     const convertToSlug = text => {
//         return text.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'')
//     }
//     data.all.edges.map((node) =>
//         node.node.options.cities.map((nodeCity)  => 
//             node.node.options.purpose.map((nodePurpose) =>
//                 node.node.options.type.map((nodeYype) =>
//                     node.node.options.status.map((nodeStatus) =>
//                         node.node.options.bathroom.map((nodeBathroom) => 
//                             node.node.options.bedroom.map((nodeBedroom) => 
//                                   // console.log(`${convertToSlug(nodeCity.value)}/${convertToSlug(nodePurpose.value)}/${convertToSlug(nodeYype.value)}/${convertToSlug(nodeStatus.value)}/${nodeBathroom.value}/${nodeBedroom.value}`)
//                                   createPage({
//                                       path: `/properties/${convertToSlug(nodeCity.value)}/${convertToSlug(nodePurpose.value)}/${convertToSlug(nodeYype.value)}/${convertToSlug(nodeStatus.value)}/${nodeBathroom.value}/${nodeBedroom.value}`,
//                                       component: filterPropertiesTemplate,
//                                       context: {
//                                         cities: nodeCity.value,
//                                         purpose: nodePurpose.value,
//                                         type: nodeYype.value,
//                                         status: nodeStatus.value,
//                                         bathroom: nodeBathroom.value,
//                                         bedroom: nodeBedroom.value,
//                                       }
//                                   })
//                             )
//                         )
//                     )
//                 )
//             )
//         )
//     )
// }

















const path = require(`path`)
// const { createFilePath } = require(`gatsby-source-filesystem`)

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions
//   if (node.internal.type === `MarkdownRemark`) {
//     const slug = createFilePath({ node, getNode, basePath: `pages` })
//     createNodeField({
//       node,
//       name: `slug`,
//       value: slug,
//     })
//   }
// }

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const agents = await graphql(`
        query Agents {
            allWordpressWpAgent {
                edges {
                  node {
                    slug
                  }
                }
              }
        }
    `)
    const properties = await graphql(`
    query Properties {
        allWordpressWpProperties {
          edges {
            node {
              id
              slug
              title
              content
              acf {
                details
                cities {
                  value
                  label
                }
                bedroom {
                  value
                  label
                }
                bathroom {
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
                purpose {
                  value
                  label
                }
                characteristics_properties {
                  type
                  value
                }
                agent_name {
                  post_name
                }
                gallery {
                  localFile {
                    url
                  }
                }
              }
              featured_media {
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
        }
      }
    `)


    agents.data.allWordpressWpAgent.edges.forEach(({ node }) => {
        createPage({
            path: `/agent/${node.slug}`,
            component: path.resolve(`./src/templates/single-agent.js`),
            context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                slug: node.slug,
                // data:node
            },
        })
    })
    
    properties.data.allWordpressWpProperties.edges.forEach(({ node }) => {
        createPage({
            path: `/property/${node.slug}`,
            component: path.resolve(`./src/templates/single-property.js`),
            context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                slug: node.slug,
                agent: node.acf.agent_name.post_name,
                data:node
            },
        })
    })
}
