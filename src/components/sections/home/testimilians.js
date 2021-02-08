import { Link } from "gatsby"
import React from "react"
import Image from "../../image"

const Figure = ({t}) => {
    return(
        <figure className="crsl-item">
            <div className="feeddback-user">
                <div className="info-user">
                    <span className="avatar">
                        {t.avatar !== null ?
                            <Image data={t.avatar.localFile} clas="logo-footer" />
                        : ''}
                        {/* <img
                        src="http://placehold.it/512/bbbbbb/ffffff"
                        alt="Image Sample"
                        className="img-responsive"
                        /> */}
                    </span>
                    <b>{ t.full_name }</b>
                    <span>{ t.address }</span>
                    <span>{ t.age }</span>
                </div>
                <div className="message">
                    <div className="content">
                        <h3 className="title">
                            <i className="icon-quote fa fa-quote-left"></i>
                                { t.title_testimonial }
                            <i className="icon-quote fa fa-quote-right"></i>
                        </h3>
                        <span className="rating">
                        <span>Rating:</span>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-o"></i>
                        </span>
                        <p className="text-container">
                            { t.testimonial }
                        </p>
                    </div>
                </div>
            </div>
        </figure>
    )
}

export default ({ testimonials }) =>{
  return (
    <section id="testimonial">
        <div className="section-detail hidden-xs">
          <h1>Client Testimonials</h1>
        </div>
        <div className="container hidden-xs">
          <div className="row">
            <div className="col-md-12">
              <div className="row feedback-margin">
                <div className="feedback-container" data-navigation="#feedback-nav">
                  <div className="crsl-wrap">
                    {testimonials.map((t, index) => 
                        <Figure key={index} t={t}/>
                    )}
                  </div>
                  <div id="feedback-nav" className="nav-box">
                    <Link to="#" className="previous"></Link>
                    <Link to="#" className="next"></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

