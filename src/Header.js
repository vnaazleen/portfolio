import React from 'react';
import styled from 'styled-components';
import Particles from 'react-particles-js';
import ParticleConfig from "./config/particle-config";
import SocialFollow from "./SocialFollow"

function FrontPage() {
    return (
        <div>
        	<HeaderBox>        	
        		<Particles params={ParticleConfig}>
        		</Particles>

        		<ContentBox>
        			<div>
        				<LineOne>I M</LineOne>
        				<LineTwo>Vaseem Naazleen Shaik</LineTwo>
        				<LineThree>STUDENT | CODER</LineThree>

        				<SocialFollow/>
        			</div>
        		</ContentBox>
        	</HeaderBox>
      	</div>
    )
}

export default FrontPage;

const HeaderBox = styled.div`
`

const ContentBox = styled.div`
	margin-top: -35%;
	margin-left:10%;
	color: white;
	position: absolute;
	font-size: 2em;
	font-family: cursive;
`

const LineOne = styled.div`
	margin-left:45%;
	font-size: 3vw;
`

const LineTwo = styled.div`
	font-size: 7vw;
`

const LineThree = styled.div`
	margin-left:25%;
	font-size: 4vw;
`