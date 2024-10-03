import { useEffect, useState } from "react";
import { client } from "../../client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";

const Blog = () => {
  const [blogData, setBlogData] = useState([]);
  const [count, setCount] = useState(2);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Initialize image URL builder
  const builder = imageUrlBuilder(client);

  function urlFor(source) {
    return builder.image(source); // No need for `.url()` here, just return the image
  }

  useEffect(() => {
    async function getBlog() {
      try {
        const query = `*[_type == 'blog']`;
        const data = await client.fetch(query);

        if (!data) {
          console.warn("Failed to fetch blog data");
        } else {
          setBlogData(data);
        }
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    }

    getBlog();
  }, [count]);

  return (
    <section className="achievements">
      <div className="achievements-content">
        <h2>Achievements</h2>
        <div className="achievements-list">
          {blogData.map((blogPost, index) => (
            <div
              key={blogPost._id}
              className="achievement-item"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <span className="achievement-number">{index + 1}</span>
              <p>{blogPost.title}</p>

              {/* Hover image */}
              {hoveredIndex === index && blogPost.poster && (
                <a href={urlFor(blogPost.poster).url()}>
                <div className="image_container">
                  <Image
                    src={urlFor(blogPost.poster).url()} // Properly fetch the image URL
                    width={100}
                    height={100}
                    alt="Image"
                  />
                </div>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .achievements {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 40px;
        }

        .achievements-content {
          width: 100%;
          padding: 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        h2 {
          font-size: 2em;
          margin-bottom: 20px;
          color: #333;
        }

        .achievements-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          width: 100%;
        }

        .achievement-item {
          position: relative; /* Enable relative positioning */
          display: flex;
          align-items: flex-start;
          border: 1px solid #ddd;
          padding: 15px;
          border-radius: 8px;
          background-color: #f9f9f9;
          cursor: pointer;
        }

        .achievement-number {
          font-size: 1.5em;
          font-weight: bold;
          color: #111;
          margin-right: 10px;
          background-color: #e0e0e0;
          border-radius: 50%;
          width: 70px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .achievement-item p {
          color: #555;
          margin: 0;
        }

        @media (max-width: 600px) {
          .achievements-content {
            padding: 20px;
          }

          h2 {
            font-size: 1.5em;
          }

          .achievement-number {
            width: 30px;
            height: 30px;
          }
        }

        .image_container {
          position: absolute;
          top: -8rem; /* Adjust based on desired position */
          left: 30%;
          transform: translateX(-50%);
          width: auto;
          height: auto;
          background-color: white;
          padding: 1rem;
          border: 1px solid #ccc;
          border-radius: 8px;
          box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
          z-index: 1000;
          display: block;
        }
      `}</style>
    </section>
  );
};

export default Blog;
