import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Helmet from 'react-helmet'
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/template/pages/faq.css"

export default () => {
	const path = require('path')
    const data = useStaticQuery(graphql `
        query {
            wordpressAcfOptions {
                options {
                    basics {
                        title
                        description
                    }
                    account {
                        title
                        description
                    }
                    property {
                        title
                        description
                    }
                    selling_process {
                        title
                        description
                    }
                    buying_process {
                        title
                        description
                    }
                    agent_contact {
                        title
                        description
                    }
                }
            }
        }
    `)
    const {options} = data.wordpressAcfOptions
    const { basics, account, property, selling_process, buying_process, agent_contact } = options
    // console.log(options)
    
    
    return (
        <>
            <Layout>
                <SEO title="FAQ" />
                <section id="header-page" className="header-margin-base">
                    <div className="skyline">
                        <div data-offset="50" className="p1 parallax"></div>
                        <div data-offset="25" className="p2 parallax"></div>
                        <div data-offset="15" className="p3 parallax"></div>
                        <div data-offset="8"  className="p4 parallax"></div>
                        <span className="cover"></span>
                        <div className="container header-text">
                            <div><h1 className="title">Faq</h1></div>
                            <div><h2 className="sub-title">Lorem ipsum dolats adipiscing elit justo</h2></div>
                        </div>
                    </div>
                    <div id="breadcrumb">
                        <div className="container">
                            <ol className="breadcrumb">
                                <li><Link to="/"><i className="fa fa-home"></i></Link></li>
                                <li className="active">Faq</li>
                            </ol>
                        </div>
                    </div>
                    <span className="cover"></span>
                </section>
                <section id="faq">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-3" id="block-menu-content">
                                <div className="section-title line-style no-margin">
                                    <h3 className="title">Menu Faq list</h3>
                                </div>
                                <ul className="block-menu" id="block-menu" data-spy="affix" data-offset-to="500" data-offset-bottom="400">
                                    { options?.basics ? <li><a className="faq-button active" href="#basic"><i className="icon fa fa-life-ring"></i> Basics</a></li> : null}
                                    { options?.account ? <li><a className="faq-button" href="#account"><i className="icon fa fa-child"></i> Account</a></li> : null}
                                    { options?.property ? <li><a className="faq-button" href="#property"><i className="icon fa fa-home"></i> Property</a></li> : null}
                                    { options?.selling_process ? <li><a className="faq-button" href="#selling"><i className="icon fa fa-cart-plus"></i> Selling Process</a></li> : null}
                                    { options?.buying_process ? <li><a className="faq-button" href="#buying"><i className="icon fa fa-university"></i> Buying Process</a></li> : null}
                                    { options?.agent_contact ? <li><a className="faq-button" href="#agent"><i className="icon fa fa-user-secret"></i> Agent Contact</a></li> : null}
                                </ul>
                            </div>
                            <div className="col-sm-9">
                                {options?.basics ? (
                                    <>
                                        <h2>Basics</h2>
                                        <div className="faq-container accordion" id="basic">
                                            {basics.map((b, i) => <FaqList item={b} name={`basics-${i}`} key={i} active="true" />)}
                                        </div>
                                    </>
                                ) : null}
                                {options?.account ? (
                                    <>
                                        <h2>Account</h2>
                                        <div className="faq-container accordion" id="account">
                                            {account.map((b, i) => <FaqList item={b} name={`account-${i}`} key={i} />)}
                                        </div>
                                    </>
                                ) : null}
                                {options?.property ? (
                                    <>
                                        <h2>Property</h2>
                                        <div className="faq-container accordion" id="property">
                                            {property.map((b, i) => <FaqList item={b} name={`property-${i}`} key={i} />)}
                                        </div>
                                    </>
                                ) : null}
                                {options?.selling_process ? (
                                    <>
                                        <h2>Selling Process</h2>
                                        <div className="faq-container accordion" id="selling">
                                            {selling_process.map((b, i) => <FaqList item={b} name={`selling-${i}`} key={i} />)}
                                        </div>
                                    </>
                                ) : null}
                                {options?.buying_process ? (
                                    <>
                                        <h2>Buying Process</h2>
                                        <div className="faq-container accordion" id="buying">
                                            {buying_process.map((b, i) => <FaqList item={b} name={`buying-${i}`} key={i} />)}
                                        </div>
                                    </>
                                ) : null}
                                {options?.agent_contact ? (
                                    <>
                                        <h2>Agent Contact</h2>
                                        <div className="faq-container accordion" id="agent">
                                            {agent_contact.map((b, i) => <FaqList item={b} name={`agent-${i}`} key={i} />)}
                                        </div>
                                    </>
                                ) : null}
                                
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
            <Helmet>
                <script src={path.resolve('script/jquery.min.js')} />
                <script src={path.resolve('script/jquery-ui.min.js')} />
                <script src={path.resolve('script/bootstrap.min.js')} />
                <script src={path.resolve('script/vendor/mmenu/mmenu.min.all.js')} />
                <script src={path.resolve('script/vendor/animation-wow/wow.min.js')} />
                <script src={path.resolve('script/vendor/labelauty/labelauty.min.js')} />
                <script src={path.resolve('script/vendor/parallax/parallax.min.js')} />
                <script src={path.resolve('script/vendor/images-fill/imagesloaded.min.js')} />
                <script src={path.resolve('script/vendor/images-fill/imagefill.min.js')} />
                <script src={path.resolve('script/vendor/easydropdown/jquery.easydropdown.min.js')} />
                <script src={path.resolve('script/vendor/carousel/responsiveCarousel.min.js')} />
                <script src={path.resolve('script/custom.js')} />
                <script src={path.resolve('script/menu.js')} />
                <script src={path.resolve('script/acc.js')} />
            </Helmet>
        </>
    )
}

export const FaqList = ({item, name}) => {
    return (
        <div className="accordion-box">
            <Link data-target={`#acc-${name}`} to="#" className={`title ${name === 'basics-0' ? 'active' : ''}`}>{item.title}</Link>
            <div className={`text-container ${name === 'basics-0' ? 'open' : ''}`} id={`acc-${name}`}>
                <p>{item.description}</p>
            </div>
        </div>
    )
}


