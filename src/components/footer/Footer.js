import React from "react";
import "./footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import LanguageIcon from "@mui/icons-material/Language";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_container">
                <div className="footer_icons">
                    <InstagramIcon />
                    <TwitterIcon />
                    <FacebookIcon />
                    <LinkedInIcon />
                    <MailIcon />
                    <CallIcon />
                    <LanguageIcon />
                </div>
                <p>Questions? Call 000-800-040-1843</p>
                <div className="footer_contents">
                    <div className="footer_section">
                        <p>FAQ</p>
                        <p>Help Centre</p>
                        <p>Account</p>
                        <p>Media Centre</p>
                    </div>
                    <div className="footer_section">
                        <p>Investor Relations</p>
                        <p>Jobs</p>
                        <p>Ways to Watch</p>
                        <p>Terms of Use</p>
                    </div>
                    <div className="footer_section">
                        <p>Privacy</p>
                        <p>Cookie Preferences</p>
                        <p>Corporate Information</p>
                        <p>Contact Us</p>
                    </div>
                    <div className="footer_section">
                        <p>Speed Test</p>
                        <p>Legal Notices</p>
                        <p>Only on Netflix</p>
                    </div>
                </div>
                <p>Netflix India</p>
            </div>
        </div>
    );
};

export default Footer;
