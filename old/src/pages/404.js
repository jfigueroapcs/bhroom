
import React from "react"
import * as queryString from "query-string"
import SEO from "../components/seo"

export default function p404(props) {
  // console.log(props.location)
  const { parameter1, parameter2 } = queryString.parse(props.location.search)

  console.log(parameter1)
  console.log(parameter2)
  return (
    <>
      <SEO title="Home" />
      <p>dsdsd</p>
    </>
  )
}

