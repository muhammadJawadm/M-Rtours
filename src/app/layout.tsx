import { Manrope, Work_Sans, Kalam } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "slick-carousel/slick/slick.css";
import "./assets/main.css";
import Header1 from "./Components/Header/Header1";
import Footer1 from "./Components/Footer/Footer1";
import Script from "next/script";

// import "./assets/custom.css"; // Add this line to import our custom styles

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--body-color-font',
});

const work_sans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--body-color-font',
});

const kalam = Kalam({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--heading-font',
});

export const metadata = {
  title: {
    absolute: '',
    default: 'M-RTours - Travel & Tour Agency ',
    template: '%s | M-RTours - Travel & Tour Agency ',
  },
  description: 'M-RTours - Travel & Tour Agency',
  openGraph: {
    title: 'M-RTours - Travel & Tour Agency ',
    description: 'M-RTours - Travel & Tour Agency ',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Themeservices" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* Analytics script (replace GA_MEASUREMENT_ID or swap with your own snippet) */}
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
        <Script id="analytics-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </head>
      <body className={`${manrope.variable} ${work_sans.variable} ${kalam.variable}`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-56NMKPP2"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <div className='main-page-area3'>
          <Header1></Header1>
          {children}
          <Footer1></Footer1>
        </div>
      </body>
    </html>
  );
}
