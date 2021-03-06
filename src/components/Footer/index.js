import React from "react";

function Footer() {
    return (
        <footer className="page-footer">
            <nav className="footer-links">
                <a type="button" role="button" className="button"><i className="fa fa-github" onClick={() => window.open("https://github.com/emcarlisle")}></i></a>
                <a type="button" role="button" className="button"><i className="fa fa-linkedin-square" onClick={() => window.open("https://www.linkedin.com/in/carlisle-emily02/")}></i></a>
            </nav>
            <div className="footer-copyright py-3">Feel free to contact me here:
                <p>emilydeluna96@gmail.com</p>
            </div>
        </footer>
    )
}
export default Footer;