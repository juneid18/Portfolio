"use client";
import styles from "./page.module.css";
import "animate.css";
import AboutMe from "./components/AboutMe/aboutMe";
import Service from "./components/ServiceSection/service";
import Skills from "./components/Skills/skills";
import Projects from "./components/Projects/projects";
import Blog from "./components/Blog/blog";
import { useState } from "react";
import { FaLongArrowAltUp } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const openNav = () => {
    console.log("Opening nav");
    setIsNavOpen(true);
  };

  const closeNav = () => {
    console.log("Closing nav");
    setIsNavOpen(false);
  };

  return (
    <>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <div className={styles.container} id="home">
        {/* Mobile Nav */}
        <div className={styles.mobilenvacon}>
          <div
            id={styles.mySidenav}
            className={`${styles.sidenav} ${isNavOpen ? styles.open : ""}`}
          >
            <span className={styles.closeBtn} onClick={closeNav}>
              &times;
            </span>
            <a href="#aboutme">About</a>
            <a href="#service">Service</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#blog">Blogs</a>
          </div>
          <span
            className={styles.openBtn}
            style={{ fontSize: "30px", cursor: "pointer" }}
            onClick={openNav}
          >
            &#9776;
          </span>
        </div>
        <a href="mailto:prof.juneidshaikh18@gmail.com"><button className={styles.button_28}>Contact me</button></a>
        {/* Mobile nav end */}
        <div className={styles.navigation_container}>
          <div className={styles.navbar}>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#aboutme">About</a>
              </li>
              <li>
                <a href="#service">Service</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#blog">Blogs</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.sub_container}>
          <h2 className={styles.sub_container_h2}>
            Juneid Shaikh - Full Stack Developer
          </h2>
          <h1 className={styles.sub_container_h1}>
            Welcome To My <i style={{ fontFamily: "cursive" }}>Portfolio</i>
          </h1>
          <Image
            className={styles.leftDot}
            src="/assets/dot.png"
            width={400}
            height={300}
            alt="Left Dot"
          />
          <Image
            className={styles.rightDot}
            src="/assets/dot.png"
            width={400}
            height={300}
            alt="Right Dot"
          />
        </div>
        <div style={{ height: "2000px" }}>
          <a
            href="#home"
            style={{
              position: "fixed",
              bottom: "6%",
              right: "2%",
              zIndex: "9999",
              backgroundColor: "#000",
              padding: "14px",
              borderRadius: "20%",
              color: "#fff",
              fontSize: "20px",
            }}
          >
            <FaLongArrowAltUp />
          </a>
        </div>
      </div>
      <div id="aboutme">
        <AboutMe />
      </div>
      <div id="service">
        <Service />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="blog">
        <Blog />
      </div>
      <footer className={styles.footer}>
        <span>© All Rights Reserved By Juneid 💗.</span>
      </footer>
    </>
  );
}
