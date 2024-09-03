"use client";
import styles from "./aboutMe.module.css";
import { FaLinkedin , FaTwitter } from "react-icons/fa";

const AboutMe = () => {
  return (
    <>
      <h1 className={styles.header}>About Me</h1>
      <div className={styles.about_container}>
        <div className={styles.design_container}>
          <span className={styles.line1}>.</span>
          <span className={styles.line2}>.</span>
          <span className={styles.line3}>.</span>
        </div>
        <div className={styles.about_container_left}>
          <b>Full Name: </b>
          <span>Juneid Mansur Shaikh</span>
          <br />
          <b>Phone: </b>
          <span>+91 95031 70450</span>
          <br />
          <b>Email: </b>
          <span>prof.juneidshaikh18@gmail.com</span>
          <br />
          <b>Address: </b>
          <span>Satara, Maharashtra, India</span>
          <br /><br />
          <a className={styles.resumebtn} href="https://drive.google.com/file/d/1hqvmQRI_ecYpaJEnpZyhYnnLt-LUKfbt/view?usp=sharing" target="_blank">Download My Resume</a>
        </div>
        <div className={styles.about_container_right}>
          <h2>Hello There!</h2>
          <p>
            Experienced Full Stack Developer proficient in React.js, Next.js, MongoDB, and more. With a proven track record in crafting user-centric web applications, I specialize in delivering high-quality, scalable solutions that exceed expectations. From personalized e-commerce platforms to real-time chat applications, I bring creativity and technical expertise to every project.
          </p>

          <br />
          <p>
            My dedication to optimizing performance and user experience has resulted in tangible outcomes, including increased engagement and enhanced customer satisfaction. With a keen eye for detail and a passion for innovation, I am committed to driving success in collaborative environments. Seeking opportunities to leverage my skills and contribute to impactful projects. Let&apos;s connect and explore how I can add value to your team.
          </p>
          <a href="https://www.linkedin.com/in/juneid-shaikh/" className={styles.socialbtn}>
            <FaLinkedin />
          </a>
          <a href="https://x.com/Juneidshaikh18?t=4w1-K7AXflxO848dM-5pqg&s=09" className={styles.socialbtn}>
            <FaTwitter />
          </a>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
