import React, { Component } from 'react'
import { Button } from 'react-foundation'
import MyMapComponent from 'components/MyMapComponent'

import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div className="grid-x grid-padding-x grid-user align-middle">
        <div className="small-10 small-offset-1 medium-6 medium-offset-3 large-4 large-offset-4 cell text-center">
          <div className="logo padding-3 margin-top-2 text-center">Wissle</div>
        </div>
        <div className="small-10 small-offset-1 medium-6 medium-offset-3 large-4 large-offset-4 cell">
          <h2>Terms of Service</h2>
          <p>
            BY USING THE SERVICES, YOU ARE AGREEING, ON BEHALF OF YOURSELF AND THOSE YOU REPRESENT, TO COMPLY WITH AND BE LEGALLY BOUND BY THESE TERMS AS WELL AS OUR PRIVACY POLICY AND ALL APPLICABLE LAWS. IF YOU, FOR YOURSELF OR ON BEHALF OF THOSE YOU REPRESENT, DO NOT AGREE TO ANY PROVISION OF THESE TERMS, YOU MUST, FOR YOURSELF AND ON BEHALF ANY SUCH PERSON(S), DISCONTINUE THE REGISTRATION PROCESS, DISCONTINUE YOUR USE OF THE SERVICES, AND, IF YOU ARE ALREADY REGISTERED, REQUEST TO CANCEL YOUR ACCOUNT.
          </p>
          <p>
            All content posted or otherwise submitted to the app is the sole responsibility of the account holder from which such content originates and you acknowledge and agree that you, and not Wissle are entirely responsible for all content that you post, or otherwise submit to the app. Wissle does not control user submitted content and, as such, does not guarantee the accuracy, integrity or quality of such content. You understand that by using the site you may be exposed to content that is offensive, indecent or objectionable.

            As a condition of use, you promise not to use the services for any purpose that is unlawful or prohibited by these terms, or any other purpose not reasonably intended by Wissle. By way of example, and not as a limitation, you agree not to use the services:

            <ol>
              <li>To abuse, harass, threaten, impersonate or intimidate any person</li>
              <li>To post or transmit, or cause to be posted or transmitted, any visual content or Communications that are libelous, defamatory, obscene, pornographic, abusive, offensive, profane, or that infringes any copyright or other right of any person</li>
              <li>For any purpose (including posting or viewing visual content) that is not permitted under the laws of the jurisdiction where you use the services;</li>
              <li>To create or transmit unwanted <em>spam</em> to any person or any URL</li>
              <li>With the exception of accessing RSS feeds, you agree not to use any robot, spider, scraper or other automated means to access the app for any purpose without our express written permission. Additionally, you agree that you will not: (i) take any action that imposes, or may impose in our sole discretion an unreasonable or disproportionately large load on our infrastructure; (ii) interfere or attempt to interfere with the proper working of the app or any activities conducted on the app; or (iii) bypass any measures we may use to prevent or restrict access to the app</li>
            </ol>
          </p>
          <p>
            Wissle may terminate or suspend any and all services and/or your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the terms. Upon termination of your account, your right to use the services will immediately cease. If you wish to terminate your account, you may simply discontinue using the services.
          </p>
        </div>
        <div className="small-10 small-offset-1 medium-6 medium-offset-3 large-4 large-offset-4 cell">
          <h2>Privacy policy</h2>
          <p>
            We only collect personal information that is relevant to the purpose of our app. This information allows us to provide you with a customized and efficient experience. We collect the following types of information from our users:
            <ol>
              <li>We receive and store any information you enter on our website or provide to us in any other way. You can choose not to provide us with certain information, but then you may not be able to take advantage of many of our special features.</li>
              <li>Registration: In order for you to use the services you must complete a registration form. As part of this registration form, we require certain personal information.</li>
              <li>We receive and store certain types of information whenever you interact with us. Wissle automatically receives and records certain "traffic data" on our server logs from your browser including your IP address, cookie information, and the page you requested. Wissle uses this traffic data to help diagnose problems with its servers, analyze trends and administer the website. This does not involve collecting any of your personal information</li>
              <li>Wissle collects and uses information regarding the geographic location of your devices. If the location data contains your personal information, then Wissle will treat this location data in accordance with this policy</li>
            </ol>
          </p>
        </div>
        <div className="small-12 medium-8 medium-offset-1 large-4 large-offset-4 cell text-center">
          <Link to="/user">
            <input
              type="submit"
              value="Back"
              className="button expanded" />
          </Link>
        </div>
      </div>

    );
  }
}
