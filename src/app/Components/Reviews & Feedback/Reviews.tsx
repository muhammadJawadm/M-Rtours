import React from 'react';

interface Review {
  id: number;
  name: string;
  location: string;
  image: string;
  review: string;
}

const ClientReviews: React.FC = () => {
  const reviews: Review[] = [
    {
      id: 1,
      name: "Ahmad Ali",
      location: "London",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      review: "From the moment we arrived, Blessed Tours provided exceptional service. Their team's dedication and expertise made our Umrah seamless and deeply fulfilling."
    },
    {
      id: 2,
      name: "Sarah Khan",
      location: "Birmingham",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      review: "Blessed Tours made my Hajj experience truly unforgettable. Their local knowledge and attention to detail ensured everything went smoothly, allowing me to focus entirely on my journey."
    },
    {
      id: 3,
      name: "Fatima Siddiqui",
      location: "Manchester",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      review: "I was amazed by the level of care and support from Blessed Tours. Their 24/7 assistance and tailored packages made my Hajj stress-free, allowing me to fully embrace the experience."
    },
    {
      id: 4,
      name: "Marium Umair",
      location: "London",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
      review: "Alhamdulillah, it was a beautiful experience. The whole process was easy, from booking to return. The support team was very kind and helpful. Highly recommended!"
    },
    {
      id: 5,
      name: "Khizer Hayat",
      location: "London",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      review: "I was nervous before going, but everything went perfectly. The guidance and support were excellent. They really care about your spiritual journey. Thank you so much!"
    },
    {
      id: 6,
      name: "Muhammad Zubair",
      location: "Glasgow",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
      review: "We had no problems at all. The staff was always available and guided us with patience. It was a blessed and peaceful trip. Would travel again with them."
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
          text-align: center;
          color: #6B7280;
          font-size: 1.125rem;
          line-height: 1.75;
          margin-bottom: 64px;
          max-width: 896px;
          margin-left: auto;
          margin-right: auto;
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
          transition: box-shadow 0.3s ease;
        }

        .review-card:hover {
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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

        .review-text {
          color: #4B5563;
          line-height: 1.75;
          font-size: 1rem;
        }

        @media (max-width: 767px) {
          .title {
            font-size: 2rem;
          }
          
          .subtitle {
            font-size: 1rem;
          }
        }
      `}</style>

      <div className="container">
        <h1 className="title">
          Client Reviews & Feedback
        </h1>
        <p className="subtitle">
          Read heartfelt testimonials from pilgrims who have experienced our exceptional Hajj and Umrah services firsthand.
        </p>

        <div className="reviews-grid">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <img 
                  src={review.image}
                  alt={review.name}
                  className="avatar"
                />
                <div className="reviewer-info">
                  <h3 className="reviewer-name">
                    {review.name}
                  </h3>
                  <p className="reviewer-location">
                    {review.location}
                  </p>
                </div>
              </div>
              <p className="review-text">
                {review.review}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ClientReviews;