import React from "react";
import {
  AboutSection,
  HeroSection,
  Page
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Page>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="about me" />
      </Page>
    </>
  );
}
