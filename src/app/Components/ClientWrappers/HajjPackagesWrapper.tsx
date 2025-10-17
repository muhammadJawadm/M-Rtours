"use client"

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const HajjPackages = dynamic(
  () => import('../Hajj-Package/HajjPackages'),
  { ssr: false }
);

const HajjPackagesWrapper = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Only render the component client-side to prevent hydration issues
  if (!mounted) {
    return <div style={{ minHeight: '200px' }}>Loading Hajj packages...</div>;
  }
  
  return <HajjPackages />;
};

export default HajjPackagesWrapper;
