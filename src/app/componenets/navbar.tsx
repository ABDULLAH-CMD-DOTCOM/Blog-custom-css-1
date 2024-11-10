import { Inter } from "next/font/google";
import Link from "next/link";
import styles from "../componenets/styel.css/navbar.module.css"; 


const inter = Inter({ subsets: ["latin"] });

const Navbar = () => {
 
  const navItems = [
    {
      name: "Works",
      link: "#recent",
    },
    {
      name: "Blog",
      link: "#blog",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  return (
    <div data-aos="zoom-in" className={`${inter.className} ${styles.navbar}`}>
      <ul className={styles.navList}>
        {navItems.map((item, i) => (
          <li key={i} className={styles.navItem}>
           
            <Link href={item.link} className={styles.navLink}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
