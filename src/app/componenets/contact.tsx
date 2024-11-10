"use client";
import React from "react";
import { Heebo } from "next/font/google";
import Link from "next/link";
import styles from "../componenets/styel.css/contact.module.css"; // Import the CSS module

const heebo = Heebo({ subsets: ["latin"] });

const Contact = () => {
  return (
    <div data-aos="zoom-in" id="contact" className={styles.contactContainer}>
      <div data-aos="zoom-in" className={styles.formWrapper}>
        <div data-aos="zoom-in" className={styles.header}>
          <h2 className={`${heebo.className} ${styles.contactTitle}`}>Contact Me</h2>
          
          {/* Correct use of Link */}
          <Link href="/" className={styles.homeLink}>
            Contact
          </Link>
        </div>

        <form
          target="_blank"
          className={styles.contactForm}
        >
          <div data-aos="zoom-in" className={styles.formGroup}>
            <label htmlFor="name" className={styles.formLabel}>
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={styles.formInput}
              required
            />
          </div>
          
          <div data-aos="zoom-in" className={styles.formGroup}>
            <label htmlFor="email" className={styles.formLabel}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={styles.formInput}
              required
            />
          </div>
          
          <div data-aos="zoom-in" className={styles.formGroup}>
            <label htmlFor="subject" className={styles.formLabel}>
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className={styles.formInput}
              required
            />
          </div>

          <div data-aos="zoom-in" className={styles.formGroup}>
            <label htmlFor="message" className={styles.formLabel}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className={styles.formTextarea}
              required
            />
          </div>

          <button data-aos="zoom-in" type="submit" className={styles.submitBtn}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
