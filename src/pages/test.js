import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default () => {
    const data = useStaticQuery(graphql`
        query MyQueryPages{
            all: allWordpressAcfOptions {
                edges {
                node {
                    options {
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
                    }
                }
                }
            }
        }
    `)

    // const _bathroom =[
    //       { value: "1", label: "1 Bathroom" },
    //       { value: "2", label: "2 Bathroom" },
    //       { value: "3", label: "3 Bathroom" },
    //       { value: "4", label: "4 Bathroom" },
    //       { value: "5", label: "5 Bathroom" },
    //       { value: "6", label: "6 Bathroom" },
    //       { value: "7", label: "7 Bathroom" },
    //       { value: "8", label: "8 Bathroom" },
    //       { value: "9", label: "9 Bathroom" },
    //     ]
    //   const _bedroom = [
    //       { value: "1", label: "1 Bedroom" },
    //       { value: "2", label: "2 Bedroom" },
    //       { value: "3", label: "3 Bedroom" },
    //       { value: "4", label: "4 Bedroom" },
    //       { value: "5", label: "5 Bedroom" },
    //       { value: "6", label: "6 Bedroom" },
    //       { value: "7", label: "7 Bedroom" },
    //       { value: "8", label: "8 Bedroom" },
    //       { value: "9", label: "9 Bedroom" },
    //     ]

    // const convertToSlug = text => {
    //     return text.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'')
    // }
    // var i = 0
    // data.all.edges.map((node, nodeIndex) =>
    //     // console.log(node.node.options.cities)
    //     node.node.options.cities.map((nodeCity, cityIndex) => 
    //         node.node.options.purpose.map((nodePurpose, purposeIndex) =>
    //             node.node.options.type.map((nodeYype, typeIndex) =>
    //                 node.node.options.status.map((nodeStatus, statusIndex) =>
    //                     _bathroom.map((nodeBathroom, bathroomIndex) => 
    //                         _bedroom.map((nodeBedroom, bedroomIndex) => {
                                
    //                             i=i+1
    //                                 console.log(i)
    //                                 // console.log(`${nodeIndex}${cityIndex}${purposeIndex}${typeIndex}${statusIndex}${bathroomIndex}${bedroomIndex}`)
    //                                 // console.log(`${convertToSlug(nodeCity.value)}/${convertToSlug(nodePurpose.value)}/${convertToSlug(nodeYype.value)}/${convertToSlug(nodeStatus.value)}/${nodeBathroom.value}/${nodeBedroom.value}`)
    //                         }
    //                         )
    //                     )
    //                 )
    //             )
    //         )
    //     )
    // )


    return (
        <h1>propieties</h1>
    )
}


