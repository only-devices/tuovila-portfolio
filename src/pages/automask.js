import React from "react";
import { Page, Section, Seo } from 'gatsby-theme-portfolio-minimal';
//import chicagoHdImg from "./images/sawyer-bengtson-umRPY9w3q1c-unsplash.jpg";
// Generate a number between 0 and 10, including 10
function generateRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}
const dynId = generateRandomInt(10000)+'-'+generateRandomInt(10000)+'-'+generateRandomInt(10000);
// Reset all input fields on the page
function resetInputs() {
  var elements = document.getElementsByTagName("input");
  for (var ii=0; ii < elements.length; ii++) {
    if (elements[ii].type === "text") {
      elements[ii].value = "";
    }
  }
}
// ETR function
function triggerRecording(recType) {
  window._uxa = window._uxa || [];
  console.log(recType);
  if (recType === 'ETP') {
    window._uxa.push(['trackEventTriggerRecording', '@ETP@buttonClicked']);
  }
  if (recType === 'ETS') {
    window._uxa.push(['trackEventTriggerRecording', '@ETS@buttonClicked']);
  }
  console.log(`*** ${recType} recording triggered! ***`);
}
// Exclude CS SR function
function excludeCsRecording(urlRegex) {
  window._uxa = window._uxa || [];
  console.log(urlRegex);
  window._uxa.push(['excludeURLforReplay', urlRegex]);
  alert(`Success! Pages with paths matching regex: '${urlRegex}' will be excluded from Session Replay recording for this session!`);
  resetInputs();
}
// setEncryptionSelectors function
function setEncryptedCaptures(encryptEls) {
  window._uxa = window._uxa || [];
  console.log('*** Encrypting selectors: ' + encryptEls);
  window._uxa.push(['setEncryptionSelectors', encryptEls]);
  alert(`Success! The following elements will be captured and encrypted: '${encryptEls}'`);
  resetInputs();
}
// Error function
function setError(errType) {
  window._uxa = window._uxa || [];
  var errId = generateRandomInt(1000000);
  var apiUrl = document.location.origin + '/api/fake';
  console.log('*** Error triggered: ' + errType);
  if (errType === 'custom') {
    window._uxa.push([
      'trackError',
      'FATAL: Manually generated custom error!',
      {
        type: 'custom',
        initiator: 'button_click',
        errId: errId
      }
    ]);
    console.error('JavaScript error: ' + errId);
  } if (errType === 'js') {
    try {
      window._uxa.buttonPush(['fakeError']);      
    } catch (error) {
      console.error(error);
    }

  } if (errType === 'api') {
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'X-Tuovila-Key': '12345678',
        'X-Tuovila-Host': 'tuovila.com',
        'X-Tuovila-Content': '{"username": "test", "email": "fake@email.com", "source": "tuovila.com", "auth_code": "1234"}'
      },
    })
      /*.then(response => response.json())
      .then(response => console.log(response))*/
      .catch(err => console.error(err));
  }
}
////---- Live Signals alerts moved to GTM on 11-MAR-2023 ----/////
/*if (typeof window !== "undefined") { 
    window.addEventListener(
      "Contentsquare_LiveSignal",
      (e) => {
        console.log(e.detail);
        var lsType = e.detail.event;
        if (lsType === 'consecutive_click_signal') {
          alert('Having trouble with your left mouse button much?');
        }
        if (lsType === 'rage_click_signal') {
          alert('*** PC LOAD LETTER ***');
        }
        if (lsType === 'repeated_scrolling_signal') {
          alert('Interneting is hard! Maybe try the search bar');
        }
        if (lsType === 'exit_intent_signal') {
          alert('Oh no, please don\'t leave! Fine, whatever. Just go.');
        }
        if (lsType === 'excessive_pastes_fraud_signal') {
          alert('L@@k, the promo code is iNvALiD, okay?');
        }
      },
      false
    );
  }
*/

export default function IndexPage() {
    return (
      <>
        <Seo title="automasking testing page" />
        <Page>
          <Section heading="This heading does not have any special attributes.">
              <p data-cs-encrypt>This field has the <code>data-cs-encrypt</code> attribute.</p>
              <div data-cs-mask>This field has the <code>data-cs-mask</code> attribute.</div><br />
              <div>
                <button className="testing-button" onClick={() => triggerRecording('ETP')}>Trigger ETP (page) Recording</button><br />
                <button className="testing-button" onClick={() => triggerRecording('ETS')}>Trigger ETS (session) Recording</button><br />
                <button className="testing-button" onClick={() => setError('js')}>Trigger JS Error</button><br />
                <button className="testing-button" onClick={() => setError('api')}>Trigger API Error</button><br />
                <button className="testing-button" onClick={() => setError('custom')}>Trigger Custom Error</button><br />
              </div><br />
              <div>
                <label htmlFor="excludePage">Enter exclude page regex: </label>
                <input type="text" id="excludePage-input" name="excludePage" required={true} /><br />
                <button className="testing-button" onClick={() => excludeCsRecording(document.getElementById('excludePage-input').value)}>Enable SR Exclusion</button><br />
                <p>Check to see if SR exclusion works using <a href="/do-not-record">this page</a>.</p>
              </div>
              <div>
                <label htmlFor="encryptElements">Enter selectors of elements to mask, capture, and encrypt: </label>
                <input type="text" id="encryptEls-input" name="encryptElements" required={true} /><br />
                <button className="testing-button" onClick={() => setEncryptedCaptures(document.getElementById('encryptEls-input').value)}>Capture & Encrypt Elements</button><br />
              </div>
          </Section>
          <Section heading="*** DYNAMIC ELEMENT ID ALERT ***">
              <div>
                The ID of <span id={dynId}><b>this specific string</b></span> is <i>{dynId}</i>. Use it in the above input boxes accordingly.
              </div>
          </Section>
          <Section heading="Here's a fake order form!">
              <div>
                <form name="test" action="/submit" data-netlify="true">
                  <label htmlFor="firstName">First name: (field below has data-cs-encrypt)
                    <div><input type="text" id="firstName-input" name="firstName" required={true} data-cs-encrypt /></div><br />
                  </label>
                  <label htmlFor="lastName">Last name: (field below has data-cs-encrypt)
                    <div><input type="text" id="lastName-input" label="what" name="lastName" required={true} data-cs-encrypt /></div><br />
                  </label>
                  <label htmlFor="jobTitle">Job Title:
                    <div><input type="text" id="jobTitle-input" name="jobTitle" /></div><br />
                  </label>
                  <label htmlFor="quantity">Order quantity:
                    <div><input type="number" id="quantity-input" name="quantity" /></div><br />
                  </label>
                  <label htmlFor="fraudBox">Promo code:
                    <div><input type="text" id="fraudBox-input" name="fraudBox" /></div><br />
                  </label>
                  <div><input type="submit" value="Submit" /></div>
                </form>
              </div>
          </Section>
          <Section heading="Test input fields">
              <div>
                <label htmlFor="textInput">input type="text"</label><br />
                <input type="text" name="textInput"></input><br /><br />
                <label htmlFor="telInput">input type="tel"</label><br />
                <input type="tel" name="telInput"></input><br /><br />
                <label htmlFor="emailInput">input type="email"</label><br />
                <input type="email" name="emailInput"></input><br /><br />
                <label htmlFor="searchInput">input type="search"</label><br />
                <input type="search" name="searchInput"></input><br /><br />
                <label htmlFor="urlInput">input type="url"</label><br />
                <input type="url" name="urlInput"></input><br /><br />
                <label htmlFor="radioInput">input type="radio"</label><br />
                <input type="radio" name="radioInput"></input><br /><br />
                <label htmlFor="garbageInput">input type="garbage"</label><br />
                <input type="garbage" name="garbageInput"></input><br /><br />
                <label htmlFor="noInput">input without type</label><br />
                <input name="noInput"></input><br /><br />
              </div>
          </Section>
        </Page>
      </>
    );
}