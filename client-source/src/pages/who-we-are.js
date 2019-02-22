import React from 'react';
import StyledNavigation from '../components/Navigation';
import PageLayout from '../components/Layout';
import StyledHeader from '../components/Header';
import Footer from '../components/Footer';

const PageContent = () => (
  <div>
    <h1>Who we are</h1>
    <p>What do they got in there? King Kong? Remind me to thank John for a lovely weekend. God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs. Yeah, but your scientists were so preoccupied with whether or not they could, they didn't stop to think if they should.</p>
    <p>Must go faster... go, go, go, go, go! Hey, you know how I'm, like, always trying to save the planet? Here's my chance. Jaguar shark! So tell me - does it really exist? Did he just throw my cat out of the window? We gotta burn the rain forest, dump toxic waste, pollute the air, and rip up the OZONE! 'Cause maybe if we screw up this planet enough, they won't want it anymore!</p>
    <p>Just my luck, no ice. Yeah, but John, if The Pirates of the Caribbean breaks down, the pirates don’t eat the tourists. Did he just throw my cat out of the window? Yeah, but your scientists were so preoccupied with whether or not they could, they didn't stop to think if they should.</p>
  </div>
);

const WhoWeArePage = () => (
  <PageLayout>
    <StyledHeader />
    <StyledNavigation />
    <PageContent />
    <Footer />
  </PageLayout>
);

export default WhoWeArePage;
