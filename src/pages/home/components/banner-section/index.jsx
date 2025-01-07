import React from "react";

import * as Styles from "./styles";

import Navbar from "../../../../components/navbar";
import Divider from "../../../../components/divider";
import Platforms from "../../../../components/platforms";

import hero2 from "../../../../assets/images/hero2.png";
import { ButtonOutline } from "../../../../components/button/styles.js";
import { Button } from "../../../../components/button/index.jsx";

const BannerSection = () => {
  return (
    <Styles.BannerSection>
      <Navbar />
      <Divider />
      <Styles.BannerContainer>
        <Styles.BannerInfo>
          <Styles.BannerText>
            <h2>TAVR</h2>
            <h1>MATAC</h1>
            <p>
              Looking for a Discord community focused on Tactical Assault VR with a mature, EU-based vibe? Join The Tactical Circle (MATAC)—a space built for:
              EU players (but everyone is welcome!) in similar time zones.
              Tactical gameplay without hardcore milsim rules.
              A chill, adult-friendly environment—no constant pings or activity demands.
              Whether you’re here to find teammates, share tips, or just enjoy tactical gaming at your own pace, MATAC is the place for you.
              Join us and help shape a respectful, tactical, and fun community!
            </p>
            <Styles.BannerFlexButtons>
              <Button className="large">Play Game</Button>
              <ButtonOutline className="large">Search More</ButtonOutline>
            </Styles.BannerFlexButtons>
            <Styles.BannerDivider />
            <Styles.BannerPlataforms>
              {/*<span className='transparent'>Play it on</span>*/}
              <Platforms />
            </Styles.BannerPlataforms>
          </Styles.BannerText>
        </Styles.BannerInfo>

        <Styles.BannerMascotContainer>
          <img src={hero2} alt="hero" style={{ pointerEvents: "none" }} />
        </Styles.BannerMascotContainer>
      </Styles.BannerContainer>
    </Styles.BannerSection>
  );
};

export default BannerSection;
