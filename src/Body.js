import React from 'react';
import styled from 'styled-components';
import MyImage from './images/naazleen.png'; 

function Body() {
  return (
    <div>
        <BodyBox>
          <Heading>
            <h1>About Me</h1>
          </Heading>
          <AboutMe>
              <img src={MyImage} alt="my image" />
              <p>
                Hi! I'm Vaseem Naazleen Shaik. You may know me as Naazleen. 
                Some special people might even know me as Naaz. 
                I am currently a second-year student of Computer Science 
                and I got introduced to the world of coding more than 2 years ago.
                 I enjoy solving puzzles and taking part in coding competitions. 
                 My interests are web development and data science.
              </p>
          </AboutMe>
        </BodyBox>
    </div>
  );
}


export default Body;

const BodyBox = styled.div`
    max-width:90%;
    margin: 0 auto;
    margin-top: 20px;
`

const Heading = styled.div`
    color: #090030;
    font-family: cursive;
    h1 {
      text-align: center;
    }
    padding-top: 50px;
`

const AboutMe = styled.div`
    padding-top: 50px;
    display: flex;

    p {
      font-size: 1vm;
      font-family: cursive;
      color: #6E7C7C;
      text-align: center;
      padding-left: 20px;
      padding-top: 7%;
    }

    img {
      width: 25%;
      height: 25%
      flex-basis: 40%
    }

    @media (max-width: 700px)
    {
      flex-direction: column;
      align-items: center;
      img {
        padding-bottom: 20px;
      }
    }

    @media (max-width: 700px)
    {
      img {
        width: 70%;
      }
    }
`