import { Heebo } from "next/font/google";
import { FaFacebookSquare, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import React from "react";
import Link from "next/link";
import styles from "../componenets/styel.css/footer.module.css"; // Import CSS module

const heebo = Heebo({ subsets: ["latin"] });

const Footer = () => {
  return (
    <div data-aos="zoom-in" className={styles.footerContainer}>
      <div data-aos="zoom-in" className={styles.socialLinks}>
        
        {/* Correct usage of Link and Icons */}
        <Link href="https://facebook.com" target="_blank">
          <FaFacebookSquare className={styles.icon} />
        </Link>
        
        <Link href="https://instagram.com" target="_blank">
          <FaInstagram className={styles.icon} />
        </Link>
        
        <Link href="https://twitter.com" target="_blank">
          <FaTwitter className={styles.icon} />
        </Link>
        
        <Link href="https://linkedin.com" target="_blank">
          <FaLinkedin className={styles.icon} />
        </Link>
      </div>
      
      <p className={`${heebo.className} ${styles.copyrightText}`}>
        Copyright 2024 All rights reserved
      </p>
    </div>
  );
};

export default Footer;
