import React from "react";
import styled from "styled-components";
import { education } from "../../data/constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 0px 80px 0px;
  @media (max-width: 960px) {
    padding: 40px 0px 60px 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.h1`
  font-size: 42px;
  text-align: left;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  width: 100%;
  max-width: 1100px;
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const EducationList = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 20px;
`;

const EducationItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px 0;
  border-bottom: 1px solid ${({ theme }) => theme.text_secondary + "20"};

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const EducationLeft = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Logo = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 10px;
  object-fit: contain;
  margin-top: 4px;

  @media (max-width: 768px) {
    height: 60px;
    width: 60px;
  }
`;

const EducationInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const SchoolName = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const SchoolLink = styled.a`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.primary};
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Degree = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Skills = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 4px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const DateText = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  min-width: 180px;
  text-align: right;

  @media (max-width: 768px) {
    font-size: 14px;
    min-width: unset;
    text-align: left;
  }
`;

const Education = () => {
  return (
    <Container id="education">
      <Wrapper>
        <Title>Education</Title>
        <EducationList>
          {education.map((item, index) => (
            <EducationItem key={index}>
              <EducationLeft>
                <Logo src={item.img} alt={item.school} />
                <EducationInfo>
                  {item.school === "Develhope" && item.doc ? (
                    <SchoolLink
                      href={item.doc}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.school}
                    </SchoolLink>
                  ) : item.school.includes("KCA University") ? (
                    <SchoolLink
                      href="https://www.kcau.ac.ke/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.school}
                    </SchoolLink>
                  ) : (
                    <SchoolName>{item.school}</SchoolName>
                  )}
                  <Degree>{item.degree}</Degree>
                  {item.skills && (
                    <Skills>
                      <b>Skills:</b> {item.skills}
                    </Skills>
                  )}
                </EducationInfo>
              </EducationLeft>
              <DateText>{item.date}</DateText>
            </EducationItem>
          ))}
        </EducationList>
      </Wrapper>
    </Container>
  );
};

export default Education;
