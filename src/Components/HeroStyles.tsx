import styled from "styled-components";

export const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: left;
  flex-direction: row;
  padding: 50px 160px;
  color: #fff;
  font-family: "Courier New";
`;

export const HeroPhoto = styled.img`
  width: 600px;
  height: 600px;
  border-radius: 20%;
  object-fit: cover;
  object-position: center 65%;
  margin-left: 170px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
`;

export const HeroTextSection = styled.section`
  height: 100vh;
  width: 70%;
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  padding: 50px 50px;
  color: #fff;
`;

export const HeroH1 = styled.h1`
  font-size: 3rem;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const HeroP = styled.p`
  font-size: 1.5rem;
  text-align: left;
`;
