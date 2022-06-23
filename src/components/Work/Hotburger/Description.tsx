import React from 'react';
import styled from 'styled-components';

const  Description :React.FC = () => {

  return (
<Wrapper>
    <h4>About this project</h4>
    <p className="description">
       This is an E-Commerce Restaurant app created for the imaginary company  HOT<span>BURGER</span>.
        The app was created with the following main considerations in mind.
   </p>
    <li>1) To be lightning fast and  responsive on desktop and mobile devices.</li>
    <li>2) User-friendly interface, so customers can easily purchase products.</li>
    <li>3) To be SEO (Search Engine Optimization) optimized through best practices in order to drive more traffic. </li>
</Wrapper>
);
};

export default Description;


const Wrapper = styled.div`
     color:#fff;
    padding: 1rem 0;
    line-height:2rem;

    h4{
        display: inline-block;
        font-size: 1.2rem;
        color:#fff;
        margin-bottom: 1rem;
        background-color: var(--clr-primary-4);
       padding: 0.4rem;
       border-radius: 5px;
    }

    .description{
        font-size: 1.3rem;
    }
    li{
        font-size: 1.3rem;
        list-style: none;
    }

    @media only screen and (max-width:37.5em) {
        li,.description{
            font-size: 1rem;
        }
    }
`
