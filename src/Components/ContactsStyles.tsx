import styled from "styled-components";

export const ContactsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 10rem;
  justify-content: center;
  align-items: center;
`;

export const ContactsButton = styled.a`
  display: inline-block;
  padding: 10px;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.3s ease;
  height: 4rem;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ButtonImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
`;
