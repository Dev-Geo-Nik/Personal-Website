import React from 'react';

import HamburgerMenu from '../components/HamburgerMenu';
import Work from '../components/Work/Work';

const  work :React.FC = () => {

  return (
<>  
     <HamburgerMenu  styles={{position: 'absolute',top:"2rem",right:"4rem"}}/>
    <Work/>
</>
);
};

export default work;



