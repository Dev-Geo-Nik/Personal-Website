import React from 'react';
import styled from 'styled-components';
import Benchmark from './Benchmark';
import Buttons from './Buttons';
import Description from './Description';
import Note from './Note';
import Slideshow from './Slideshow';
import Stack from './Stack';

const  Hotburger :React.FC = () => {

  return (
<Wrapper>
    
              <div className="title-container">
                <h4>01. HOT<span className="logo-text">BURGER</span></h4>
                  <h4 className="type">E-Commerce Restaurant </h4>
              </div>
              <Slideshow/>
            <div className="benchmark-container">
              <Benchmark  percent="99" title="Mobile Benchmark" />
              <Benchmark  percent="99" title="Desktop Benchmark"/>
              <Benchmark   percent="86" title="Seo Benchmark"/> 
            </div>
            <Description/>
            <Stack/> 
            <Note/>  
            <Buttons/>
    
        
</Wrapper>
);
};

export default Hotburger;
  

const Wrapper = styled.div`
  margin: 5rem  auto  0 auto;
  width: 60%;
  display: flex;
  flex-direction: column;
  /* background-color: red; */

  
  h4{
    /* color: var(--clr-primary-1); */
    color: #fff;
    font-size: 1.1rem;
  }

  .logo-text{
    color:#DB9F4B;
  }

  
  .title-container{
    display: flex;
    justify-content:space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  .type{
    color:#fff;
    background-color: var(--clr-primary-4);
    padding: 0.4rem;
    font-weight: bold;
    border-radius: 5px;
  }

  .benchmark-container{
      display:flex;
      justify-content:space-around;
      padding: 2rem 0;
  }




  /* 1400px */
@media only screen and (max-width:87.5em) {
     width: 80%;
}

  /* 1024px - 769px  */
  @media only screen and (max-width:64em) {
   
    width: 90%;
  
}

 /*768px - 481px */
 @media only screen and (max-width:48em) {
 
  }

  /* 600px - */
 @media only screen and (max-width:37.5em) {
  /* width: 96%; */
  .benchmark-container{    
      flex-direction: column;
   
  
  }
    .type,.logo-text,h4{
      font-size: 1rem;
    }



  }

/* 360px */
  @media only screen and (max-width:22.5em) {
     
     .type,.logo-text,h4{
      font-size: 0.9rem;
    }

    
 }


`