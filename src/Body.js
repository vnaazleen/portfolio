import React from 'react';
import styled from 'styled-components';
import MyImage from './images/naazleen.png'; 
import WTMLogo from './images/wtm_logo.jpeg'; 
import WiproLogo from  './images/wipro_logo.PNG'; 
import Progress from './Progress.js'
import ProjectCard1 from './ProjectCard1.js';
import ProjectCard2 from './ProjectCard2.js';
import ProjectCard3 from './ProjectCard3.js';
import './App.css';

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
                Hi! I'm Vaseem Naazleen. You may know me as Naazleen. 
                Some special people might even know me as Naaz. 
                I am currently a second-year student of Computer Science 
                and I got introduced to the world of coding more than 2 years ago.
                 I enjoy solving puzzles and taking part in coding competitions. 
                 My interests are web development and data science.
              </p>
          </AboutMe>

          <Education>

          <Heading2>
            <h1>Education</h1>
          </Heading2>

          <Cards>
            <EduCard>
                <div>
                    <h2> B.Tech in Computer science </h2>
                    <p>Vasireddy Venkatadri Institue of Technology, Andhra Pradesh, India</p>
                    <p>2019 - Present | CGPA : 9.0</p>
                </div>
            </EduCard>

            <EduCard>
                <div>
                    <h2> Class XII </h2>
                    <p>Bhashyam Junior College, Andhra Pradesh, India</p>
                    <p>2017 - 2019 | GPA : 9.45</p>
                </div>
            </EduCard>

            <EduCard>
                <div>
                    <h2> Class X </h2>
                    <p>Bhashyam Public School, Andhra Pradesh, India</p>
                    <p>2016 - 2017 | GPA : 9.5</p>
                </div>
            </EduCard>
          </Cards>

          </Education>

          <Skills>
              <Heading>
                  <h1>Skills</h1>
              </Heading>

              <Skill>
                  <h2>Python</h2>
                  <p><Progress done="90"/></p>
              </Skill>

              <Skill>
                  <h2>C, C++</h2>
                  <p><Progress done="80"/></p>
              </Skill>

              <Skill>
                  <h2>Java</h2>
                  <p><Progress done="70"/></p>
              </Skill>

              <Skill>
                  <h2>Git,SQL</h2>
                  <p><Progress done="70"/></p>
              </Skill>

              <Skill>
                  <h2>HTML, CSS, JS</h2>
                  <p><Progress done="60"/></p>
              </Skill>
          </Skills>

          <Experiences>
              <Heading2>
                  <h1>Experience</h1>
              </Heading2>

              <ExperienceCards>
                <ExperienceCard>
                    <img src={WTMLogo} alt="WTEF image"/>
                    <div>
                        <h1>Women Techmakers Engineering Fellow</h1>
                        <p>Selected as one of the 126 participants out of 15,000 applicants in the Women TechMakers Engineering Fellows initiative by Google and TalentSprint. This is a 2 years program, combination of boot camps, live online classes, ongoing mentorship, certification, and team-based projects to enhance problem-solving and computational thinking.</p>
                    </div>
                </ExperienceCard>

                <ExperienceCard>
                    <img src={WiproLogo} alt="Wipro image"/>
                    <div>
                        <h1>Wipro Talent Next Trainee, 2021</h1>
                        <p>I am selected as a trainee under the Wipro program named as "TalentNext - FutureSkill 2021"..</p>
                    </div>
                </ExperienceCard>
              </ExperienceCards>
          </Experiences>

          <Projects>
            <Heading>
                  <h1>Projects</h1>
            </Heading>
            <ProjectCards>
              <ProjectCard>
                <ProjectCard1/>
              </ProjectCard>
              <ProjectCard>
                <ProjectCard2/>
              </ProjectCard>
              <ProjectCard>
                <ProjectCard3/>
              </ProjectCard>
            </ProjectCards>
          </Projects>

        </BodyBox>
    </div>
  );
}


export default Body;

const BodyBox = styled.div`
    background-color: #DAE1E7;
`

const Heading = styled.div`
    color: #090030;
    h1 {
      text-align: center;
    }
    padding-top: 50px;
`

const AboutMe = styled.div`
    max-width:90%;
    margin: 0 auto;
    padding-top: 50px;
    padding-bottom: 40px;
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
const Education = styled.div`
    background-color: #090030;
`

const Heading2 = styled.div`
    color: #FFFFFF;
    h1 {
      text-align: center;
    }
    padding-top: 50px;
`

const Cards = styled.div`
    padding: 5%;
`

const EduCard = styled.div`
    border: 5px solid #090030;
    background-color: #DAE1E7;
    padding: 2%;
    margin: 2%;
`

const Skills = styled.div`
  padding-bottom: 70px;
  max-width:90%;
  margin: 0 auto;
`

const Skill = styled.div`
  display: flex;
  padding-top: 5%;
  justify-content: center;

  @media (min-width: 750px) {
    p {
      padding-left: 20%;
    }
  }

  @media (max-width: 700px)
  {
    flex-direction: column;
  }
`

const Projects = styled.div`
`

const ProjectCards = styled.div`
  display: flex;
  max-width:90%;
  margin: 0 auto;

  @media (max-width: 1000px)
  {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const ProjectCard = styled.div`
  padding: 5%;
`

const Experiences = styled.div`
  justify-content: center;
  background-color: #090030;
`

const ExperienceCards = styled.div`
  max-width:90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 5%;
`

const ExperienceCard = styled.div`
  display: flex;
  border: 10px solid #090030;
  background-color: #DAE1E7;
  padding: 2%;
  margin: 2%;
  img {
      height: 120px;
  }

  div {
    align-items: center;
    justify-content: center;
    padding-left: 2%;
  }

  @media (max-width: 900px)
  {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`