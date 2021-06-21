import React from 'react';
import styled from 'styled-components';
import Particles from 'react-particles-js';
import ParticleConfig from "./config/particle-config";
import SocialFollow from "./SocialFollow";
import DownArrow from './images/down_arrow.png'; 
import "./App.css";

function FrontPage() {
    return (
        <div>
        	<HeaderBox>        	
        		<Particles params={ParticleConfig}>
        		</Particles>

        		<ContentBox>
        			<div class="header-text">
        				<LineOne>I M</LineOne>
        				<LineTwo>Vaseem Naazleen Shaik</LineTwo>
        				<LineThree>STUDENT | CODER</LineThree>

        				<SocialFollow/>
        			</div>

        			<div class="down-arrow">
        				<a href="#about">
        					<img src={DownArrow} alt=""/>
        				</a>
        			</div>
        		</ContentBox>
        	</HeaderBox>
      	</div>
    )
}

export default FrontPage;

const HeaderBox = styled.div`
	background-color: #DAE1E7;
`

const ContentBox = styled.div`
	margin-top: -35%;
	margin-left:10%;
	color: white;
	position: absolute;
	justify-content: center;

	img {
		height: 3vw;
		margin-left:45%;
		margin-top: 5%;
	}
`

const LineOne = styled.div`
	font-size: 3vw;
`

const LineTwo = styled.div`
	font-size: 7vw;
`

const LineThree = styled.div`
	font-size: 4vw;
`