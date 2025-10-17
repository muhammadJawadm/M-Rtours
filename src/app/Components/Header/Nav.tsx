import Link from 'next/link';
import DropDown from './DropDown';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li >
        <Link href="/">Home</Link>
      </li>

      <li>
        <Link href="/about" onClick={() => setMobileToggle(false)}>
        About Us
        </Link>
      </li>

      <li className="menu-item-has-children">
        <Link href="/" onClick={() => setMobileToggle(false)}>
        Packages
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link href="/Umrah-packages" onClick={() => setMobileToggle(false)}>
            Umrah Packages
              </Link>
            </li>
            <li>
              <Link href="/Hajj-packages" onClick={() => setMobileToggle(false)}>
              Hajj Packages
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>

      {/* <li className="menu-item-has-children">
        <Link href="/tour" onClick={() => setMobileToggle(false)}>
        Hajj Packages
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link href="/tour" onClick={() => setMobileToggle(false)}>
              Package 1
              </Link>
            </li>          
            <li>
              <Link href="/tour/tour-details" onClick={() => setMobileToggle(false)}>
              Package 2
              </Link>
            </li>
          </ul>
        </DropDown>
      </li> 
       */}
      <li >
        <Link href="/beatPrice">Beat My Price</Link>
        {/* <DropDown> */}
          {/* <ul>
            <li>
              <Link href="/activities" onClick={() => setMobileToggle(false)}>
              Activities
              </Link>
            </li> 
            <li>
              <Link href="/activities/activities-details" onClick={() => setMobileToggle(false)}>
              Activities Details
              </Link>
            </li>             
            <li>
              <Link href="/team" onClick={() => setMobileToggle(false)}>
               Our Team
              </Link>
            </li>            
            <li>
              <Link href="/team/team-details" onClick={() => setMobileToggle(false)}>
                Team Details
              </Link>
            </li>                                      
          </ul> */}
        {/* </DropDown> */}
      </li>        

      <li >
        <Link href="/blog" onClick={() => setMobileToggle(false)}>
          Blogs
        </Link>
        
      </li>
      <li>
        <Link href="/contact" onClick={() => setMobileToggle(false)}>
          Contact
        </Link>
      </li>
    </ul>
  );
}
