// import React, { useState, useEffect, Suspense, lazy } from 'react';
// import SEO from './Seo';


// const ThreeCanvas = lazy(() => import('./About'));
// const  about :React.FC = () => {
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);
//   return (
//     <section>
//     <SEO title='About'/>
//     { !isMounted ? null : (
//       <Suspense fallback={null}>
//         <ThreeCanvas />
//       </Suspense>
//     )}
//   </section>
// );
// };

// export default about;