import { Link } from 'gatsby';
import React from 'react';

import { BsArrowRight } from 'react-icons/bs';
import styled from 'styled-components';

interface Props{
    onClickHandler:()=>void
    setHovered:React.Dispatch<React.SetStateAction<boolean>>
    hovered:boolean
}

const  Links :React.FC<Props> = (props) => {

    const {onClickHandler,setHovered,hovered} = props;

  return (
<LinksElement >
         
        <ul className="list-container">
                
               <Link className="link" to="/" onClick={onClickHandler}    activeClassName="active"> Home </Link>
               <Link className="link" to="/work" onClick={onClickHandler}    activeClassName="active"> Work </Link>
        
       
        </ul>
        
</LinksElement >
);
};

export default Links;


const LinksElement = styled.div`
   

  .list-container{
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    }




    .link{
        display: block;
        text-decoration:none; 
        text-align: center;
        width: 20rem;
        color:#000;
        background-color:var(--clr-primary-2);

        padding: 0.8rem 1.2rem;
        border-radius: 2px;
        margin-bottom: 2rem;
      &:hover{
        background-color:var(--clr-primary-3);

      }
    }

    
    .active{
      display: none;
      
    }
  

`

