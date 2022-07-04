import React from 'react';
import styled from 'styled-components';
import {CircleProgress} from 'react-gradient-progress'

interface Props {
    percent:string;
    title:string;
}

const  Benchmark :React.FC<Props> = ({percent,title}) => {

  return (
<Wrapper>
        <h4>{title}</h4>
        <CircleProgress 
        percentage={percent}
        width="150" 
        strokeWidth={6}
        strokeLinecap="round"
        fontSize="35px"
        fontColor="#00CC66"
        primaryColor={["#00CC66","#34e08a"]}
        // secondaryColor="#d4d4d4"
        fill="#fff"
        className="progress"
         />
</Wrapper>
);
};

export default Benchmark;


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom:1rem;
   
    h4{
        /* text-align:center; */
        margin-bottom: 0.5rem;
    }



`