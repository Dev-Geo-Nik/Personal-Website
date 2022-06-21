import React, { useState, Suspense } from 'react';
import { CameraShake, Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';
import { Link } from 'gatsby';





const  Error  = () => {

 


  // const [timer, setTimer] = React.useState(10);
  // const id =React.useRef(null);
  // const [redirect ,setRedirect] = useState(true)

  // const clear=()=>{
  //   window.clearInterval(id.current)
  // }

  //   React.useEffect(()=>{

  //     id.current=window.setInterval(()=>{
  //     setTimer((time)=>time-1)
  //   },950)
  //   return ()=>clear();
  // },[])

  // React.useEffect(()=>{
  //   if(timer===0){
  //     clear()
  //   }

  // },[timer])

  return (
<Wrapper>
    
    

   
       <Canvas className="canvas">
          <Stars/>
          <CameraShake/>
      </Canvas>  
    
  
      <div className="html-container">
          <h1> Oops! You ran out of oxygen.</h1>
          <p>The page you're looking for is now beyond our reach. Let's get you back home..</p>
          <div className="btn-container">

          <Link className="btn" to = "/">Home</Link>
          </div>
      </div>  
       <div className="error-code">404</div>
       
</Wrapper>
);
};

export default Error;


const Wrapper = styled.section`

     .canvas {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 2;
        height: 100vh;
        background:#000 ;
        min-height:100vh ;
       /* background: #333; */
    }

    .html-container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 3;
        color:#fff;
        /* background: black; */
        font-family:var(--ff-primary);
      }

      .html-container div{
        font-size:1.5rem;
      }
    h1{
      font-size: 3rem;
    }

    p{
      font-size: 1rem;
      letter-spacing: 0.2rem;
      margin: 2rem 0;
    }

   .timeout{
     display: none;
   }

   .timer{
     color:#75dd6b;
   }

   .error-code{
    position: absolute;
        top: 30%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 3;
        color:#fff;
        font-size: 10rem;
        font-weight: bold;
   }
   .btn-container{
    text-align: center;
   }
   .btn{
     text-decoration: none;
     text-transform: uppercase;
      background-color:var(--clr-primary-2);
      color: #fff;
      padding: 0.8rem 2rem;
      transition: var(--transition); 
      display: inline-block;
      cursor: pointer;
      border: none;
      border-radius: 1rem; 
      font-size: 1.8rem;
      font-weight: bold;

      &:hover{
        background-color:var(--clr-primary-3);
      }
  
   }
`