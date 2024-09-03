import { useEffect, useState } from 'react';
import styles from './projects.module.css'
import { client } from '../../client'; 
import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link';

const ProjectsPage = () => {
  const [ProjectData, setProjectData] = useState([]);

  useEffect(() => {
    async function getProject() {
      try {
        const query = `*[_type == 'project'][0..3]`;
        const data = await client.fetch(query);
        
        if (!data) {
          console.warn('Failed to fetch project data');
        }
        
        return data;
      } catch (error) {
        console.error('Error fetching project data:', error);
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
      <h1>Projects</h1>

      <div className={styles.grid_container}>
        {ProjectData.map((project, index) => (
          <Link href='./Project'
            key={index}
            className={`${styles.grid_item} ${styles[`item${index + 1}`]}`}
            style={{ backgroundImage: `url(${urlFor(project.poster).url()})`, textDecoration:'none'}}
          >
            <div className={styles.detail}>
              <h2>{project.title}</h2>
              <p>{project.detail}</p>
            </div>
          </Link>
        ))}
      </div>
      <Link style={{display:'flex', justifyContent:'center', textDecoration:'none'}} href='./Project'>
        <button className={styles.viewMore}>
          See More
        </button>
      </Link>
    </div>
    </>
  )
}

export default ProjectsPage;
