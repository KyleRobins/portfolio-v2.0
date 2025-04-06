import React from "react";
import styled from "styled-components";
import { certificates } from "../../data/constants";
import VerifiedIcon from "@mui/icons-material/VerifiedUser";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 50px 0px 100px 0px;
  @media (max-width: 960px) {
    padding: 40px 0px 80px 0px;
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

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-bottom: 40px;
`;

const Tag = styled.div`
  display: inline-flex;
  align-items: center;
  background-color: ${({ theme }) => theme.text_primary};
  color: ${({ theme }) => theme.bg};
  font-weight: 600;
  font-size: 14px;
  padding: 4px 10px;
  border-radius: 20px;
  margin-bottom: 12px;
`;

const Title = styled.h2`
  font-size: 42px;
  text-align: center;
  font-weight: 700;
  margin-top: 12px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Subtitle = styled.p`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.5;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CertificatesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  width: 100%;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const CertificateCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const CertificateCardInner = styled.div`
  border-radius: 8px;
  overflow: hidden;
  background-color: transparent;
  width: 100%;
  margin-bottom: 16px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CertificateContent = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const CertificateImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  padding: 0;
`;

const CertificateTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  margin: 0;
  line-height: 1.4;
`;

const CertificateDate = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
  margin: 0;
`;

const LearnMoreButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 8px;
  padding: 8px 16px;
  border: 1px solid ${({ theme }) => theme.primary + "50"};
  border-radius: 24px;
  color: ${({ theme }) => theme.primary};
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.bgLight};
  }

  svg {
    font-size: 16px;
  }
`;

const Certificates = () => {
  return (
    <Container id="certificates">
      <Wrapper>
        <TopContainer>
          <Tag>Certificates</Tag>
          <Title>Browse my achievements</Title>
          <Subtitle>
            Certifications and awards that showcase my journey of continuous
            learning and expertise in the field.
          </Subtitle>
        </TopContainer>

        <CertificatesGrid>
          {certificates.map((certificate) => (
            <CertificateCard key={certificate.id}>
              <CertificateCardInner>
                <CertificateImage
                  src={certificate.image}
                  alt={certificate.title}
                />
                <CertificateContent>
                  <CertificateTitle>{certificate.title}</CertificateTitle>
                  <CertificateDate>
                    Earned {certificate.date.replace("Issued ", "")}
                  </CertificateDate>
                </CertificateContent>
              </CertificateCardInner>
              <LearnMoreButton
                href={certificate.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <VerifiedIcon /> Verify
              </LearnMoreButton>
            </CertificateCard>
          ))}
        </CertificatesGrid>
      </Wrapper>
    </Container>
  );
};

export default Certificates;
