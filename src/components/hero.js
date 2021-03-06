import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import styled from 'styled-components';

const HeroWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  font-size: 1.2rem;

  @media only screen and (min-width: 770px) {
    font-size: 1.8rem;
  }
`

const Heading = styled.h1`
  font-weight: 600;
`

const TagLine = styled.h3`
  font-weight: 300;
`

const Hero = () => (
  <HeroWrapper>
    <div>
      <Parallax y={[350, -300]}>
        <Heading>Lucas Aguero</Heading>
      </Parallax>
      <Parallax y={[-480, 480]}>
        <TagLine>Full Stack Developer</TagLine>
        {/* <TagLine>React Native enthusiast 📱</TagLine> */}
      </Parallax>
      <Parallax y={[-480, 480]}>
        <TagLine>React Native enthusiast 📱</TagLine>
      </Parallax>
    </div>
  </HeroWrapper>
)

export default Hero;