import { useEffect, useState } from 'react';
import styles from './projects.module.css';
import { client } from '../../client'; 
import imageUrlBuilder from '@sanity/image-url';
import Image from 'next/image'

const ProjectsPage = () => {
  const [projectData, setProjectData] = useState([]);
  const [count, setCount] = useState(2);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getProject() {
      setLoading(true);
      setError(null); // Reset error state
      try {
        const query = `*[_type == 'project'][0..${count}]`;
        const data = await client.fetch(query);
        
        if (!data) {
          throw new Error('No data returned');
        }
        
        setProjectData(data);
      } catch (error) {
        console.error('Error fetching project data:', error);
        setError('Failed to load projects. Please try again later.');
      } finally {
        setLoading(false); // Set loading to false whether success or error
      }
    }
    
    getProject();
  }, [count]);
console.log(projectData);

  const handleViewMore = () => {
    setCount(prevCount => prevCount + 8);
  };
  
  const builder = imageUrlBuilder(client);

  function urlFor(source) {
    return builder.image(source);
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Projects</h1>

      {loading && <p>Loading projects...</p>}
      {error && <p className={styles.error}>{error}</p>}

      <div className={styles.grid_container}>
        {projectData.map((project) => (
      <div className={styles.card}>
      <Image src={urlFor(project.poster).url()} width={1000} height={500} alt="Project Poster" style={{backgroundClip: 'content-box' }} />
      <div className={styles.detailcontainer}>
        <h4><b>{project.title}</b></h4>
        <p className={styles.detail}>{project.detail}</p>
        <a href={project.url}><button className={styles.viewLive}>View Live</button></a>
      </div>
    </div>
        ))}

      </div>
      <button className={styles.viewMore} onClick={handleViewMore} disabled={loading}>
        See More
      </button>
    </div>
  );
}

export default ProjectsPage;
