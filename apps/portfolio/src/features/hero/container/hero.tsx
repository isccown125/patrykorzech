import React from 'react';
import { HeroBackground } from '../components/hero-background/hero-background';
import { HeroTitle } from '../components/animated-title/hero-title';

export const Hero = () => {
  return (
    <HeroBackground>
      <HeroTitle />
    </HeroBackground>
  );
};
