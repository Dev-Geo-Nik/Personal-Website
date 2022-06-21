import React, {useRef, useState } from "react"
import { useFrame, useLoader, useThree } from "@react-three/fiber"
import { Mesh, TextureLoader } from "three"



interface Props{
    position:[number,number,number],
    color?:string,
    img:any
   
    map?: THREE.Texture | null | undefined,
    wireframe?:boolean,
    rotationX?:number,
    rotationZ?:number,
    rotationY?:number,
    bounceY?:number,
    bounceX?:number,
    bounceZ?:number,
    onClick ?:() => void,

  }



  
 export function Cube ({
    position, 
    img,
    color,

    wireframe ,
    rotationX = 0,
    rotationZ= 0,
    rotationY = 0,
    bounceY=0,
    bounceX=0,
    bounceZ=0

    
    }:Props){
      
    const mesh = useRef<Mesh>(null)
    const image:any = useLoader(TextureLoader, img)

    const [active,setActive] = useState(false);
    const [hovered,setHovered] = useState(false);

    const {scene,clock } = useThree()
  
    useFrame(()=>{
        
    
        if(mesh.current !== null){
            mesh.current.rotation.x = mesh.current.rotation.x + rotationX;
            mesh.current.rotation.z = mesh.current.rotation.z + rotationZ;
            mesh.current.rotation.y = mesh.current.rotation.y + rotationY;

            if(bounceY){

                mesh.current.position.y = Math.sin(clock.getElapsedTime()) * bounceY;
            }

            if(bounceZ){

                mesh.current.position.z = Math.sin(clock.getElapsedTime()) * bounceZ;
               
            }
            
            // mesh.current.position.x = Math.sin(clock.getElapsedTime()) * bounceX;
          
        
        }
    })
  
  
    return(
        
    
            
        <mesh ref={mesh} position={position} scale={hovered? 1.5:1} onPointerOver={()=>setHovered(true)} onPointerOut={()=>setHovered(false)}    >
            <boxGeometry attach='geometry' />
            <meshStandardMaterial attach='material'  map={image} wireframe={wireframe} color={color}/>
        </mesh> 
     
    
    )
  };