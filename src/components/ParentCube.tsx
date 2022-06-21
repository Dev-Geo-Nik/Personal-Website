
import React, { Suspense, useRef } from "react";
import { Cube } from "./Cube";
import { js,react,typescript,html,css,figma,webpack,sass,git,three, reactSpring, gatsby, strapi } from '../util/images';
import { Mesh } from "three";
import { useFrame } from "@react-three/fiber";



 interface HomeProps {
    
    isToggled:boolean,
  
}

  

  export function ParentCube({isToggled}:HomeProps){
    // const {clock} = useThree();
  
  
  
    const ref = useRef<Mesh>()
  
      useFrame(()=>{
  
        if (ref.current != null) {
          ref.current.rotation.x += 0.001
          ref.current.rotation.y += 0.001
         
            //  ref.current.position.y = Math.sin(clock.getElapsedTime()) * bounceY;
            // ref.current.position.x = Math.sin(clock.getElapsedTime()) * bounceX;
            // ref.current.position.z = Math.sin(clock.getElapsedTime()) * bounceZ;


        }
      })
  
    return(
     
  
   
     
      
      <mesh ref={ref} >
          <boxGeometry  attach='geometry' />
          <meshStandardMaterial  transparent={true} opacity={0}/>
            {/*X Y Z */}

           <Cube img={react} position={[-2,2,0]} rotationX={0.01} rotationY={0.01}  rotationZ={0.01} wireframe={isToggled? true:false} /> 
           <Cube img={typescript} position={[2,-4,2]} rotationX={0.01} rotationY={0.01}  rotationZ={0.00} wireframe={isToggled? true:false} />
           <Cube img={gatsby} position={[-2,-4,2]} rotationX={0.01} rotationY={0.01}  rotationZ={0.00} wireframe={isToggled? true:false} />
           <Cube img={strapi} position={[0,0,4]} rotationX={0.01} rotationY={0.01}  rotationZ={0.00} wireframe={isToggled? true:false} />

           <Cube img={js} position={[4,4,2]} rotationX={0.01} rotationY={0.01}  rotationZ={0.01} wireframe={isToggled? true:false} /> 
          <Cube img={html} position={[-5,-5,-5]} rotationX={0.01} rotationY={0.00}  rotationZ={0.01} wireframe={isToggled? true:false} />
          <Cube img={css} position={[-2,2,5]} rotationX={0.00} rotationY={0.01}  rotationZ={0.01} wireframe={isToggled? true:false} />
          <Cube img={webpack} position={[3,0,2]} rotationX={0.01} rotationY={0.00}  rotationZ={0.00} wireframe={isToggled? true:false} />
          <Cube img={sass} position={[-6,0,2]} rotationX={0.00} rotationY={0.01}  rotationZ={0.00} wireframe={isToggled? true:false} />
          <Cube img={git} position={[6,-2,0]} rotationX={0.01} rotationY={0.01}  rotationZ={0.00} wireframe={isToggled? true:false} />
          <Cube img={three} position={[-1,6,0]} rotationX={0.01} rotationY={0.00}  rotationZ={0.00} wireframe={isToggled? true:false} />      
         <Cube img={reactSpring} position={[-4,5,0]} rotationX={0.01} rotationY={0.00}  rotationZ={0.00} wireframe={isToggled? true:false} />        
      </mesh>
       
      
  
      
    )
  }