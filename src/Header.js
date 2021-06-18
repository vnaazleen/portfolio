import React from 'react';
import styled from 'styled-components';
import Particles from 'react-particles-js';
import ParticleConfig from "./config/particle-config"

function FrontPage() {
    return (
        <div>
        	<HeaderBox>        	
        		<Particles params={ParticleConfig}>
        		</Particles>

        		<ContentBox>
        			<div>
        				<LineOne>Hey there!</LineOne>
        				<LineTwo>I'm Vaseem Naazleen</LineTwo>
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
	margin-left:20%;
	color: white;
	position: absolute;
	font-size: 2em;
`

const LineOne = styled.div`
	font-size: 3vw;
	font-family: cursive;
`

const LineTwo = styled.div`
	font-size: 7vw;
	font-family: cursive;
`