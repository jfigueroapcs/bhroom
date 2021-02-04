
import React from "react"
import Property from '../../property'
import "../../../styles/template/searcher.css"

const RecentlyAdded = ({ property,  propertyFeatured }) => {
  
  
  return (
    <>
      <section id="recent-list">
        <div className="section-detail">
          <h1>
            <span>Bhoomimantra </span>
            <span id="spinner-show">
              <em className="current">Real Estate</em>
              <span className="next"><span></span></span>
            </span>
            <span>Featured Homes</span>
          </h1>
          <ul id="spinner">
            <li>Clients</li>
            <li>Stellar Service</li>
            <li>Simple Question</li>
            <li>Home Valutation</li>
            <li>Rentals</li>
          </ul>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            dolor, sagittis sed elementum dignissim, lobortis.
          </h2>
        </div>
        <div className="container">
          <div className="list-box-title">
            <span>Recently Added</span>
          </div>
          <div className="row">
            {property.map(p =>
              <Property
                key={p.node.id}
                pr={p}
                cls="box-home"
                col="col-md-4"
              />
            )}
            
          </div>
          <div className="list-box-title">
            <span>Featured Properties</span>
          </div>
          <div className="row">
            {propertyFeatured.map(p =>
              {
                // if(Array.isArray(p.node.categories) && p.node.categories[0].name === "Featured"){
                  return(<Property
                    key={p.node.id}
                    pr={p}
                    cls="box-home"
                    col="col-md-4"
                  />)
                // }
              }
            )}
          </div>
        </div>
      </section>
    </>
  )
}


export default RecentlyAdded