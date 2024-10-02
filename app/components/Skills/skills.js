import styles from './skills.module.css'

const skills = () => {
  return (
    <>
    <div className={styles.container}>
<div className={styles.skills}>
        <h1 className={styles.skl}>MY SKILLS</h1>
        <p className={`${styles.skl} ${styles.sklLine}`}>_________</p>
        <div className={`${styles.htmlProg} ${styles.ProgWidth}`}>
          <div className={styles.p}>
            <p>HTML</p>
            <p>95%</p>
          </div>
          <div className={styles.pp}>
            <div className={styles.skillDiv}>
              <span className={`${styles.skillBar} ${styles.htmlBar}`}></span>
            </div>
          </div>
        </div>
        <div className={`${styles.cssProg} ${styles.ProgWidth}`}>
          <div className={styles.p}>
            <p>CSS3</p>
            <p>90%</p>
          </div>
          <div className={styles.pp}>
            <div className={styles.skillDiv}>
              <span className={`${styles.skillBar} ${styles.cssBar}`}></span>
            </div>
          </div>
        </div>
        <div className={`${styles.jsProg} ${styles.ProgWidth}`}>
          <div className={styles.p}>
            <p>JavaScript</p>
            <p>75%</p>
          </div>
          <div className={styles.pp}>
            <div className={styles.skillDiv}>
              <span className={`${styles.skillBar} ${styles.jsBar}`}></span>
            </div>
          </div>
        </div>
        <div className={`${styles.javaProg} ${styles.ProgWidth}`}>
          <div className={styles.p}>
            <p>Nextjs</p>
            <p>85%</p>
          </div>
          <div className={styles.pp}>
            <div className={styles.skillDiv}>
              <span className={`${styles.skillBar} ${styles.javaBar}`}></span>
            </div>
          </div>
        </div>
        <div className={`${styles.ccpProg} ${styles.ProgWidth}`}>
          <div className={styles.p}>
            <p>Sanity</p>
            <p>80%</p>
          </div>
          <div className={styles.pp}>
            <div className={styles.skillDiv}>
              <span className={`${styles.skillBar} ${styles.ccpBar}`}></span>
            </div>
          </div>
        </div>
        <div className={`${styles.reactProg} ${styles.ProgWidth}`}>
          <div className={styles.p}>
            <p>React</p>
            <p>70%</p>
          </div>
          <div className={styles.pp}>
            <div className={styles.skillDiv}>
              <span className={`${styles.skillBar} ${styles.reactBar}`}></span>
            </div>
          </div>
        </div>
        <div className={`${styles.nodeProg} ${styles.ProgWidth}`}>
          <div className={styles.p}>
            <p>Node.js</p>
            <p>35%</p>
          </div>
          <div className={styles.pp}>
            <div className={styles.skillDiv}>
              <span className={`${styles.skillBar} ${styles.nodeBar}`}></span>
            </div>
          </div>
        </div>
        <div className={`${styles.sqlProg} ${styles.ProgWidth}`}>
          <div className={styles.p}>
            <p>Database</p>
            <p>85%</p>
          </div>
          <div className={styles.pp}>
            <div className={styles.skillDiv}>
              <span className={`${styles.skillBar} ${styles.sqlBar}`}></span>
            </div>
          </div>
        </div>

        <div className={`${styles.sqlProg} ${styles.ProgWidth}`}>
          <div className={styles.p}>
            <p>MongoDB</p>
            <p>85%</p>
          </div>
          <div className={styles.pp}>
            <div className={styles.skillDiv}>
              <span className={`${styles.skillBar} ${styles.sqlBar}`}></span>
            </div>
          </div>
        </div>

        <div className={`${styles.sqlProg} ${styles.ProgWidth}`}>
          <div className={styles.p}>
            <p>React Native</p>
            <p>85%</p>
          </div>
          <div className={styles.pp}>
            <div className={styles.skillDiv}>
              <span className={`${styles.skillBar} ${styles.sqlBar}`}></span>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default skills
