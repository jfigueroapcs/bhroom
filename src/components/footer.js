import React from "react"
import { Link } from "gatsby"
import Image from "./image"
import "../styles/template/footer.css"

export default ({ LogoFooter }) => {
    return (
        <footer id="footer-page" className="section-color" style={{ marginTop: `2rem` }}>
			<div className="container">
				<div className="row">
				<div className="col-sm-12 col-md-3">
					<span className="title with-icon">
						<Image data={LogoFooter} clas="logo-footer" />
						Shortly About Us
					</span>
					<span className="text">There are many variations of passages of Lorem Ipsum available,  but the majority have suffered alteration inble. If you are of  going.</span>
				</div>
				<div className="col-sm-6 col-md-3">
					<span className="title">CALL US NOW</span>
					<span className="phone">
						<i className="fa fa-phone"></i> (011)-8800-555
					</span>
					<span className="address"> </span>
					339 Broadway Ave, <strong>New York</strong><br />
					<i className="fa fa-map-marker"></i> NY 10013, USA
				</div>
				<div className="hidden-xs hidden-sm col-md-3">
					<span className="title">Sections</span>
					<ul className="link-extra">
						<li><Link to="#">Properties</Link></li>
						<li><Link to="#">Agents</Link></li>
						<li><Link to="#">Contact</Link></li>
						<li><Link to="#">FAQ</Link></li>
					</ul>
				</div>
				<div className="col-sm-6 col-md-3">
					<span className="title">Our Newsletter</span>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
						eu condimentum neque.
					<div className="newsletter-box">
						{/* <input
							type="text"
							className="form-control"
							placeholder="Your email"
						/>
						<button className="btn btn-default send" type="button">
							<i className="fa fa-envelope-o"></i>
						</button> */}
					</div>
				</div>
				</div>
			</div>
			<div className="credits">
				<div className="container">
				<div className="row">
					<div className="hidden-xs col-md-6 credits-text">

					Copyright © {new Date().getFullYear()} <b>Bhoomimantra</b> | All Rights Reserved | IT RUBIK
					</div>
					<div className="col-md-6">
						<ul className="social-icons">
							<li>
								<Link to="#"><i className="fa fa-facebook"></i></Link>
							</li>
							<li>
								<Link to="#"><i className="fa fa-twitter"></i></Link>
							</li>
							<li>
								<Link to="#"><i className="fa fa-google-plus"></i></Link>
							</li>
							<li>
								<Link to="#"><i className="fa fa-linkedin"></i></Link>
							</li>
						</ul>
					</div>
				</div>
				</div>
			</div>
		</footer>
    )
}