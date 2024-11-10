import { Heebo } from "next/font/google";
import Link from "next/link";
import { RecentPostCart } from "./recentPostCart"; 
import styles from "../componenets/styel.css/recent.module.css"; 

const heebo = Heebo({ subsets: ["latin"] });

const RecentPost = () => {
  return (
    <div data-aos="zoom-in" id="recent" className={styles.recentContainer}>
      <div data-aos="zoom-in" className={styles.contentContainer}>
        <div data-aos="zoom-in" className={styles.header}>
          <h2
            data-aos="zoom-in"
            className={`${styles.headerTitle} ${heebo.className}`} 
          >
            Recent Posts
          </h2>
          <Link
            href="/"
            className={`${styles.homeLink} ${heebo.className}`} 
          >
            Home
          </Link>
        </div>
        <div data-aos="zoom-in" className={styles.postsContainer}>
          <RecentPostCart />
          <RecentPostCart />
        </div>
      </div>
    </div>
  );
};

export default RecentPost;
