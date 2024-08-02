import {
  HeroH1,
  HeroP,
  HeroSection,
  HeroTextSection,
  HeroPhoto,
} from "./HeroStyles";

const Hero = () => {
  return (
    <HeroSection>
      <HeroTextSection>
        <HeroH1>Welcome</HeroH1>
        <HeroP>
          I'm Matthew Chiang, a software developer. Explore my projects and
          skills.
        </HeroP>
      </HeroTextSection>
      <HeroPhoto src="/Photos/HeroPhoto.jpg"></HeroPhoto>
    </HeroSection>
  );
};

export default Hero;
