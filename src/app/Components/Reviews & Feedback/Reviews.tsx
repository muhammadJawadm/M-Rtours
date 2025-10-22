import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Review {
  id: number;
  name: string;
  location: string;
  packageDetails: string;
  image: string;
  review: string;
}

const ClientReviews: React.FC = () => {
  const reviews: Review[] = [
    {
      id: 1,
      name: "Zainab",
      location: "Bradford",
      packageDetails: "7 Nights, 5 Star Umrah Package",
      image: "/assets/img/avatar/avatar1.jpg", // Add default avatar path
      review: "When I saw the Ka'bah, my heart just broke open, and I cried like a child. MR Tours made it so easy, with a beautiful hotel right by the Haram and a team that felt like family. They guided me through my first Umrah with so much care. I found a peace I'll hold onto forever."
    },
    {
      id: 2,
      name: "Omar",
      location: "London",
      packageDetails: "15 Nights, 3 Star Umrah Package",
      image: "",
      review: "I wanted my kids to feel the magic of Madinah, and MR Tours made it happen. Even when my little one got sick, their team jumped in like they were our own, getting us a doctor fast. Those extra days praying together as a family? That's a gift we'll always treasure."
    },
    {
      id: 3,
      name: "Amina",
      location: "Birmingham",
      packageDetails: "10 Nights, 4 Star Umrah Package",
      image: "",
      review: "Taking my mom, who's getting older, was scary, but MR Tours had our backs. They got us a room close to the mosque and helped with a wheelchair. Seeing her face light up as we prayed together healed something in me. They made our dream come true with so much kindness."
    },
    {
      id: 4,
      name: "Yusuf",
      location: "Manchester",
      packageDetails: "7 Nights, 3 Star Umrah Package",
      image: "",
      review: "Going alone felt daunting, but MR Tours made me feel like I belonged. Their guides showed me every step, and the affordable package meant I could pray without worrying about money. Standing in Arafat, I felt like a new person, thanks to their quiet support."
    },
    {
      id: 5,
      name: "Layla",
      location: "Sheffield",
      packageDetails: "15 Nights, 5 Star Umrah Package",
      image: "",
      review: "After a tough year, I needed Umrah to find myself again. MR Tours wrapped me in care, from smooth flights to a cozy hotel. Praying in Masjid an-Nabawi, I felt my heart mend, like Allah was right there with me. Their team made it feel so personal, like they knew my story."
    },
    {
      id: 6,
      name: "Bilal",
      location: "Cardiff",
      packageDetails: "10 Nights, 4 Star Umrah Package",
      image: "",
      review: "I went to honor my grandma's wish for me to see Makkah. MR Tours made it special, sharing stories about the holy sites that brought them to life. Every prayer felt deeper because they took care of everything. I felt her love with me, and that's because of MR Tours."
    }
  ];

  const pilgrimLoves = [
    {
      id: 1,
      title: "Warm, Family-Like Care",
      description: "Our team treats you like one of our own, making every moment personal."
    },
    {
      id: 2,
      title: "Focus on Faith",
      description: "We handle the details so you can lose yourself in prayer and dua."
    },
    {
      id: 3,
      title: "Comfort for Everyone",
      description: "From kids to grandparents, our packages make Umrah easy for all."
    },
    {
      id: 4,
      title: "Affordable Dreams",
      description: "Budget to luxury options, so your heart can follow its call."
    }
  ];

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 64px 16px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
        }

        .title {
          font-size: 3rem;
          font-weight: 700;
          text-align: center;
          color: #111827;
          margin-bottom: 16px;
        }

        .subtitle {
          font-size: 1.5rem;
          font-weight: 600;
          text-align: center;
          color: #28AAE2;
          margin-bottom: 16px;
        }

        .description {
          text-align: center;
          color: #6B7280;
          font-size: 1.125rem;
          line-height: 1.75;
          margin-bottom: 64px;
          max-width: 896px;
          margin-left: auto;
          margin-right: auto;
        }

        .section-title {
          font-size: 2rem;
          font-weight: 700;
          text-align: center;
          color: #111827;
          margin-bottom: 24px;
          margin-top: 48px;
        }

        .reviews-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
        }

        @media (min-width: 768px) {
          .reviews-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .reviews-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .review-card {
          background-color: #F9FAFB;
          border-radius: 12px;
          padding: 32px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .review-card:hover {
          box-shadow: 0 8px 25px rgba(40, 170, 226, 0.15);
          transform: translateY(-5px);
        }

        .review-header {
          display: flex;
          align-items: center;
          margin-bottom: 24px;
        }

        .avatar {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          object-fit: cover;
          margin-right: 16px;
        }

        .reviewer-info {
          display: flex;
          flex-direction: column;
        }

        .reviewer-name {
          font-weight: 600;
          color: #111827;
          font-size: 1.125rem;
          margin-bottom: 4px;
        }

        .reviewer-location {
          color: #6B7280;
          font-size: 1rem;
        }
        
        .package-details {
          color: #28AAE2;
          font-size: 0.9rem;
          font-weight: 500;
          margin-top: 4px;
        }

        .review-text {
          color: #4B5563;
          line-height: 1.75;
          font-size: 1rem;
          flex-grow: 1;
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          max-width: 896px;
          margin: 0 auto 64px;
        }
        
        @media (min-width: 768px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        .feature-card {
          background-color: #FFFFFF;
          border-left: 4px solid #28AAE2;
          border-radius: 8px;
          padding: 24px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        
        .feature-title {
          font-weight: 600;
          color: #111827;
          font-size: 1.25rem;
          margin-bottom: 8px;
        }
        
        .feature-description {
          color: #6B7280;
          line-height: 1.6;
        }
        
        .cta-container {
          text-align: center;
          margin-top: 48px;
          padding: 32px;
          background-color: #F9FAFB;
          border-radius: 12px;
        }
        
        .cta-text {
          font-size: 1.25rem;
          color: #4B5563;
          margin-bottom: 24px;
          line-height: 1.6;
        }
        
        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        
        .cta-button {
          display: inline-block;
          padding: 12px 24px;
          background-color: #28AAE2;
          color: white;
          text-decoration: none;
          border-radius: 8px;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        
        .cta-button:hover {
          background-color: #1d8bb8;
          transform: translateY(-2px);
        }
        
        .cta-button.secondary {
          background-color: white;
          color: #28AAE2;
          border: 2px solid #28AAE2;
        }
        
        .cta-button.secondary:hover {
          background-color: #f0f9ff;
        }

        @media (max-width: 767px) {
          .title {
            font-size: 2rem;
          }
          
          .subtitle {
            font-size: 1.25rem;
          }
          
          .description {
            font-size: 1rem;
          }
          
          .section-title {
            font-size: 1.5rem;
          }
          
          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .cta-button {
            width: 100%;
            max-width: 280px;
            text-align: center;
          }
        }
      `}</style>

      <div className="container">
        <h1 className="title">
          Reviews and Feedback
        </h1>
        <h2 className="subtitle">
          Voices of Our Pilgrims
        </h2>
        <p className="description">
          At MR Tours, Umrah isn&apos;t just a trip; it&apos;s a journey that changes hearts. Our pilgrims share their stories below, 
          filled with love, faith, and moments they&apos;ll never forget. These are real people who trusted us with their sacred Umrah, 
          and we&apos;re honored to share their words.
        </p>

        <h3 className="section-title">Pilgrim Stories</h3>
        <div className="reviews-grid">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                {review.image ? (
                  <Image 
                    src={review.image}
                    alt={`${review.name} from ${review.location}`}
                    width={64}
                    height={64}
                    className="avatar"
                    style={{objectFit: 'cover', borderRadius: '50%'}}
                  />
                ) : (
                  <div className="avatar-placeholder">
                    {review.name.charAt(0)}
                  </div>
                )}
                <div className="reviewer-info">
                  <h3 className="reviewer-name">
                    {review.name}
                  </h3>
                  <p className="reviewer-location">
                    {review.location}
                  </p>
                  <p className="package-details">
                    {review.packageDetails}
                  </p>
                </div>
              </div>
              <p className="review-text">
                &quot;{review.review}&quot;
              </p>
            </div>
          ))}
        </div>

        <h3 className="section-title">What Our Pilgrims Love</h3>
        <p className="description" style={{ marginBottom: '36px' }}>
          Here&apos;s what keeps them coming back:
        </p>
        <div className="features-grid">
          {pilgrimLoves.map((feature) => (
            <div key={feature.id} className="feature-card">
              <h4 className="feature-title">{feature.title}</h4>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="cta-container">
          <p className="cta-text">
            Moved by Their Words? Share Your Story or Explore Umrah Packages to start your own sacred journey with MR Tours.
          </p>
          <div className="cta-buttons">
            <Link href="/Umrah-packages" className="cta-button">
              Explore Umrah Packages
            </Link>
            <Link href="/contact" className="cta-button secondary">
              Share Your Story
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientReviews;