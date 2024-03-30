import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                <p>Welcome to our movie community! At movix, we're passionate about bringing you the latest in cinematic experiences. Dive into a world of entertainment where every film tells a story, and every story creates an unforgettable journey. Our mission is to provide you with a platform where you can explore, discover, and discuss your favorite movies with fellow enthusiasts.</p>
                <p>Discover the magic of cinema with our curated selection of films spanning various genres, from timeless classics to cutting-edge blockbusters. Join us as we celebrate the art of storytelling and embrace the power of imagination. Whether you're a casual moviegoer or a seasoned cinephile, there's something here for everyone.</p>
                <p>Join our vibrant community today and embark on a cinematic adventure like never before. Sit back, relax, and let the magic of movies transport you to new worlds. Let's make memories, share laughs, and explore the endless possibilities that cinema has to offer. Thank you for being a part of our journey!</p>

              </div>

                <div className="socialIcons">
                    <span className="icon">
                        <FaFacebookF />
                    </span>
                    <span className="icon">
                        <FaInstagram />
                    </span>
                    <span className="icon">
                        <FaTwitter />
                    </span>
                    <span className="icon">
                        <FaLinkedin />
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;