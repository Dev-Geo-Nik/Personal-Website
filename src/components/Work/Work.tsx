import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import Hotburger from './Hotburger/Hotburger';

const  Work :React.FC = () => {

  return (
<Wrapper>
  
    <Link to="/">
      <StaticImage src='../../assets/images/Logo.png' alt='logo image' className='logo'/>
    </Link>
      <div className="title-container">
        <h1>Projects</h1>
        <div className="line"></div>
      </div>
      

      <Hotburger/>
     
</Wrapper>
);
};

export default Work;


const Wrapper = styled.section`
  /* display:grid;
  grid-template-columns: [full-start] minmax(14rem ,auto)  [col-start] repeat(12, minmax(min-content, 12rem)) minmax(14rem ,auto) [full-end];
  grid-column-gap: 3rem; */

  background-color: var(--clr-primary-5);
  height:100%;



 .logo{
  width: 6rem;
  position:absolute;
  top: 1rem;
  left: 1rem;
 }




  h1{
    text-align: center;
    font-size: 2rem;
    padding-top:10rem;
    font-family: var(--ff-primary);
    margin-bottom:0.5rem;
    color:#fff;
  }

  .line{
    width: 5rem;
    height:0.25rem;
    background-color: var(--clr-primary-2);
    margin:0 auto;

  }

`