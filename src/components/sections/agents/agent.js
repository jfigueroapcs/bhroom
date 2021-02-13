import { Link } from "gatsby"
import React from "react"
import Image from "../../image"
import "../../../styles/template/pages/agent.css"
import "../../../styles/vendor/skill-bars/skill-bars.css"



export default ( {agt} ) => {
    // console.log(agt)
    return (
        <div className="col-sm-6 col-md-3">
            <div className={`agent-box-card ${agt?.node?.acf?.best ? 'top-agent' : ''}`}>
                <div className="image-content" style={{height: 'auto'}}>
                    <div className="image image-fill" style={{height: 'auto'}}>
                    <Image
                        data={agt?.node?.featured_media?.localFile}
                        // alt="Gatsby Docs are awesome"
                        // clas="img-responsive"
                    />
                        {/* <img alt="Image Sample" src="http://placehold.it/512/bbbbbb/ffffff" /> */}
                    </div>						
                </div>
                <div className="info-agent">
                    <span className="name">{ agt?.node?.title }</span>
                    <div className="text">
                        <i className="fa fa-quote-left"></i> { agt?.node?.acf?.bio } <i className="fa fa-quote-right"></i>
                    </div>
                    <ul className="contact">
                        { agt?.node?.acf.social_agent.map((sc, i) => (
                            <li key={i}>
                                <Link className="icon" to={`${sc.type === 'envelope-o' ? `malito:` : ``}${sc.value}`}>
                                    <i className={`fa fa-${sc.type}`}></i>
                                </Link>
                            </li>
                        ))}
                        <li><Link className="icon" to={`/agent/${agt.node.slug}/`}><i className="fa fa-info-circle"></i></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


