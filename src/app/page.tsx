"use client";
import { useEffect } from "react";
import AOS from "aos"; 
import "aos/dist/aos.css";

import Hero from "./componenets/hero"; 
import RecentPost from "./componenets/recentPost"; 
import BlogPage from "./componenets/blog"; 
import Contact from "./componenets/contact"; 

export default function Home() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });

  }, []);

  return (
    <>
      <Hero />
      <RecentPost />
      <BlogPage />
      <Contact />
    </>
  );
}
