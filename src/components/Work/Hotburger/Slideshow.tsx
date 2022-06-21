import { StaticImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';
import styled from 'styled-components';

const  Slideshow :React.FC = () => {

     const [slideIndex ,setSlideIndex] = useState(1);


    const handleClickRight = () => {
        console.log("clicked")
    }
    const handleClickLeft = () => {
        console.log("clicked")
    }

  return (
<Wrapper>
    <div className="slideshow-container">
            <div className="mySlides slide-1 ">
            <div className="numbertext">1 / 3</div>
            <StaticImage src='../../../assets/images/projects/hotburger/menu.png'  alt="hotburger menu page" className="images"/>
            <div className="text">Menu Page</div>
        </div>

        <div className="mySlides ">
            <div className="numbertext">2 / 3</div>
            <StaticImage src='../../../assets/images/projects/hotburger/home.png'  alt="hotburger home page" className="images"/>
            <div className="text">Home Page</div>
        </div>

        <div className="mySlides">
            <div className="numbertext">3 / 3</div>
            <StaticImage src='../../../assets/images/projects/hotburger/desktop.png'  alt="hotburger desktop benchmark image" className="images"/>
            <div className="text">Desktop Benchmark</div>
        </div>

        <div className="mySlides ">
            <div className="numbertext">4 / 4</div>
            <StaticImage src='../../../assets/images/projects/hotburger/mobile.png'  alt="hotburger mobile benchmark image" className="images"/>
            <div className="text">Mobile Benchmark</div>
        </div>
        <div className="mySlides ">
            <div className="numbertext">5 / 5</div>
            <StaticImage src='../../../assets/images/projects/hotburger/seo.png'  alt="hotburger mobile benchmark image" className="images"/>
            <div className="text">Seo Benchmark</div>
        </div>
        {/* <!-- Next and previous buttons --> */}
        <a className="prev" onClick={handleClickLeft}>&#10094;</a>
        <a className="next" onClick={handleClickRight}>&#10095;</a>
    </div>
    {/* <!-- The dots/circles --> */}
    <div style={{textAlign:"center"}}>
        <span className="dot-1"></span>
        <span className="dot-2"></span>
        <span className="dot-3"></span>
        <span className="dot-4"></span>
        <span className="dot-5"></span>
    </div>
</Wrapper>
);
};

export default Slideshow;


const Wrapper = styled.div`
/* background-color: yellow; */


    .slideshow-container{
        max-width: 100%;
        position: relative;
    
        
       
    }

    .images{
        width: 100%;
        /* height: 100%; */
    
        /* display: inline-block; */
    }

    /* Hide the images by default */
        .mySlides {
        display: none;
        width: 100%;
        height: 30rem;
        
       
        }
        .slide-1{
            display: block;
        }

        /* Next & previous buttons */
        .prev, .next {
        cursor: pointer;
        position: absolute;
        top: 50%;
        width: auto;
        margin-top: -22px;
        padding: 16px;
        color: white;
        font-weight: bold;
        font-size: 18px;
        transition: 0.6s ease;
        border-radius: 0 3px 3px 0;
        user-select: none;
        }

       .next {
        right: 0;
        border-radius: 3px 0 0 3px;
        }

        .prev:hover, .next:hover {
        background-color: rgba(0,0,0,0.8);
        }

        /* Number text (1/3 etc) */
        .numbertext {
        color: #f2f2f2;
        font-size: 12px;
        padding: 8px 12px;
        position: absolute;
        top: 0;      
      }

      /* The dots/bullets/indicators */
        .dot {
        cursor: pointer;
        height: 15px;
        width: 15px;
        margin: 0 2px;
        background-color: #bbb;
        border-radius: 50%;
        display: inline-block;
        transition: background-color 0.6s ease;
        }

        

        .active, .dot:hover {
         background-color: #717171;
        }

        /* Fading animation */
        .fade {
        animation-name: fade;
        animation-duration: 1.5s;
        }

        @keyframes fade {
        from {opacity: .4}
        to {opacity: 1}
        }
`