import React, { useState, useEffect, Suspense, lazy } from 'react';
// import React, { Suspense } from 'react';
import Home from '../components/Home';
import Seo from '../components/Seo';

const ThreeCanvas = lazy(() => import('../components/Home'));

const  index :React.FC = () =>  {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);


  return (
    <>
    <Seo title="Home"/>
    { !isMounted ? null : (
      <Suspense fallback={null}>
        <ThreeCanvas />
      </Suspense>
    )}
  </>
  )
}

export default index;