import { Link } from "gatsby"
import React from "react"
import Image from "./image"

export default ({ pr, cls, col }) => {
  const slug = pr.node?.slug ? pr.node.slug : ''
    return(
      <>
        <div className={col}>
          <div className={`box-ads-juan ${cls}`}>
            <Link
              className="hover-effect image image-fill"
              to={`/property/${slug}`}>
              <span className="cover"></span>
              <Image
                data={pr.node.featured_media.localFile}
                // alt="Gatsby Docs are awesome"
                clas="img-responsive"
              />
                <h3 className="title">{pr.node.title}</h3>
              </Link>
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
              <Link className="btn btn-reverse" to={`/property/${slug}`}>
                  View details
              </Link>
            </div>
          </div>
        </div>
      </>
    )
  }