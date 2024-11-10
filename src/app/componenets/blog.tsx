"use client";
import React from "react";
import { Heebo } from "next/font/google";
import Link from "next/link";
import styles from "../componenets/styel.css/blog.module.css"; 

const heebo = Heebo({ subsets: ["latin"] });

const BlogPage = () => {
  return (
    <div id="blog" data-aos="zoom-in" className={`${styles.blogContainer}`}>
      <div className={styles.container}>
        <h2 className={`${styles.title} ${heebo.className}`}>
          Blog Page
        </h2>

       
        <Link href="/" className={`${styles.homeLink} ${heebo.className}`}>
          Blog
        </Link>
      </div>

      <div data-aos="zoom-in" className={styles.blogContent}>
        <div className={styles.innerContent}>
          <h1 className={`${styles.blogTitle} ${heebo.className}`}>
          The Future of AI: Transforming Industries and Daily Life
          </h1>
          <div data-aos="zoom-in" className={styles.metaInfo}>
            <p className={`${styles.metaDate} ${heebo.className}`}>
              6 Oct 2024
            </p>
            <p className={`${styles.metaAuthor} ${heebo.className}`}>
              Muhammad Abdullah
            </p>
          </div>
          <p className={styles.paragraph}>
          Artificial Intelligence is transforming the world at an unprecedented pace, 
          reshaping industries and daily life. In this blog, I explore how AI is revolutionizing
           everything from business solutions to personal productivity. Stay tuned for in-depth insights,
            practical applications, and the latest advancements in AI technology. Join me on this exciting
             journey into the future of innovation.
          </p>
          <p className={`${styles.paragraph} ${styles.paragraphSpacing}`}>
          As AI continues to evolve, its impact on various sectors—from healthcare
           to education—is becoming more evident. Machine learning algorithms are now 
           driving innovation, automating tasks, and unlocking new possibilities
           . In this part, well dive deeper into AIs real-world applications and 
           its potential to solve some of the worlds most pressing challenges.
            The future is here, and AI is leading the way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
