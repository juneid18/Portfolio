'use client'
import React, { useEffect, useState } from 'react';
import styles from './Blog.module.css';
import { client } from '../../sanity/client'; 
import imageUrlBuilder from '@sanity/image-url';
import PortableText from "react-portable-text"
import { FaLinkedin , FaTwitter , FaGithub } from "react-icons/fa";
import Image from 'next/image';


const Page = ({ searchParams }) => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    async function getBlog() {
      try {
        const query = `*[_type == 'blog' && _id == '${searchParams.ID}']`;
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

    getBlog()
      .then((data) => setBlogData(data))
      .catch((error) => console.error('Error setting blog data:', error));
  }, [searchParams]);
  const builder = imageUrlBuilder(client);

  function urlFor(source) {
    return builder.image(source);
  }
  return (
    <>
      <div id='top' className={styles.container}>
        {blogData.map((blogPost, index) => (
          <div key={index} className={styles.row}>
          <div className={styles.header} style={{
            backgroundImage: `url("${urlFor(blogPost.poster.asset._ref).url()}")`, 
            backgroundSize: 'cover',
            backgroundPosition: 'center',    
          }}>
          <h2>{blogPost.title}</h2>
        </div>
        <div className={styles.columncontainer}>
            <div className={styles.leftcolumn}>
              <div className={styles.card}>
                <h2>{blogPost.title}</h2>
                <h4>{blogPost.metadescription}</h4>
                <span>Published At: {new Date(blogPost._createdAt).toLocaleDateString()}</span>

              </div>
              <div className={styles.card}>
  <PortableText
  // Pass in block content straight from Sanity.io
  content={blogPost.body || 'No Content Founded'}
  projectId="zmklohac"
  dataset="production"
  serializers={{
    h1: (props) => <h1 style={{fontSize: "2rem", marginBottom: "1rem" }} {...props} />,
    p: (props) => <p style={{ fontSize: "1.1rem", marginBottom: "1rem" }} {...props} />,
    ul: (props) => <ul style={{ marginBottom: "1rem" }} {...props} />,
    li: (props) => <li style={{ marginBottom: "0.5rem" }} {...props} />,
    Image: (props) => <Image width={500} height={200} alt='Blog' {...props} />,
  }}
/>
</div>
            </div>
            
            <div className={styles.rightcolumn}>
              <div className={styles.card}>
                <h3 style={{textDecoration: 'underline'}}>Follow Me</h3>
                <a href="https://www.linkedin.com/in/juneid-shaikh/" className={styles.socialbtn}>
                <FaLinkedin />
                </a>
                <a href="https://x.com/Juneidshaikh18?t=4w1-K7AXflxO848dM-5pqg&s=09" className={styles.socialbtn}>
                <FaTwitter />
                </a>
                <a href="https://github.com/juneid18" className={styles.socialbtn}>
                <FaGithub />
                </a>
              </div>

              <div className={styles.card}>
                <h3>Author</h3>
                <div className={styles.authorInfo}>
    <p className={styles.authorDetail}>Name: Juneid Shaikh</p>
    <p className={styles.authorDetail}>Email: prof.juneidshaikh18@gmail.com</p>
    <p className={styles.authorDetail}>Location: Satara Maharashtra, India</p>
  </div>
              </div>
            </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.footer}>
          <span><i>Created by</i> Juneid Shaikh</span>
          <a href='#top' style={{float:'right', color:"white"}}>Move to Top</a>
        </div>
    </>
  );
};

export default Page;
