"use client"
import { useEffect, useState } from 'react';
import Nav from './Nav';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header1({ variant } : any ) {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState<string>("");
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [searchToggle, setSearchToggle] = useState(false);
  const pathname = usePathname();
  
  // Check if current page is contact page
  const isContactPage = pathname === '/about'|| pathname === '/Umrah-packages';

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos) {
        setIsSticky('cs-gescout_sticky'); // Scrolling down
      } else if (currentScrollPos !== 0) {
        setIsSticky('cs-gescout_show cs-gescout_sticky'); // Scrolling up
      } else {
        setIsSticky('');
      }
      setPrevScrollPos(currentScrollPos); // Update previous scroll position
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup the event listener
    };
  }, [prevScrollPos]);

  return (
    <div>
    <header
      className={`cs_site_header header_style_2 header_style_2_0 cs_style_1 header_sticky_style1 ${
        variant ? variant : ''
      } cs_sticky_header cs_site_header_full_width ${
        mobileToggle ? 'cs_mobile_toggle_active' : ''
      } ${isSticky ? isSticky : ''} ${isContactPage ? 'contact-header' : ''}`}
    >
      {/* Top Contact Bar */}
      <div className="cs_top_header">
        <div className="container-fluid">
          <div className="cs_top_header_in">
            <div className="cs_top_header_left">
              <span className="cs_header_contact_text">Need help? Call us:</span>
            </div>
            <div className="cs_top_header_right">
              <div className="cs_top_header_actions">
                <a
                  href="mailto:Info@M-rtours.co.uk?subject=Travel%20Inquiry&body=Hi%2C%20I%20would%20like%20to%20get%20more%20information%20about%20your%20travel%20packages."
                  className="cs_header_contact_link"
                  aria-label="Email us"
                >
                  <i className="bi bi-envelope-fill" aria-hidden="true"></i>
                  <span className="d-none d-md-inline">Info@M-rtours.co.uk</span>
                </a>
                <a
                  href="https://wa.me/447517240405?text=Hi!%20I'd%20like%20to%20inquire%20about%20your%20travel%20packages."
                  className="cs_header_contact_link"
                  aria-label="Chat on WhatsApp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-whatsapp" aria-hidden="true"></i>
                  <span className="d-none d-md-inline">+44 7517 240405</span>
                </a>
                <a href="tel:+442034110076" className="cs_header_contact_link" aria-label="Call us">
                  <i className="bi bi-telephone-fill" aria-hidden="true"></i>
                  <span className="d-none d-md-inline">+44 20 3411 0076</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cs_main_header">
        <div className="container-fluid">
          <div className="cs_main_header_in">
            <div className="cs_main_header_left">
            <Link className="cs_site_branding" href="/">
                <Image src="/assets/img/logo/Logo666x172.svg" alt="img" width={213} height={55}   />
              </Link>
              </div>
              <div className="cs_main_header_center">
                <div className={`cs_nav cs_primary_font fw-medium ${isContactPage ? 'contact-nav' : ''}`}>
                  <span
                    className={
                      mobileToggle
                        ? 'cs-munu_toggle cs_teggle_active'
                        : 'cs-munu_toggle'
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                  <Nav setMobileToggle={setMobileToggle} />
                </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div className={`search-wrap ${searchToggle ? 'active' : ''}`}>
        <div className="search-inner">
            <i onClick={() => setSearchToggle(!searchToggle)} id="search-close" className="bi bi-x-lg search-close"></i>
            <div className="search-cell">
                <form method="get">
                    <div className="search-field-holder">
                        <input type="search" className="main-search-input" placeholder="Search..." />
                    </div>
                </form>
            </div>
        </div>
    </div>

    {/* Add custom CSS for contact page header and top bar */}
    <style jsx global>{`
      /* Top Header Bar Styles */
      .cs_top_header {
        padding: 10px 0;
        font-size: 14px;
        color: #fff;
      }

      .cs_top_header_in {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .cs_header_contact_text {
        color: inherit;
        font-weight: 500;
      }

      .cs_header_contact_number {
        color: white;
        font-weight: 600;
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 8px;
        transition: opacity 0.3s ease;
      }

      .cs_header_contact_number:hover {
        opacity: 0.8;
      }

      .cs_header_contact_number i {
        font-size: 16px;
      }
      /* New top header action links */
      .cs_top_header_actions {
        display: flex;
        align-items: center;
        gap: 18px;
      }
      .cs_header_contact_link {
        color: #fff;
        font-weight: 600;
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 14px;
        transition: opacity .3s ease;
      }
      .cs_header_contact_link i { font-size: 16px; }
      .cs_header_contact_link:hover { opacity: .8; }

      /* Contact page styling for top bar */
      .contact-header .cs_top_header .cs_header_contact_text,
      .contact-header .cs_top_header .cs_header_contact_number,
      .contact-header .cs_top_header .cs_header_contact_link {
        color: #000;
      }

      /* Hide top bar on mobile */
      @media (max-width: 767px) {
        .cs_top_header {
          padding: 8px 0;
        }
        
        .cs_header_contact_text {
          font-size: 12px;
        }

        .cs_header_contact_number {
          font-size: 13px;
        }
        .cs_header_contact_link { font-size: 13px; }
        .cs_top_header_actions { gap: 14px; }
      }

      /* Contact Page Header Styles */
      .contact-header .cs_nav .cs_nav_list > li > a {
        color: #000 !important;
      }
      
      .contact-header .cs_nav .cs_nav_list > li > a:hover {
        color: #000 !important;
      }

      .contact-nav .cs_nav_list .submenu li a {
        color: var(--header) !important;
      }

      .contact-header.cs-gescout_sticky .cs_nav .cs_nav_list > li > a {
        color: #000 !important;
      }
    `}</style>
    </div>
  );
}