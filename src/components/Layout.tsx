import React from 'react';
// import Menu from './Menu';
import "../assets/css/main.css";
import HamburgerMenu from './HamburgerMenu';


const  Layout :React.FC = ({children}) => {

  return (
<>
    <HamburgerMenu/>
    {children}
</>
);
};

export default Layout;