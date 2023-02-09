import React from "react";
import { Page, Section, Seo } from 'gatsby-theme-portfolio-minimal';

export default function IndexPage() {
    return (
      <>
        <Seo title="api testing area" />
        <Page>
          <Section heading="The content below is fetched via API">
            <div>
              <span>broken image 1</span><br />
              <img src="https://www.tuovila.com/fakeimage.jpg" alt="broken 1"/><br />
              <span>broken image 2</span><br />
              <img src="https://www.google.com/notarealimage.png" alt="broken 2"/><br />
            </div>
          </Section>
        </Page>
      </>
    );
}