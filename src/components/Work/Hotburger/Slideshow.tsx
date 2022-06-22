import { StaticImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';
import styled from 'styled-components';

const  Slideshow :React.FC = () => {

     const [slideIndex ,setSlideIndex] = useState(1);
    const maxLength = 5;

    const handleClickRight = () => {
        if (maxLength === slideIndex) {
            setSlideIndex(1)
            return;
        }
        setSlideIndex(slideIndex + 1)
    }
    const handleClickLeft = () => {
            if (slideIndex === 1) {
                    setSlideIndex(5)
                    return;
            }
            setSlideIndex(slideIndex - 1)
    }

  return (
<Wrapper>
    <div className="slideshow-container">
        <div className={slideIndex === 1 ? "fade show":"mySlides fade"}>
            {/* <div className="numbertext">1 / 3</div> */}
            <StaticImage src='../../../assets/images/projects/hotburger/menu.png'  alt="hotburger menu page" className="images"/>
            {/* <div className="page-text">Menu Page</div> */}
        </div>

        <div className={slideIndex === 2 ? "fade show":"mySlides fade"}>
            {/* <div className="numbertext">2 / 3</div> */}
            <StaticImage src='../../../assets/images/projects/hotburger/home.png'  alt="hotburger home page" className="images"/>
            {/* <div className="page-text">Home page</div> */}
        </div>

        <div className={slideIndex === 3 ? "fade show":"mySlides fade"}>
            {/* <div className="numbertext">3 / 3</div> */}
            <StaticImage src='../../../assets/images/projects/hotburger/desktop.png'  alt="hotburger desktop benchmark image" className="images"/>
            {/* <div className="page-text">Desktop benchmark</div> */}
        </div>

        <div className={slideIndex === 4 ? "fade show":"mySlides fade"}>
            {/* <div className="numbertext">4 / 4</div> */}
            <StaticImage src='../../../assets/images/projects/hotburger/mobile.png'  alt="hotburger mobile benchmark image" className="images"/>
            {/* <div className="page-text">Mobile benchmark</div> */}
        </div>
        <div className={slideIndex === 5 ? "fade show":"mySlides fade"}>
            {/* <div className="numbertext">5 / 5</div> */}
            <StaticImage src='../../../assets/images/projects/hotburger/seo.png'  alt="hotburger mobile benchmark image" className="images"/>
            {/* <div className="page-text">Seo benchmark</div> */}
        </div>
        {/* <!-- Next and previous buttons --> */}
        <a className="prev" onClick={handleClickLeft}>&#10094;</a>
        <a className="next" onClick={handleClickRight}>&#10095;</a>

        <div className="dots-container">
            <span className={slideIndex === 1 ? "dot active" :"dot"} onClick={()=>setSlideIndex(1)} ></span>
            <span className={slideIndex === 2 ? "dot active" :"dot"} onClick={()=>setSlideIndex(2)} ></span>
            <span className={slideIndex === 3 ? "dot active" :"dot"} onClick={()=>setSlideIndex(3)} ></span>
            <span className={slideIndex === 4 ? "dot active" :"dot"} onClick={()=>setSlideIndex(4)} ></span>
            <span className={slideIndex === 5 ? "dot active" :"dot"} onClick={()=>setSlideIndex(5)} ></span>
      </div>
    </div>
    {/* <!-- The dots/circles --> */}
   
</Wrapper>
);
};

export default Slideshow;


const Wrapper = styled.div`
     margin-bottom: 0rem;


    .slideshow-container{
        max-width: 100%;
        
        position: relative;
     }

    .show{
        display: block;
        width: 100%;
        height:29rem;
        
    }
     /* Hide the images by default */
     .mySlides {
        display: none;
        width: 100%;
        height:29rem;
        
       
        }

    .images{
        width: 100%;
        /* height: 100%; */
        border-radius: 5px;
        
    }

   

    

        /* Next & previous buttons */
        .prev, .next {
        cursor: pointer;
        position: absolute;
        top: 50%;
        width: auto;
        /* margin-top: -22px; */
        padding: 16px;
        color:  var(--clr-primary-3);
        font-weight: bold;
        font-size: 30px;
        transition: 0.6s ease;
        border-radius: 0 3px 3px 0;
        user-select: none;
        }

       .next {
        right: 0;
        border-radius: 3px 0 0 3px;
        }

        .prev:hover, .next:hover {
        background-color: var(--clr-primary-4)
        }

        /* Number text (1/3 etc) */
        .numbertext {
        color:  var(--clr-primary-3);
        font-size: 12px;
        padding: 8px 12px;
        position: absolute;
        top: 0;    
        z-index:2;
      }

      .dots-container{
            text-align: center;
            position: absolute;
            width: 20%;
            bottom: 1rem;
            left: 40%;
            right: 40%;
            z-index: 2;
            display: flex;
            justify-content:space-evenly;
        }


      /* The dots/bullets/indicators */
        .dot {
        cursor: pointer;
        height: 20px;
        width: 20px;
        display: inline-block;
        margin: 0 2px;
        background-color: var(--clr-primary-4);
        border-radius: 50%;
        transition: background-color 0.6s ease;
       
        }

    
        .active{
            background-color: var(--clr-primary-3);
        }

        .dot:hover {
         background-color: var(--clr-primary-5);
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




  /* 1024px - 769px  */
  @media only screen and (max-width:64em) {
       
    }
`