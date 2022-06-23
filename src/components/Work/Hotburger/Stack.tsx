import React from 'react';
import styled from 'styled-components';

const  Stack :React.FC = () => {

  return (
<Wrapper>
    <h4>Technology Stack </h4>
    <div className="stack-container">   
        <div className="front-container">
            <h5>Front-end </h5>
            <ul>
                <li>Figma</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Styled components</li>
                <li>React</li>
                <li>Gatsby</li>
                <li>Typescript</li>
            </ul>
        </div>
        <div className="backend-container">
            <h5>Backend </h5>
            <ul>
                <li>Strapi </li>
                <li>Postgres </li>
                <li>Heroku</li>
                <li>Stripe</li>
                <li>Cloudinary</li>
              
            </ul>
        </div>
  </div>
</Wrapper>
);
};

export default Stack;


const Wrapper = styled.div`
    margin: 1rem 0;
   
h4{
       display: inline-block;
        font-size: 1.2rem;
        color:#fff;
        margin-bottom: 1rem;
        background-color: var(--clr-primary-4);
       padding: 0.4rem;
       border-radius: 5px;
}


    h5{
        color: var(--clr-primary-4);
        margin-bottom: 1rem;

    }

    li{
        margin-left: 1rem;
        line-height: 1.3rem;
  
    }
    .front-container{
        
    }

    .backend-container{
        margin-left: 4rem;
    }
    .stack-container{
     display:flex;
  
     color:#fff;
    }

    @media only screen and (max-width:37.5em) {
        li{
            font-size: 1rem;
          
        }
    }
`