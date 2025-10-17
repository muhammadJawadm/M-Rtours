'use client';

import Image from 'next/image';
import Link from 'next/link';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../lib/firebase';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

interface BlogDetail {
  id: string;
  img: string;
  title: string;
  date: string;
  month: string;
  author: string;
  category: string;
  content?: string;
  description?: string;
}

const BlogDetails = () => {
  const params = useParams();
  // Fix potential param parsing issue - ensure we're getting the correct ID format
  const blogId = typeof params.id === 'string' ? params.id : Array.isArray(params.id) ? params.id[0] : '';
  
  const [blog, setBlog] = useState<BlogDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogDetail = async () => {
      if (!blogId) {
        setError('Blog ID not found');
        setLoading(false);
        return;
      }

      try {
        console.log('Fetching blog with ID:', blogId); // Debug the actual ID being used
        const blogDoc = doc(db, 'blogs', blogId);
        const blogSnapshot = await getDoc(blogDoc);
        
        if (blogSnapshot.exists()) {
          const data = blogSnapshot.data();
          console.log('Fetched blog data:', data); // Debug log
          
          // Normalize data to handle inconsistent field names and ensure all required fields have values
          setBlog({
            id: blogSnapshot.id,
            img: data.img || data.image || data.imageUrl || '', // Handle different image field names
            title: data.title?.trim() || data['title ']?.trim() || '',
            date: data.date || new Date().getDate().toString(),
            month: data.month?.trim() || data['month ']?.trim() || new Date().toLocaleString('default', { month: 'short' }),
            author: data.author?.trim() || data['author ']?.trim() || 'Admin',
            category: data.category?.trim() || data['category ']?.trim() || 'General',
            content: data.content || data['content '] || data.body || data.text || '',
            description: data.description || data['description '] || data.summary || ''
          });
        } else {
          console.error('Blog document not found for ID:', blogId);
          setError('Blog not found');
        }
      } catch (err) {
        console.error('Error fetching blog details:', err);
        setError('Failed to load blog details');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogDetail();
  }, [blogId]);

  if (loading) {
    return (
      <section className="blog-details-section section-padding">
        <div className="container">
          <div className="text-center">
            <p>Loading blog details...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error || !blog) {
    return (
      <section className="blog-details-section section-padding">
        <div className="container">
          <div className="text-center">
            <h3>{error || 'Blog not found'}</h3>
            <Link href="/blog" className="theme-btn mt-4">
              Back to Blogs
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="blog-details-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="blog-details-wrapper">
              {/* Featured Image */}
              <div className="blog-details-image">
                <Image 
                  src={`/${blog.img}`} 
                  alt={blog.title}
                  width={800}
                  height={500}
                  className="w-100"
                />
              </div>

              {/* Blog Meta */}
              <div className="blog-meta mt-4">
                <ul className="post-meta">
                  <li className="post">
                    {blog.date}<span>{blog.month}</span>
                  </li>
                  <li>
                    <i className="bi bi-person"></i>
                    By {blog.author}
                  </li>
                  <li>
                    <i className="bi bi-tag-fill"></i>
                    {blog.category}
                  </li>
                </ul>
              </div>

              {/* Blog Title */}
              <h4 className="blog-title mt-3 mb-4">{blog.title}</h4>

              {/* Blog Description */}
              {blog.description && (
                <div className="blog-description mb-4">
                  <p className="lead">{blog.description}</p>
                </div>
              )}

              {/* Blog Content */}
              {blog.content && (
                <div className="blog-content">
                  <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                </div>
              )}

              {/* Back to Blogs Button */}
              <div className="mt-5">
                <Link href="/blog" className="link-btn">
                  <i className="bi bi-arrow-left"></i> Back to Blogs
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            <div className="blog-sidebar">
              {/* Recent Posts or other sidebar content can go here */}
              <div className="sidebar-widget">
                <h4 className="widget-title">Blog Information</h4>
                <div className="widget-content">
                  <p><strong>Category:</strong> {blog.category}</p>
                  <p><strong>Author:</strong> {blog.author}</p>
                  <p><strong>Published:</strong> {blog.date} {blog.month}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;