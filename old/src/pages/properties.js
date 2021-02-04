import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Property from '../components/sections/property'

export default () => {
    const data = useStaticQuery(graphql`
    query MyQueryQ {
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
//   console.log(data.allWordpressWpProperties.edges)
  return (
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
                <div>
                <h2 className="sub-title">Lorem ipsum dolor dipiscing elit justo</h2>
                </div>
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
            {/* <div className="col-sm-4 col-md-3 col-md-pull-9 col-sm-pull-8">
              <div className="section-title line-style">
                <h3 className="title">Search Box</h3>
              </div>
              <div className="right-box">
                <div className="row">
                  <div className="col-md-12 space-div">
                    <label>Keywords</label>
                    <input
                      className="form-control"
                      type="text"
                      name="keywords"
                      id="keywords"
                      placeholder="Keywords"
                    />
                  </div>
                  <div className="col-md-12 space-div">
                    <select className="dropdown" data-settings='{"cutOff": 5}'>
                      <option value="">-- All Cities --</option>
                      <option value="brixton">Brixton</option>
                      <option value="london">London</option>
                      <option value="middlesex">Middlesex</option>
                      <option value="stratford">Stratford</option>
                      <option value="wembley">Wembley</option>
                      <option value="west-norwood">West Norwood</option>
                      <option value="westminster">Westminster</option>
                    </select>
                  </div>
                  <div className="col-md-12 space-div">
                    <select className="dropdown" data-settings='{"cutOff": 5}'>
                      <option value="">-- Any Purpose --</option>
                      <option value="rent">Rent</option>
                      <option value="sell">Sell</option>
                    </select>
                  </div>
                  <div className="col-md-12 space-div">
                    <select className="dropdown" data-settings='{"cutOff": 5}'>
                      <option value="">-- Any Type --</option>
                      <option value="apartments">Apartments</option>
                      <option value="condos">Condos</option>
                      <option value="duplex">Duplex</option>
                      <option value="houses">Houses</option>
                      <option value="offices">Offices</option>
                      <option value="retail">Retail</option>
                      <option value="villa">Villa</option>
                    </select>
                  </div>
                  <div className="col-md-12 space-div">
                    <select className="dropdown">
                      <option value="">-- Any Status --</option>
                      <option value="Normal">Normal</option>
                      <option value="Available">Available</option>
                      <option value="Not Available">Not Available</option>
                      <option value="Sold">Sold</option>
                      <option value="Open House">Open House</option>
                    </select>
                  </div>
                  <div className="col-md-4 space-div">
                    <label>Bathroom</label>
                    <input
                      className="form-control"
                      type="text"
                      name="bathroom"
                      id="bathroom"
                      value="3"
                    />
                  </div>
                  <div className="col-md-4 space-div">
                    <label>Bedroom</label>
                    <input
                      className="form-control"
                      type="text"
                      name="bedroom"
                      id="bedroom"
                      value="2"
                    />
                  </div>
                  <div className="col-md-4 space-div">
                    <label>Size</label>
                    <input
                      className="form-control"
                      type="text"
                      name="property-size"
                      id="property-size"
                      value="120"
                    />
                  </div>
                  <div className="col-md-12 space-div">
                    <button type="button" className="btn btn-default search-button">
                      SEARCH NOW
                    </button>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        {/* <div className="container" id="pagination">
          <div className="row">
            <div className="col-md-9 col-md-offset-3 text-right">
              <ul className="pagination">
                <li>
                  <a href="#"><i className="fa fa-chevron-left"></i></a>
                </li>
                <li><a className="active" href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a className="no-active">...</a></li>
                <li><a href="#">9</a></li>
                <li>
                  <a href="#"><i className="fa fa-chevron-right"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
      </section>

    </Layout>
  )
}


