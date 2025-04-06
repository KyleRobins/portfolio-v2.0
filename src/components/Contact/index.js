import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const ContactSection = styled.div`
  width: 95%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 20px;
  border: 0.1px solid ${({ theme }) => theme.primary};
`;

const ContactText = styled.div`
  font-size: 20px;
  text-align: center;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.6;
`;

const ContactLink = styled.a`
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease-in-out;

  &:hover {
    text-decoration: underline;
    transform: translateY(-2px);
  }
`;

const Contact = () => {
  return (
    <Container id="contact">
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Get in Touch</Desc>
        <ContactSection>
          <ContactText>
            Want to chat? Just shoot me a DM{" "}
            <ContactLink href="https://x.com/_KyleRobins" target="_blank">
              on X
            </ContactLink>{" "}
            or{" "}
            <ContactLink href="mailto:robinsmicky@gmail.com">
              drop me an email
            </ContactLink>
            , and I'll reply as soon as I can.
          </ContactText>
        </ContactSection>
      </Wrapper>
    </Container>
  );
};

export default Contact;
