import React from "react";
import { Heebo } from "next/font/google";
import styles from "../componenets/styel.css/recentcart.module.css"; 

const heebo = Heebo({ subsets: ["latin"] });

export const RecentPostCart = () => {
  return (
    <div data-aos="zoom-in" className={styles.recentPostCartContainer}>
      <div data-aos="zoom-in" className={styles.contentContainer}>
        <h2
          data-aos="zoom-in"
          className={`${styles.title} ${heebo.className}`} 
        >
          Muhammad Abdullah | Technologist
        </h2>
        <div data-aos="zoom-in" className={styles.metadataContainer}>
          <p className={`${styles.metaText} ${heebo.className}`}>6 Oct 2024</p>
          <p className={`${styles.metaSeparator} ${heebo.className}`}>|</p>
          <p className={`${styles.metaText} ${heebo.className}`}>Design pattern</p>
        </div>
        <p className={styles.description}>
        Exploring the intersection of innovation and technology to bring you the latest trends,
         insights, and solutions for a digital-first world..
        </p>
      </div>
    </div>
  );
};
