import React from "react";
import { Page, Section, Animation } from 'gatsby-theme-portfolio-minimal';
import chicagoHdImg from "./images/sawyer-bengtson-umRPY9w3q1c-unsplash.jpg";

function triggerRecording(recType) {
  window._uxa = window._uxa || [];
  console.log(recType);
  if (recType === 'ETP') {
    window._uxa.push(['trackEventTriggerRecording', '@ETP@buttonClicked']);
  }
  if (recType === 'ETS') {
    window._uxa.push(['trackEventTriggerRecording', '@ETS@buttonClicked']);
  }
  console.log(`*** ${recType} recording triggered!`);
}

window.addEventListener(
    "Contentsquare_LiveSignal",
    (e) => {
      console.log(e.detail);
      var lsType = e.detail.event;
      if (lsType === 'consecutive_click_signal') {
        alert('Having trouble with your left mouse button much?');
      }
      if (lsType === 'rage_click_signal') {
        alert('Wow, you seem angry!');
      }
      if (lsType === 'repeated_scrolling_signal') {
        alert('Websites sure are difficult to use! Try the search bar, dumbass.');
      }
      if (lsType === 'exit_intent_signal') {
        alert('Oh no, please don\'t leave!');
      }
    },
    false
);

export default function IndexPage() {
    return (
        <Page>
            <Animation type="fadeDown">
                <Section heading="This heading does not have any special attributes.">
                    <p data-cs-encrypt>This field has the <code>data-cs-encrypt</code> attribute.</p>
                    <div data-cs-mask>This field has the <code>data-cs-mask</code> attribute.</div><br />
                    <button onClick={() => triggerRecording('ETP')}>Trigger ETP (page) Recording</button><br />
                    <button onClick={() => triggerRecording('ETS')}>Trigger ETS (session) Recording</button><br />
                </Section>
                <Section heading="Here's another heading without any attributes.">
                    <div>
                      Let's try masking this image:
                      <br></br>
                      <img src={chicagoHdImg} alt="cool chicago pic" height={400} data-cs-mask></img>
                    </div>
                    <div>
                      <form action="/submit">
                        <label htmlFor="firstName">First name: (field below has data-cs-encrypt)
                          <div><input type="text" id="firstName-input" name="firstName" required={true} data-cs-encrypt /></div><br />
                        </label>
                        <label htmlFor="lastName">Last name: (field below has data-cs-encrypt)
                          <div><input type="text" id="lastName-input" label="what" name="lastName" required={true} data-cs-encrypt /></div><br />
                        </label>
                        <label htmlFor="jobTitle">Job Title: (field below has data-cs-encrypt)
                          <div><input type="text" id="jobTitle-input" name="jobTitle" /></div><br />
                        </label>
                        <div><input type="submit" value="Submit" /></div>
                      </form>
                    </div>
                </Section>
            </Animation>
        </Page>
    );
}