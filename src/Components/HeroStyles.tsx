import styled from "styled-components";

export const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 50px 50px;
  color: #000000;
  background: #a07979;
`;

export const HeroPhoto = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 20%;
  object-fit: cover;
  object-position: center 65%;
`;

export const HeroTextSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 50px 50px;
  color: #000000;
  background: #a07979;
`;

export const HeroH1 = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 10px;
`;

export const HeroP = styled.p`
  font-size: 1.2rem;
  text-align: center;
`;
