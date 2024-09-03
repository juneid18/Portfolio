import React from 'react'
import styles from "./service.module.css"
import { FaCode } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaCloud } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { VscDebugConsole } from "react-icons/vsc";

const service = () => {
  return (
    <>
       <div className={styles.container}>
        <h2>Our Services</h2>
        <div className={styles.row}>
            <div className={styles.service}>
            <i><FaCode /></i>
                <h3>Front-end Development</h3>
                <p>Building responsive and interactive user interfaces with modern frameworks like React, Angular, and Vue.js.</p>
            </div>
            <div className={styles.service}>
            <i><FaServer /></i>
                <h3>Back-end Development</h3>
                <p>Developing robust and scalable server-side applications using Node.js, Express.js, Python, or PHP.</p>
            </div>
            <div className={styles.service}>
            <i><FaDatabase /></i>
                <h3>Database Management</h3>
                <p>Designing and optimizing databases using MongoDB, MySQL, PostgreSQL, or other database systems.</p>
            </div>
            <div className={styles.service}>
            <i><FaCloud /></i>
                <h3>Cloud Deployment</h3>
                <p>Deploying and managing applications on cloud platforms like AWS, Azure, or Google Cloud.</p>
            </div>
            <div className={styles.service}>
            <i><FaGitAlt /></i>
                <h3>Version Control</h3>
                <p>Collaborating with teams using Git and platforms like GitHub or GitLab for version control and code management.</p>
            </div>
            <div className={styles.service}>
            <i><FaReact /></i>
                <h3>Single Page Applications</h3>
                <p>Building modern, responsive, and performant single-page applications using React, React Native, or Next.js.</p>
            </div>
            <div className={styles.service}>
            <i><TbApi /></i>
                <h3>API Development</h3>
                <p>Designing and implementing RESTful APIs for seamless integration with various applications and services.</p>
            </div>
            <div className={styles.service}>
            <i><VscDebugConsole /></i>
                <h3>Testing and Debugging</h3>
                <p>Ensuring code quality through unit testing, integration testing, and end-to-end testing, as well as debugging and troubleshooting applications.</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default service