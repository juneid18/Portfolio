import { useEffect, useState } from 'react';
import styles from './blog.module.css';
import { client } from '../../sanity/client'; 
import imageUrlBuilder from '@sanity/image-url';
import Link from 'next/link';
import Image from 'next/image';

const Blog = () => {
  const [blogData, setBlogData] = useState([]);
  const [count, setCount] = useState(2);

  useEffect(() => {
    async function getBlog() {
      try {
        const query = `*[_type == 'blog'][0..${count}]`;
        const data = await client.fetch(query);
        
        if (!data) {
          console.warn('Failed to fetch blog data');
        } else {
          setBlogData(data);
        }
      } catch (error) {
        console.error('Error fetching blog data:', error);
      }
    }
    
    getBlog();
  }, [count]);

  const handleViewMore = () => {
    setCount(prevCount => prevCount + 8);
  };

  const builder = imageUrlBuilder(client);

  function urlFor(source) {
    return builder.image(source).url();
  }

  return (
    <div className={styles.main}>
      <h1>Blog</h1>
      <div className={styles.container}>
        {blogData.map((blogPost) => (
          <div key={blogPost._id} className={styles.card}>
            <Link
            style={{textDecoration:'none'}}
              href={{
                pathname: '/Blog', // Ensure the pathname is correct
                query: { ID: blogPost._id },
              }}
              className={styles.link} // Use CSS class for styling
            >
              <div className={styles.card__header}>
                <Image
                  src={urlFor(blogPost.poster.asset._ref) || 'https://media.sproutsocial.com/uploads/2023/03/Blogging-Tips-01.svg'}
                  alt={blogPost.title}
                  className={styles.card__image}
                  width={600}
                  height={200}
                />
              </div>
              <div className={styles.card__body}>
                <h4>{blogPost.title}</h4>
                <p>{blogPost.metadescription}</p>
              </div>
              <div className={styles.card__footer}>
                <span>Published at: {new Date(blogPost._createdAt).toLocaleDateString()}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <button onClick={handleViewMore} className={styles.viewMore}>
        Load More
      </button>
    </div>
  );
};

export default Blog;
