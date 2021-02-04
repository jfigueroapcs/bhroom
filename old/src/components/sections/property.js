import React from "react"
import Image from "./image"

export default ({ pr, cls, col }) => {
    return(
      <>
        <div className={col}>
          <div className={`box-ads-juan ${cls}`}>
            <a
              className="hover-effect image image-fill"
              href="property-detail.html">
              <span className="cover"></span>
              <Image
                data={pr.node.featured_media.localFile}
                // alt="Gatsby Docs are awesome"
                clas="img-responsive"
              />
              {/* <img
                alt="Sample images"
                className="img-responsive"
                src={pr.node.featured_media.source_url}
              /> */}
              <h3 className="title">{pr.node.title}</h3> </a>
            <span className="price">
              {/* $ 536.500,00 */}
            </span>
            <span className="address"
              ><i className="fa fa-map-marker"></i> {pr.node.acf.location}</span>
            <span className="description" >{pr.node.acf.description}</span>
            <dl className="detail">
              {/* <dt className="status">Status:</dt>
              <dd><span>Sale</span></dd> */}
              {pr.node.acf.characteristics_properties.map((cha, index) => 
                <div key={`${pr.node.id}-${index}`}>
                  <dt className={cha.type}>{cha.type}:</dt>
                  <dd><span>{cha.value}</span></dd>
                </div>
              )}
            </dl>
            <div className="footer">
              <a className="btn btn-reverse" href="property-detail.html"
                >View details</a
              >
            </div>
          </div>
        </div>
      </>
    )
  }