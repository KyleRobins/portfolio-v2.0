import React, { useEffect, useState } from "react";
import styled from "styled-components";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import HomeIcon from "@mui/icons-material/Home";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Bio } from "../../data/constants";

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
`;

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.h1`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 2rem;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1000;
  pointer-events: none;
`;

const SocialMediaIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.card};
  border-radius: 50px;
  padding: 1rem 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  position: relative;
  transition: all 0.3s ease;
  pointer-events: auto;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
  }
`;

const SocialMediaIcon = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.8rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: all 0.3s ease-in-out;
  border-radius: 50%;
  padding: 8px;

  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: translateY(-5px);
    background-color: ${({ theme }) => theme.bgLight};
  }
`;

const Copyright = styled.p`
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

const Greeting = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.text_primary};
  text-align: center;
  margin-top: 0.5rem;
`;

function Footer() {
  const [greeting, setGreeting] = useState("");
  const [emoji, setEmoji] = useState("");

  const getCurrentDate = () => {
    const now = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return now.toLocaleDateString("en-US", options);
  };

  useEffect(() => {
    const getTimeOfDay = () => {
      const now = new Date();
      const hours = now.getHours();

      if (hours >= 6 && hours < 12) {
        setGreeting("Good Morning");
        setEmoji("🌥️");
      } else if (hours >= 12 && hours < 18) {
        setGreeting("Good Afternoon");
        setEmoji("🌞");
      } else {
        setGreeting("Good Evening");
        setEmoji("🌄");
      }
    };

    getTimeOfDay();
  }, []);

  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Kyle Robins</Logo>
        {greeting && emoji && (
          <Greeting>
            {greeting} {emoji}, {getCurrentDate()}
          </Greeting>
        )}
        <Nav>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#certificates">Certificates</NavLink>
        </Nav>

        <Copyright style={{ marginBottom: "4rem" }}>
          © {new Date().getFullYear()} Kyle Robins. All rights reserved.
        </Copyright>
      </FooterWrapper>

      <SocialMediaContainer>
        <SocialMediaIcons>
          <SocialMediaIcon href="#" target="_blank">
            <HomeIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.linkedin} target="_blank">
            <LinkedInIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.github} target="_blank">
            <GitHubIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href="https://blog.kylerobins.com" target="_blank">
            <RssFeedIcon />
          </SocialMediaIcon>
        </SocialMediaIcons>
      </SocialMediaContainer>
    </FooterContainer>
  );
}

export default Footer;
