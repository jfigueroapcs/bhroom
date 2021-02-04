import React from "react"
import Img from "gatsby-image"

const Image = ({data,  clas}) => {
    // console.log(data)
    if(!data?.childImageSharp?.fluid){
        return <div>Picture not found</div>
    }
    return <Img fluid={data.childImageSharp.fluid} className={clas} />
}

export default Image