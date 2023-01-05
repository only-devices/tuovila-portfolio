import React from "react";
import {
  AboutSection,
  HeroSection,
  Page,
  Seo
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="eric tuovila" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="about me" />
      </Page>
    </>
  );
}
