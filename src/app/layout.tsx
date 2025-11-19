import React from "react";
import { Manrope, Work_Sans, Kalam } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "slick-carousel/slick/slick.css";
import "./assets/main.css";
import Header1 from "./Components/Header/Header1";
import Footer1 from "./Components/Footer/Footer1";
import Script from "next/script";
import GtmRouterEvents from "../components/GtmRouterEvents";

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Themeservices" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <Script id="gtm-script" strategy="beforeInteractive">{`
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-56NMKPP2');
`}</Script>
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
        <GtmRouterEvents />
        <div className='main-page-area3'>
          <Header1></Header1>
          {children}
          <Footer1></Footer1>
        </div>
      </body>
    </html>
  );
}
