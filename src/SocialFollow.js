import React from "react";
import "./App.css";
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLinkedin,
  faGithub,
  faTwitter,
  faEnvelope
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div class="social-container">
        <SocialFollowBox>

        <a href="https://twitter.com/NaazleenShaik" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} />
        </a>

        <a href="https://github.com/vnaazleen" className="github social">
        <FontAwesomeIcon icon={faGithub} />
        </a>

        <a href="https://www.linkedin.com/in/vaseem-naazleen/" className="linkedin social">
        <FontAwesomeIcon icon={faLinkedin} />
        </a>

        </SocialFollowBox>
    </div>
  );
}

const SocialFollowBox = styled.div`
    padding-left: 40%;
    font-size: 4vw;
    @media screen and (min-width: 1000px) {
      font-size: 40px;
    }
`