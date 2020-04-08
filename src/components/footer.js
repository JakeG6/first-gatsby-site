import React from "react"
import { Link } from "gatsby"
import "./footer.css"

const Footer = () => {
    return (
        <div>
            <Link className="footerLink" to="/">Go back to the homepage</Link>
            <Link className="footerLink" to="/page-2/">Go to page 2</Link>
            <Link className="footerLink" to="/blog/">Go to the blog</Link>
            <Link className="footerLink" to="/contact/">Contact</Link>
            <div>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
            </div>
            
        </div>
        
    )
}

export default Footer;