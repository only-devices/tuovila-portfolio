import React from "react";
import { Page, Section, Seo } from 'gatsby-theme-portfolio-minimal';

export default function IndexPage() {
  return (
    <>
    <Seo title="do not record" />
      <Page>
        <Section heading="Do Not Record This Page">
          <div>
            This page can be excluded from SR recording by clicking the button on <a href="https://www.tuovila.com/testing">the testing page</a>.
          </div>
          <br />
        </Section>
      </Page>
    </>
  );
}
