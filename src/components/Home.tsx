import React,{useState} from 'react';
import styled from 'styled-components';
import {Canvas} from "@react-three/fiber"
import {CameraShake, Stars} from "@react-three/drei";
import { BsToggle2Off, BsToggle2On ,BsArrowRight} from "react-icons/bs";
import { BsCameraVideoFill,BsCameraVideoOffFill } from "react-icons/bs";
import {Link} from "gatsby";
import { ParentCube } from './ParentCube';
import { StaticImage } from 'gatsby-plugin-image';
import HamburgerMenu from './HamburgerMenu';







const  Home :React.FC = () => {

    const [isToggled,setIsToggled] = useState(false); 
    const [camera,setCamera] = useState(true); 

        
  return (
    <HomeElement >
        <HamburgerMenu/>
        <Canvas  className="canvas"  camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 10]  }} >   
           <ambientLight intensity={1}/>
           {camera && <CameraShake/> }
           <Stars/>
          <ParentCube isToggled = {isToggled} />   
        </Canvas >
         
        <div className="icons-container">
             
            {isToggled ?  <BsToggle2On className="toggle-off toggle-btn" onClick={()=>setIsToggled(!isToggled)}/> :<BsToggle2Off className="toggle-off toggle-btn" onClick={()=>setIsToggled(!isToggled)}/>}
            {camera ?  <BsCameraVideoFill className="toggle-on-camera toggle-camera" onClick={()=>setCamera(false)}/>:<BsCameraVideoOffFill className="toggle-off-camera toggle-camera" onClick={()=>setCamera(true)}/> }
            <a href="https://github.com/Dev-Geo-Nik" target="_blank">
                <StaticImage src='../assets/images/github.png' alt='github image' className="images github-image" />
            </a> 
             <a href="https://www.linkedin.com/in/georgios-nikolaidis-61b040211/" target="_blank">
                  <StaticImage src='../assets/images/linkedin.png' alt='github image'  className="images linkedin-image" />
            </a>
       </div>
        <div className="html-container">
            <div className="h1-tag-open"></div>
            <h1 className="title">Hello, I'm <span className="name">George Nikolaidis</span> a front-end web developer."Welcome to my portfolio".</h1>
            <div className="links-container">
                <Link to='/projects' className='links link-btn'><span className="text-btn">View my projects</span>  <BsArrowRight  className="arrow-icon"/></Link>
            </div>
        </div>
   
        
    </HomeElement>
   );
};


export default Home;


const HomeElement = styled.div`
    height:100vh ;
    position: relative;

    .canvas {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 2;
        /* height: 100vh; */
        background:#000 ;
        /* min-height:500vh ; */
       /* background: #333; */
    }



  
    .html-container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 3;
        /* background:rgba(0, 0, 0, 0.1); */
        /* padding: 1rem; */
       
      
    }

    .title {
        text-align: center;
        font-size: 1.7rem;
        color:#fff;
        font-family: monospace;
    }
    
    .name{
       color:var(--clr-primary-2);

    }

    .icons-container{
        position: absolute;
        gap:1rem;
        top:5rem;
        right: 1rem;
        z-index: 2;
        display:flex;
        flex-direction: column;
        
      
        color:#fff;  
        /* background: orange; */
      
    }
    .toggle-btn{
        font-size:2rem;
        transition: var(--transition);
        cursor: pointer;
    }
    
    .toggle-btn:hover{
   
          color:var(--clr-primary-3);
        scale:1.1;
    }
    
    .links-container{
        display:flex;
        justify-content:center;
    }
    
    .toggle-camera{
        font-size:2rem;
        transition: var(--transition);
       cursor: pointer;
    }

    .toggle-camera:hover{
     
        color:var(--clr-primary-3);
        scale:1.1;
       
    }

    

    .links{
        text-decoration:none;
        display: inline-block;
        color: #fff;
        padding: 0.8rem 1.2rem;
        background:green;
        margin-top: 2rem;
        
     
      
    }

    .link-btn{
        background:transparent;
        border:2px solid #fff;
        transition:var(--transition) ;
        display:flex;
        align-items:center;
   
        
    }

    .text-btn{
        font-size:1.4rem;
        margin-right:0.4rem;
        font-family:monospace;
   
    }

    .arrow-icon{
        font-size:1.8rem;
        transition: var(--transition);
    }

    .link-btn:hover{
     
        background-color:var(--clr-primary-2);
        font-weight:bold; 
        transform: translateY(0.5rem) ;
        
        .arrow-icon{
            transform:rotate(180deg) ;
            /* color:#a4e5a0; */
       }



    }

    .test{
        position: absolute;
        bottom: 0;
        /* right: 0; */
        color:red;
        z-index: 2;
     
    }

    .images{
        width:2rem;
        border-radius: 5px;
        cursor:pointer;
       
    }


      /* 1024px - 769px  */
    @media only screen and (max-width:64em) {
        .html-container{
            
            width:90%;
        }


    }


    /* 600 */
    @media only screen and (max-width:37.5em) {
        .title,.name{
            font-size:1.3rem;
        }

        .text-btn,.arrow-icon{
        font-size:1.2rem;
     
   
    }

    }
 `
