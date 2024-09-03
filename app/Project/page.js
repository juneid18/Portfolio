'use client'
import styles from '../components/Projects/projects.module.css'
import { client } from '../sanity/client'; 
import imageUrlBuilder from '@sanity/image-url'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { IoMdArrowRoundBack } from "react-icons/io";
import Link from 'next/link';

const Page = () => {
  const [ProjectData, setProjectData] = useState([]);


  const handleClick = () => {
    history.go(0);
    };

  useEffect(() => {
    async function getProject() {
      try {
        const query = `*[_type == 'project']`;
        const data = await client.fetch(query);
        
        if (!data) {
          console.warn('Failed to fetch blog data');
        }
        
        return data;
      } catch (error) {
        console.error('Error fetching blog data:', error);
        throw error; 
      }
    }
    
    getProject().then((data) => setProjectData(data)).catch((error) => console.error('Error setting project data:', error));
  }, []);

  const builder = imageUrlBuilder(client)
  
  function urlFor(source) {
    return builder.image(source)
  }
  
  return (
    <>
    <div className={styles.container}>
    <Link href='./' style={{fontSize:'2.5rem', cursor:'pointer', color:'#020202ce'}}><IoMdArrowRoundBack /></Link>
    <h1>Projects</h1>

    <div className={styles.cardcontainer}>
  {ProjectData.map((project, index) => (
    <div key={index} className={styles.card}>
      <Image src={urlFor(project.poster).url()} width={1000} height={500} alt="Project Poster" style={{backgroundClip: 'content-box' }} />
      <div className={styles.detailcontainer}>
        <h4><b>{project.title}</b></h4>
        <p>{project.detail}</p>
        <a href={project.url}><button className={styles.viewLive}>View Live</button></a>
      </div>
    </div>
  ))}
</div>
    </div>
    </>
  )
}

export default Page