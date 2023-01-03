import React from "react";
import { Page, Section, Animation } from 'gatsby-theme-portfolio-minimal';

export default function IndexPage() {
  return (
      <Page>
          <Animation type="fadeUp">
              <Section heading="Do Not Record This Page">
              <div>
                <p>This page can be excluded from SR recording by clicking the button on <a href="https://www.tuovila.com/testing">the testing page</a>.</p>
                <br />
              </div>
              </Section>
          </Animation>
      </Page>
  );
}
