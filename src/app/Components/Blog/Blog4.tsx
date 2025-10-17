'use client';

import Image from 'next/image';
import Link from 'next/link';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../lib/firebase';
import { useEffect, useState } from 'react';

interface BlogPost {
  id: string;
  img: string;
  title: string;
  date: string;
  month: string;
  author: string;
  category: string;
}

const Blog4 = () => {
  const [blogContent, setBlogContent] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogsCollection = collection(db, 'blogs');
        const blogsSnapshot = await getDocs(blogsCollection);
        
        const blogsData: BlogPost[] = [];
        blogsSnapshot.forEach((doc) => {
          const data = doc.data();
          blogsData.push({
            id: doc.id,
            img: data.img || '',
            title: data.title?.trim() || data['title ']?.trim() || '',
            date: data.date || '',
            month: data.month?.trim() || data['month ']?.trim() || '',
            author: data.author?.trim() || data['author ']?.trim() || 'Admin',
            category: data.category?.trim() || data['category ']?.trim() || 'General'
          });
        });
        
        setBlogContent(blogsData);
      } catch (err) {
        console.error('Error fetching blogs:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <section className="news-section section-padding fix">
        <div className="container">
          <div className="text-center">
            <p>Loading blogs...</p>
          </div>
        </div>
      </section>
    );
  }

  if (blogContent.length === 0) {
    return (
      <section className="news-section section-padding fix">
        <div className="container">
          <div className="text-center">
            <p>No blogs available at the moment.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="news-section section-padding fix">
      <div className="container">
        <div className="row g-4">
          {blogContent.map((item) => (
            <div key={item.id} className="col-xl-4 col-md-6 col-lg-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="news-card-items-3 style-4">
                <div className="news-image">
                  <Image 
                    src={item.img} 
                    alt={item.title} 
                    width={416} 
                    height={347}
                  />
                </div>
                <div className="news-content">
                  <ul className="post-meta">
                    <li className="post">
                      {item.date}<span>{item.month}</span>
                    </li>
                    <li>
                      <i className="bi bi-person"></i>
                      By {item.author}
                    </li>
                    <li>
                      <i className="bi bi-tag-fill"></i>
                      {item.category}
                    </li>
                  </ul>
                  <h4>
                    <Link href={`/blog/blog-details/${item.id}`}>
                      {item.title}
                    </Link>
                  </h4>
                  <Link href={`/blog/blog-details/${item.id}`} className="link-btn">
                    Read More <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog4;