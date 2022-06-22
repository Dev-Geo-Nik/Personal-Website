import React from 'react';
import styled from 'styled-components';
import Benchmark from './Benchmark';
import Buttons from './Buttons';
import Description from './Description';
import Slideshow from './Slideshow';
import Stack from './Stack';

const  Hotburger :React.FC = () => {

  return (
<Wrapper>
    
              <div className="title-container">
                <h4>01. HOT<span>BURGER</span></h4>
                  <h4 className="type">E-Commerce Restaurant </h4>
              </div>
              <Slideshow/>
            <div className="benchmark-container">
              <Benchmark  percent="99" title="Mobile Benchmark"/>
              <Benchmark  percent="99" title="Desktop Benchmark"/>
              <Benchmark   percent="86" title="Seo Benchmark"/> 
            </div>
            <Description/>
            <Stack/>
            <p className="note">Note:* to use stripe checkout use the following details. email: test@gmail.com, card information: 4242 4242 4242 4242 , expiration date: 12/28 , cvv: 123 , name: test.</p>
            <Buttons/>
    
        
</Wrapper>
);
};

export default Hotburger;


const Wrapper = styled.div`
  margin: 5rem  auto  0 auto;
  max-width:60rem;


  
  h4{
    /* color: var(--clr-primary-1); */
    color: #fff;
    font-size: 1.1rem;
  }

  span{
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
  .note{
    color:#fff;
    font-size: 1.4rem;
  }


  /* 1400px */
@media only screen and (max-width:87.5em) {

}

  /* 1024px - 769px  */
  @media only screen and (max-width:64em) {
    margin: 0.5rem auto;
    /* max-width:50rem; */
  
}

`