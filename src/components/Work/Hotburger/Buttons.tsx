import React from 'react';
import styled from 'styled-components';
import { FaExternalLinkAlt, FaGithubSquare } from "react-icons/fa";

const  Buttons :React.FC = () => {

  return (
<Wrapper> 
         <a className="app-link" href="https://hotburger-restaurant.netlify.app/" target="_blank"><FaExternalLinkAlt className="icons icon-website"/>Visit the app</a>
        <a   className="github-link" href="https://github.com/Dev-Geo-Nik/HOTBURGER" target="_blank"><FaGithubSquare className="icons icon-github"/>Source code</a>   
</Wrapper>
);
};

export default Buttons;


const Wrapper = styled.div`
display: flex;
margin-top: 2rem;
padding-bottom: 5rem;

a{
  text-decoration:none;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  color:#fff;
  font-size: 1.4rem;
  padding: 0.4rem 1rem;
  border-radius: 5px;
  transition: var(--transition);
}

.icons{
    margin-right: 0.5rem;
    font-size: 1.4rem;
  
}
.app-link{
    margin-right:2rem;
    background-color:#DB9F4B;

    &:hover{
        background-color:#eeb059;
    }
}

.github-link{
    background-color:#24292F;

    &:hover{
        background-color:#363a3f;
    }
}

`