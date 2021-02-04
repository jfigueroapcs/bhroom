
import React from "react"
const Services = ({ newServices }) => {
  return (
    <section id="service" className="section-color">
        <div className="section-detail">
            <h1>Services</h1>
            <h2>{newServices.slogan}</h2>
        </div>
        <div className="container">
            <div className="row">
                {newServices.services.map((service, index) => 
                    <div className="col-md-4" key={index}>
                        <div className="content-box">
                            <i className={`icon-box fa fa-${service.icon}`}></i>
                            <h3>
                            <i className="icon-quote fa fa-quote-left"></i>
                                {service.title}
                            <i className="icon-quote fa fa-quote-right"></i>
                            </h3>
                            <h4>{service.text}</h4>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </section>
  )
}

export default Services