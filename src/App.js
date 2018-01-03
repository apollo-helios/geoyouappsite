import React, {Component} from 'react';
import moment from 'moment';
import CountdownTimer from 'react-awesome-countdowntimer';
import Carousel from 'nuka-carousel';
import 'w3-css/w3.css';
import './App.css';
import coverImage from './images/berlin_mosaic.jpg'
import phoneMap from './images/map.jpg';
import coffee from './images/coffee.jpg';
import table from './images/table.JPG'

let mainStyle = {
  maxWidth: '2000px',
  marginTop: '46px'
};
let mobileNavStyle = {
  marginTop: '46px'
};

let textContent = {
  maxWidth: '800px'
};

let textShadow = {
  textShadow: "2px 2px 0 #000"
};

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Navbar */}
        <div className="w3-top">
          <div className="w3-bar w3-black w3-card">
            <a className="w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-large w3-right"
               href="javascript:void(0)" onclick="myFunction()" title="Toggle Navigation Menu"><i
              className="fa fa-bars"/></a>
            <a href="#top" className="w3-bar-item w3-button w3-padding-large"><strong>HOME</strong></a>
            <a href="#about" className="w3-bar-item w3-button w3-padding-large w3-hide-small"><strong>ABOUT</strong></a>
            <a href="#contact" className="w3-bar-item w3-button w3-padding-large w3-hide-small"><strong>CONTACT</strong></a>
          </div>
        </div>
        {/*Navbar on small screens*/}
        <div id="navDemo" className="w3-bar-block w3-black w3-hide w3-hide-large w3-hide-medium w3-top"
             style={mobileNavStyle}>
          <a href="#about" className="w3-bar-item w3-button w3-padding-large">ABOUT</a>
          <a href="#contact" className="w3-bar-item w3-button w3-padding-large">CONTACT</a>
        </div>
        <div id="top" className="w3-content" style={mainStyle}>
          <div className="w3-display-container w3-center">
            <img src={coverImage} className="coverImg" alt=""/>
            <div className="w3-display-middle w3-container w3-text-white w3-padding-32 w3-hide-small">
              <h1 className="w3-jumbo" style={textShadow}><strong><span className="w3-text-red">G</span><span
                className="w3-text-green">E</span><span className="w3-text-blue"><i
                className="fa fa-globe"></i></span><span className="w3-text-yellow">U</span></strong></h1>
              <h3 className="w3-xxlarge" style={textShadow}><strong>Real People. Real Connections.</strong></h3>
              <p className="w3-xlarge" style={textShadow}><strong>Coming Soon</strong></p>
            </div>
          </div>
          <div className="w3-container w3-content w3-center w3-padding-64" style={textContent} id="about">
            <h1 className="w3-wide"><strong>About GEOU</strong></h1>
            <div>
              <p className="w3-opacity">“An app that is 100% anonymous, all the way until interaction”. #GEOU</p>
              <h3 className=""><strong>What is GEOU?</strong></h3>
              <ul>
                <li className="w3-left-align">It is a native mobile that harnesses a user's GPS data to drive
                  interactions
                  between other users based on proximity
                </li>
                <li className="w3-left-align">The goal of the app is to create the next social media platform that has
                  little to no bias prior to the encounter
                </li>
                <li className="w3-left-align">The bigger goal of this platform is to create more relationships that last
                  and bring
                  face-to-face interactions back into the modern age
                </li>
              </ul>
              <h3><strong>What is the GEOU app?</strong></h3>
              <p className="w3-justify">
                The GEOU app is something that is revolutionary in its kind. It is a social networking application that
                leaves out the profile pic, the bio, the hobbies, the blah, blah, blah...
                Instead we are creating an application that is based on GPS services and user preferences for the day or
                night! That is it. GeoU users will interact with an integrated GPS system
                that will guide you to other users approximate areas (if they choose to 'GEOU') and request an encounter
                by tapping their approximate way-point! No free-form communication, only pre-made text communications
                designed by GEOU to tell the gist of what you need to say! Then once you meet it's on! Once the
                encounter
                has concluded, rate that user from 0-5 stars, possibly exchange contact info and keep it moving!
              </p>
              <h2 className="w3-wide"><strong>The Goal</strong></h2>
              <p className="w3-justify">
                GEOU is attempting to take away the bias, stereotyping, and discrimination that current social media can
                covertly imply. We just want people to meet up, hang out, and build their friends in a way we know they
                can.
              </p>
            </div>
          </div>
          <div className="w3-black">
            <div className="w3-container w3-content w3-padding-64" style={textContent} id="about">
              <h2 className="w3-center"><strong>Could it be dangerous?</strong></h2>
              <p className="w3-justify">We thought of it too... GEOU will be implementing 2 factor authentication with
                biometric technology
                (i.e thumbprint or facial recognition to register and log on thereafter). Trust us, it holds people
                accountable</p>
              <h2 className="w3-center"><strong>What's the real difference in GEOU?</strong></h2>
              <p className="w3-justify">Have you ever went out on a Friday night and met up with someone you've never
                met in person before
                without shuffling through all their social media profiles? Nope... But now we want to bring it to the
                forefront of the usual Friday night anywhere, from a college campus, to the metropolitan centers of the
                world, and most importantly to you.</p>
              <h2 className="w3-center"><strong>What will other users be able to see about me?</strong></h2>
              <p className="w3-justify">Just your approximate location (1 mile x 1 mile grid square) not your exact
                location, your overall rating score, and whatever encounter you'd most enjoy! Be it grabbing coffee, a
                drink, a bite to eat, and/or something more business or relationship oriented</p>
              <Carousel>
                <img src={table} alt="Conference Table"/>
                <img src={phoneMap} alt="Phone with Map App"/>
                <img src={coffee} alt="Cup of Coffee"/>
              </Carousel>
              <h2 className="w3-center"><strong>How much will it cost?</strong></h2>
              <p>Nothing. It'll be free. But we need your help to expedite the process of release and to make sure it's
                as interactive and fulfilling while still being as minimalist as possible</p>
              <h2 className="w3-center"><strong>Can't you see it now?</strong></h2>
              <p>Everyone will be using GEOU once they see how fun it can be! Come on into the fold, and check us out!
                Did we tell you we're patent-pending?</p>
              <div className="countDown">
                <CountdownTimer endDate={moment('06/01/2018')}/>
              </div>
            </div>
          </div>
          <div className="w3-container w3-content w3-padding-64" style={textContent} id="contact">
            <h2 className="w3-wide w3-center">Contact Us</h2>
            <div className="w3-row w3-padding-32">
              <div className="w3-col m6 w3-large w3-margin-bottom">
                <i class="fa fa-user" aria-hidden="true"></i> Dairston Elliot, Founder
                <i class=""
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
