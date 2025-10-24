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
  const isContactPage = pathname === '/about';

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

    {/* Add custom CSS for contact page header */}
    <style jsx global>{`
      .contact-header .cs_nav .cs_nav_list > li > a {
        color: #000 !important;
      }
      
      .contact-header .cs_nav .cs_nav_list > li > a:hover {
        color: #000 !important;
      }

      /* Only black for contact page, other pages remain as they were */
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
