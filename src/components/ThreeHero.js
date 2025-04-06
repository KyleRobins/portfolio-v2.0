import React from "react";
import styled from "styled-components";

const AnimatedImage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px;

  img {
    width: 400px;
    height: 600px;
    object-fit: cover;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
    transform-style: preserve-3d;
    animation: float 6s ease-in-out infinite;
  }

  img:hover {
    transform: translateY(-10px) rotateY(10deg);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
  }

  @keyframes float {
    0% {
      transform: translateY(0px) rotateY(0deg);
    }
    50% {
      transform: translateY(-15px) rotateY(10deg);
    }
    100% {
      transform: translateY(0px) rotateY(0deg);
    }
  }
`;

export default function ThreeHero({ imageUrl }) {
  return (
    <AnimatedImage>
      <img src={imageUrl} alt="Profile" />
    </AnimatedImage>
  );
}
