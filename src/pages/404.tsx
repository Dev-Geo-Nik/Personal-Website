import React, { useState, useEffect, Suspense, lazy } from 'react';
import SEO from '../components/Seo';

const ThreeCanvas = lazy(() => import('../components/Error'));

const  ErrorPage :React.FC = () => {

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
 <section>
   <SEO title='Not found'/>
    { !isMounted ? null : (
      <Suspense fallback={null}>
        <ThreeCanvas />
      </Suspense>
    )}
  </section>
);
};

export default ErrorPage;