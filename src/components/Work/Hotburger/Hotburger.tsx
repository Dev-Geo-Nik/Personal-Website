import React from 'react';
import styled from 'styled-components';
import Slideshow from './Slideshow';

const  Hotburger :React.FC = () => {

  return (
<Wrapper>
          <div className="container">
             <h3>01. HOT<span>BURGER</span></h3>
              <p className="type">E-Commerce Restaurant </p>
          </div>
        <Slideshow/>
     
        
</Wrapper>
);
};

export default Hotburger;


const Wrapper = styled.div`
  margin: 5rem auto;
  width: 50%;

  
  h3{
    /* color: var(--clr-primary-1); */
    color: #fff;
  }

  span{
    color:#DB9F4B;
  }

  
  .container{
    display: flex;
    justify-content:space-between;
    margin-bottom: 1rem;
  }
  .type{
    color:#fff;
    background-color: var(--clr-primary-4);
    padding: 0.4rem;
    font-weight: bold;
    border-radius: 5px;
  }

`