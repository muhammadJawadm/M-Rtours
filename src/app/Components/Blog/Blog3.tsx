import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Blog3 = () => {

  const blogContent = [
  {
    img: "/assets/img/blog/Pic1.png",
    title: "•	How to Prepare for Umrah in 2025 — A UK Traveller’s Checklist",
  },
  {
    img: "/assets/img/blog/Pic2.png",
    title: "•	Ramadan Umrah: Best Practices & Dates for 2025",
  },
  {
    img: "/assets/img/blog/Pic3.png",
    title: "•	Traveling for Umrah with Family — Tips & Packing Guide",
  },
];


    return (
        <section className="news-section-3 section-padding pb-0 fix">
            <div className="top-shape float-bob-y">
                <Image src="/assets/img/news/plane-shape.png" alt="img" width={343} height={205}   />
            </div>
            <div className="container">
                <div className="section-title text-center">
                    <span className="sub-title wow fadeInUp">
                        News & Updates
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".2s">
                        Recent Blog Posts
                    </h2>
                </div>
                <div className="row">
                {blogContent.map((item, i) => (
                    <div key={i} className="col-xl-4 col-md-6 col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="news-card-items-3 style-4">
                            <div className="news-image">
                                <Image src={item.img} alt="img" width={416} height={347}   />
                            </div>
                            <div className="news-content">
                                <ul className="post-meta">
                                    <li className="post">26<span>Nov</span></li>
                                    <li>
                                    <i className="bi bi-person"></i>
                                        By Admin
                                    </li>
                                    <li>
                                    <i className="bi bi-tag-fill"></i>
                                        Travel
                                    </li>
                                </ul>
                                <h4>
                                <Link href="/blog/blog-details">
                                    {item.title}
                                    </Link>
                                </h4>
                                <Link href="/blog/blog-details" className="link-btn">Read More <i className="bi bi-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    ))}
 

                </div>
            </div>
        </section>

    );
};

export default Blog3;