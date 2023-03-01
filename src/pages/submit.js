import React, { useEffect } from "react";
import { Page, Section, Seo } from 'gatsby-theme-portfolio-minimal';

// Generate a number between 0 and 10, including 10
function generateRandomInteger(max) {
  return Math.floor(Math.random() * max) + 1;
}

const orderNo = generateRandomInteger(10000000);
const orderEvent = {
  "event": "purchase",
  "orderId": orderNo
}

export default function IndexPage() {
  useEffect (() => {
    const isBrowser = typeof window !== `undefined`
    if (isBrowser && window.dataLayer) {
      window.dataLayer.push(orderEvent);
    } else {
      console.log('**** dataLayer not detected, skipping orderEvent push ****');
    }
  })

  return (
    <>
      <Seo title="Process failed successfully!" />
      <Page>
        <Section heading="Information Submitted!">
        <div>
          <p>Thanks, great work</p>
          <p>Your order number is <span data-cs-encrypt>{orderNo}</span></p>
          <br />
        </div>
        </Section>
      </Page>
    </>
  );
}
