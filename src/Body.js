import React from 'react';
import styled from 'styled-components';
import MyImage from './images/google_cap_pic.jpeg'; 
import WTMLogo from './images/wtm_logo.jpeg'; 
import GoogleLogo from  './images/google.png'; 
import Progress from './Progress.js'
import ProjectCard1 from './ProjectCards/ProjectCard1.js';
import ProjectCard2 from './ProjectCards/ProjectCard2.js';
import ProjectCard3 from './ProjectCards/ProjectCard3.js';
import ProjectCard4 from './ProjectCards/ProjectCard4.js';
import ProjectCard5 from './ProjectCards/ProjectCard5.js';
import ProjectCard6 from './ProjectCards/ProjectCard6.js';
import ProjectCard7 from './ProjectCards/ProjectCard7.js';


import './App.css';

function Body() {
  return (
    <div>
        <BodyBox>
          <Heading>
            <h1 id="about">About Me</h1>
          </Heading>
          <AboutMe>
              <p>
              Hey there! I am Naazleen, a final-year student pursuing my bachelor's degree in Computer Science at Vasireddy Venkatadri Institue of Technology(VVIT). 
              I have been a part of the Women Techmakers Engineering Fellows program by Talent sprint and supported by Google.
              I interned at Google for Summer 2022, worked with Flex (Resource and Infrastructure Optimization) team, and built a tracing tool that helps SREs debug complicated request call flows. I enjoy solving problems, learning new technologies, and building cool projects. 
              When I am not thinking about code, I usually spend time with my family and friends.
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
              <center><table>
                <tr>
              <Skill>
                  <td><h2>Python</h2></td>
                  <td><p><Progress done="90"/></p></td>
              </Skill>
              </tr>

              <tr>
                <Skill>
                  <td><h2>C, C++</h2></td>
                  <td><p><Progress done="90"/></p></td>
                </Skill>
              </tr>
              <tr>
              <Skill>
                <td><h2>Java</h2></td>
                <td><p><Progress done="85"/></p></td>
              </Skill>
              </tr>
              <tr>
              <Skill>
                <td><h2>SQL</h2></td>
                <td><p><Progress done="80"/></p></td>
              </Skill>
              </tr>
              <tr>
              <Skill>
                <td><h2>HTML, CSS, JS</h2></td>
                <td><p><Progress done="85"/></p></td>
              </Skill>
              </tr>
              <tr>
              <Skill>
                <td><h2>ReactJs and AngularJs</h2></td>
                <td><p><Progress done="65"/></p></td>
              </Skill>
              </tr>
              <tr>
              <Skill>
                <td><h2>Spring boot</h2></td>
                <td><p><Progress done="60"/></p></td>
              </Skill>
              </tr>
              <tr>
              <Skill>
                <td><h2>Git/GitHub</h2></td>
                <td><p><Progress done="90"/></p></td>
              </Skill>
              </tr>
              </table></center>
          </Skills>

          <Experiences>
              <Heading2>
                  <h1>Experience</h1>
              </Heading2>

              <ExperienceCards>


              <ExperienceCard>
                    <img src={GoogleLogo} alt="Google image"/>
                    <div>
                        <h1>SWE Intern, Google</h1>
                        <p>May - July 2022</p>
                        <ul>
                          <li> Worked with Flex(Resource & Infrastructure Optimization Technology) Team</li>
                          <li>Built a visualization tool that improves Traceability across the systems, enables to perform request-level debugging, gives a high-level architectural view of system calls flow and dependencies, enables monitoring of the System Reliability by defining System Health.</li>
                          <li>This tool helps SREs and on-callers to have better visibility of system performance, observe traffic patterns, and helps in debugging the complicated request call flows.</li>
                          <li>Learnt various internal tools and technologies like Building RPC services, Protocol buffers, JUnit, Mockito, Guice DI frameworks, Datastores, D3.js library and many core java libraries.</li>
                        </ul>
                    </div>
                </ExperienceCard>

                <ExperienceCard>
                    <img src={WTMLogo} alt="WTEF image"/>
                    <div>
                        <h1>Women Techmakers Engineering Fellow</h1>
                        <p>2019 - 2022</p>
                        <p>Selected as one of the 126 participants out of 15,000 applicants in the Women TechMakers Engineering Fellows initiative by Google and TalentSprint. This is a 2 years program, combination of boot camps, live online classes, ongoing mentorship, certification, and team-based projects to enhance problem-solving and computational thinking.</p>
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
            <ProjectCards>
              <ProjectCard>
                <ProjectCard4/>
              </ProjectCard>
              <ProjectCard>
                <ProjectCard5/>
              </ProjectCard>
              <ProjectCard>
                <ProjectCard6/>
              </ProjectCard>
            </ProjectCards>
            <ProjectCards>
              <ProjectCard>
                <ProjectCard7/>
              </ProjectCard>
            </ProjectCards>
          </Projects>

          <Heading>
                  <h1>Contact Me!</h1>
          </Heading>

          <ContactMe>
            <Form>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScJy3LHSFf5ksGSvgAO8BoCoijIlI6NeGasO3h2unqMlzZYUA/viewform?embedded=true" width="100%" height="800" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </Form>
          </ContactMe>


          <End>
              <p> Made with ❤, By Naazleen </p>
          </End>

        </BodyBox>
    </div>
  );
}


export default Body;

const BodyBox = styled.div`
    background-color: white;
`

const Heading = styled.div`
    color: #612897;
    h1 {
      text-align: center;
    }
    padding-top: 30px;
`

const AboutMe = styled.div`
    max-width:90%;
    margin: 0 auto;
    padding-bottom: 40px;
    display: flex;

    p {
      font-size: 1vm;
      padding-left: 5%;
      padding-top: 30px;
    }
`
const Education = styled.div`
`

const Heading2 = styled.div`
    color: #612897;
    h1 {
      text-align: center;
    }
`

const Cards = styled.div`
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 20px;
    padding-bottom: 20px;
`

const EduCard = styled.div`
    border: 5px solid #8946A6;
    color: #090030;
    background-color: #F4BEEE;
    padding: 2%;
    margin: 2%;
    border-radius: 20px;
`

const Skills = styled.div`
  padding-bottom: 70px;
  max-width:90%;
  margin: 0 auto;
  color: #612897;

  td {
    width: 40%;
  }
`

const Skill = styled.div`
  display: flex;
  padding-top: 2%;

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
  padding-top: 10px;

  @media (max-width: 1000px)
  {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const ProjectCard = styled.div`
  padding-left: 3%;
  padding-right: 3%;
  padding-top: 20px;
  padding-bottom: 20px;
`

const Experiences = styled.div`
  justify-content: center;
`

const ExperienceCards = styled.div`
  max-width:90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 20px;
  padding-bottom: 20px;
  color: 090030;
`

const ExperienceCard = styled.div`
  display: flex;
  border: 5px solid #8946A6;
  background-color: #F4BEEE;
  border-radius: 20px;
  padding: 3%;
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

const End = styled.div`
    background-color: #612897;
    color: #DAE1E7;
    p {
      text-align: center;
    }
    padding-top: 25px;
    padding-bottom: 25px;
`

const ContactMe = styled.div`
  padding-top: 30px;
  align-items: center;
  justify-content center;
`

const Form = styled.div`
  overflow: hidden;
`