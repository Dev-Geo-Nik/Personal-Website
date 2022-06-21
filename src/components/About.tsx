import React, { Suspense } from 'react';
import { Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';
import { Cube } from './Cube';
import { html, js, react,css, typescript, webpack, figma, sass, three, reactSpring, git, gatsby, strapi } from '../util/images';


const  About :React.FC = () => {

  return (
<AboutElement >

    


        <Canvas  className="canvas"  camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 10] } } >
            <ambientLight intensity={1}/>
            <Stars/>
                {/*X Y Z */}
                
              <Cube img={react} position={[0, -2 , 0]} rotationX={0.01} rotationY={0.00} rotationZ={0.00} bounceZ={4} />
              <Cube img={js} position={[0, 0 , 0]} rotationX={0.01} rotationY={0.00} rotationZ={0.00} bounceZ={3} />
              <Cube img={html} position={[-1.5, -2 , 0]} rotationX={0.01} rotationY={0.00} rotationZ={0.00} bounceZ={2} />
              <Cube img={css} position={[-3, -2 , 0]} rotationX={0.01} rotationY={0.00} rotationZ={0.00} bounceZ={3} />
              <Cube img={typescript} position={[-2, 0 , 0]} rotationX={0.01} rotationY={0.00} rotationZ={0.00} bounceZ={2} />
              <Cube img={webpack} position={[2, -2 , 0]} rotationX={0.01} rotationY={0.00} rotationZ={0.00} bounceZ={3} />
              <Cube img={figma} position={[1, -4 , 0]} rotationX={0.01} rotationY={0.00} rotationZ={0.00} bounceZ={4} />
              <Cube img={sass} position={[-1, -4 , 0]} rotationX={0.01} rotationY={0.00} rotationZ={0.00} bounceZ={2} />
              <Cube img={three} position={[-3, -4 , 0]} rotationX={0.01} rotationY={0.00} rotationZ={0.00} bounceZ={3} />
              <Cube img={reactSpring} position={[2, 0 , 0]} rotationX={0.01} rotationY={0.00} rotationZ={0.00} bounceZ={2} />
              <Cube img={git} position={[3, -4 , 0]} rotationX={0.01} rotationY={0.00} rotationZ={0.00} bounceZ={3} /> 
              <Cube img={strapi} position={[4, -2 , 0]} rotationX={0.01} rotationY={0.00} rotationZ={0.00} bounceZ={3} /> 
              <Cube img={gatsby} position={[5, -4 , 0]} rotationX={0.01} rotationY={0.00} rotationZ={0.00} bounceZ={3} /> 
                
        </Canvas>
          

        

      <div className="html-container">
       <p className="text-container">
         Hello, I'm <span className="name">George Nikolaidis</span> a front-end web developer located in Austria. I m very interested in technology and web development is my one of my passions.
         I am a curious guy who likes learning new stuff and try to be better every day.I'm interested to work on ambitious projects with positive people solving real world problems.   
         </p>
          <div className="text-technologies-container">
              <p className="text-technologies-title">Skills </p>
               <p className="text-technologies">
                 HTML ,CSS ,SASS ,GIT ,FIGMA ,JAVASCRIPT ,TYPESCRIPT ,REACT.JS ,WEBPACK ,THREE.JS ,SPRING.JS
                  
                 </p>
               
           </div>
            
     
      </div>
</AboutElement >
);
};

export default About;


const AboutElement = styled.div`

    min-height:100vh;

    .canvas {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 3;
        height: 100vh;
        background:black;
        min-height:100vh;
       
    }

    .html-container{
      position: absolute;
        top: 30%;
        left: 50%;
        transform:translate(-50%, -30%); 
        color: #fff;
        z-index: 3;
         background: rgba(0,0,0,0.4);
        font-family:monospace;
      
    }
    .text-container{
      font-size:1.5rem;
      /* letter-spacing:0.1rem ; */
 
    }
    .name{
      color:#587ce0;
    }
    
    
    .text-technologies-title{
      margin-top:5rem;
      font-size:1.3rem;
      letter-spacing:0.1rem ;

      margin-bottom:1rem;
    }
    
    .text-technologies{
      color:#f5f6f8;
      font-size:1rem;
      
    }

    @media (max-width: 1000px) {
      .html-container{
        top: 10%;
        left:  5%;
        right: 5%;
        transform:translate(0, 80%); 
      
        }
    }
    @media (max-width: 650px) {
      .text-container{
        font-size:1.3rem
      }

      .html-container{
        top: 10%;
        left:  5%;
        right: 5%;
        transform:translate(0, 40%); 
      
        }
    }
    
`