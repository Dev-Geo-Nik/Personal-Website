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
  font-size: 1.3rem;
  padding: 0.6rem 1rem;
  border-radius: 5px;
  transition: var(--transition);
}

.icons{
    margin-right: 0.5rem;
    font-size: 1.3rem;
  
}
.app-link{
    margin-right:2rem;
    background-color:var(--clr-primary-2);

    &:hover{
        background-color:var(--clr-primary-4);
    }
}

.github-link{
    background-color:#24292F;

    &:hover{
        background-color:#555b63;
    }
}
/* 600 */
@media only screen and (max-width:37.5em) {
     
        a{
            font-size: 1rem;
            padding: 0.4rem 1rem;
        }
        .icons{
            margin-right: 0.5rem;
            font-size: 1rem;
        
        }

        .app-link{
            margin-right: 0.5rem;
        }
    }


@media only screen and (max-width:22.5em) {
     
        a,.icons{
            font-size: 0.8rem;
           
        }

       
    }

`