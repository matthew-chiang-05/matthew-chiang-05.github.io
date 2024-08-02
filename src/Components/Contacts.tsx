import React from "react";
import {
  ButtonImage,
  ContactsButton,
  ContactsContainer,
} from "./ContactsStyles";
import { Button } from "react-scroll";

const Contacts = () => {
  return (
    <ContactsContainer>
      <ContactsButton
        href="https://github.com/matthew-chiang-05"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ButtonImage src="/Photos/github.png"></ButtonImage>
      </ContactsButton>
      <ContactsButton
        href="https://www.linkedin.com/in/matthew-chiang-b8b048229/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ButtonImage src="/Photos/LinkedInLogo.jpg"></ButtonImage>
      </ContactsButton>
      <ContactsButton
        href="https://www.facebook.com/matthew.chiang.566/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ButtonImage src="/Photos/FacebookLogo.jpg"></ButtonImage>
      </ContactsButton>
    </ContactsContainer>
  );
};

export default Contacts;
