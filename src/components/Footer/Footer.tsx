import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { SiFacebook } from "react-icons/si";
import {
  Container,
  CopyrightInformation,
  FooterContainer,
  SocialMediaContainer,
  SocialMediaLink,
} from "./FooterComponents";

function Footer() {
  return (
    <Container>
      <FooterContainer>
        <CopyrightInformation>
          Zvonimir Rudinski &copy; {new Date().getFullYear()} All rights
          reserved.
        </CopyrightInformation>
        <SocialMediaContainer>
          <SocialMediaLink
            href="https://github.com/sadboyzvone"
            rel="noopener nofollow"
            target="_blank"
          >
            <AiFillGithub size="2rem" />
          </SocialMediaLink>
          <SocialMediaLink
            href="https://www.linkedin.com/in/zvonimirr/"
            rel="noopener nofollow"
            target="_blank"
          >
            <AiFillLinkedin size="2rem" />
          </SocialMediaLink>
          <SocialMediaLink
            href="https://www.facebook.com/rudinskiz/"
            rel="noopener nofollow"
            target="_blank"
          >
            <SiFacebook size="1.8rem" />
          </SocialMediaLink>
          <SocialMediaLink
            href="https://www.instagram.com/prasak.za.pecivo/"
            rel="noopener nofollow"
            target="_blank"
          >
            <AiFillInstagram size="2.2rem" />
          </SocialMediaLink>
        </SocialMediaContainer>
      </FooterContainer>
    </Container>
  );
}

export default Footer;
