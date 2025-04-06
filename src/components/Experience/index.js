import React from "react";
import styled from "styled-components";
import { experiences } from "../../data/constants";

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

const ExperienceList = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 20px;
`;

const ExperienceItem = styled.div`
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

const ExperienceLeft = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Logo = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  object-fit: contain;
  margin-top: 4px;

  @media (max-width: 768px) {
    height: 60px;
    width: 60px;
  }
`;

const ExperienceInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const CompanyName = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const CompanyLink = styled.a`
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

const Role = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Description = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 10px;
  max-width: 650px;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
`;

const Skill = styled.span`
  font-size: 13px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  background-color: ${({ theme }) => theme.primary + "20"};
  padding: 4px 10px;
  border-radius: 12px;

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 3px 8px;
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

const Experience = () => {
  const getCompanyUrl = (company) => {
    if (company.includes("E4Impact")) return "https://e4impactkenya.org/";
    if (company.includes("Elitcorp")) return "https://www.elit.co.ke/";
    if (company.includes("Unistus")) return "https://unistus.co.ke/";
    if (company.includes("Murutech")) return "https://murutechinc.com/";
    if (company.includes("Nitrogen"))
      return "https://www.linkedin.com/company/nitrogen-technologies-limited/";
    return "#";
  };

  return (
    <Container id="experience">
      <Wrapper>
        <Title>Work Experience</Title>
        <ExperienceList>
          {experiences.map((item, index) => (
            <ExperienceItem key={index}>
              <ExperienceLeft>
                <Logo src={item.img} alt={item.company} />
                <ExperienceInfo>
                  <CompanyLink
                    href={getCompanyUrl(item.company)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.company}
                  </CompanyLink>
                  <Role>{item.role || `Developer at ${item.company}`}</Role>
                  {item.desc && <Description>{item.desc}</Description>}
                  {item.skills && (
                    <SkillsContainer>
                      {typeof item.skills === "string"
                        ? item.skills
                            .split("·")
                            .map((skill, i) => (
                              <Skill key={i}>{skill.trim()}</Skill>
                            ))
                        : item.skills.map((skill, i) => (
                            <Skill key={i}>{skill}</Skill>
                          ))}
                    </SkillsContainer>
                  )}
                </ExperienceInfo>
              </ExperienceLeft>
              <DateText>{item.date}</DateText>
            </ExperienceItem>
          ))}
        </ExperienceList>
      </Wrapper>
    </Container>
  );
};

export default Experience;
