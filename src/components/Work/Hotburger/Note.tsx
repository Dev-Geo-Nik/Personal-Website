import React from 'react';
import styled from 'styled-components';

const  Note :React.FC = () => {

  return (
<Wrapper>
    <h4 className="note-title">Note</h4>
   <p className="note">To use stripe checkout use the following details:</p>
    <ul>
     <li>Email:<span className="note-text"> test@gmail.com </span></li>
     <li>Card information:<span className="note-text"> 4242 4242 4242 4242 </span></li>
     <li>Expiration date:<span className="note-text"> 12/28 </span></li>
     <li>CVV:<span className="note-text"> 123</span> </li>
     <li>Name:<span className="note-text"> test</span></li>
    </ul>
</Wrapper>
);
};

export default Note;


const Wrapper = styled.div`

.note-title{
     display: inline-block;
     font-size: 1.2rem;      
     padding: 0.4rem;
     border-radius: 5px;
     background-color: var(--clr-primary-4);
}
.note{
  color:#fff;
  font-size: 1.2rem;
  margin: 0.5rem 0;
}

.note-text{
    color: var(--clr-primary-4);
  
}

li{
    font-size: 1.2rem; 
      color:#fff; 
      margin-left: 1rem;
    
}

@media only screen and (max-width:37.5em) {
        li,.note{
            font-size: 1rem;
          
        }
    }

`