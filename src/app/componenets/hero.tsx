import { Heebo } from "next/font/google";
import Image from "next/image";
import React from "react";
import styles from "../componenets/styel.css/hero.module.css"; 

const heebo = Heebo({ subsets: ["latin"] });

const Hero = () => {
  return (
    <div
      data-aos="zoom-in"
      className={`${styles.heroContainer} ${heebo.className}`} 
    >
      {/* Text Section */}
      <div
        data-aos="zoom-in"
        className={`${styles.textContainer} ${heebo.className}`} 
      >
        <h1 className={`${styles.heroTitle} ${heebo.className}`}>
          Hi, I am Muhammad Abdullah <br />
          | Tech Enthusiast |
        </h1>
        <p className={`${styles.heroDescription} ${heebo.className}`}>
        Welcome to my corner of the internet, where I share my thoughts, 
        experiences, and ideas to inspire and empower you.
        </p>
        <button
          data-aos="zoom-in"
          className={`${styles.heroButton} ${heebo.className}`} 
        >
          Download Resume
        </button>
      </div>

      
      <div
        data-aos="zoom-in"
        className={styles.imageContainer}
      >
        <Image
          className={styles.heroImage}
          src="/assets/hero.jpg" 
          alt="hero-img"
          width={292} 
          height={299} 
        />
        <div data-aos="zoom-in" className={styles.backgroundCircle} />
      </div>
    </div>
  );
};

export default Hero;
