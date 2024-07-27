import styled from "styled-components";

export const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: left;
  flex-direction: row;
  padding: 50px 160px;
  color: #000000;
  background: #a07979;
  font-family: "Courier new";
`;

export const HeroPhoto = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 20%;
  object-fit: cover;
  object-position: center 65%;
  margin-left: 170px;
`;

export const HeroTextSection = styled.section`
  height: 100vh;
  width: 70%;
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  padding: 50px 50px;
  color: #000000;
  background: #a07979;
`;

export const HeroH1 = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const HeroP = styled.p`
  font-size: 1.6rem;
  text-align: left;
`;
