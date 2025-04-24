import React from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import FeaturedStoriesSection from '../components/FeaturedStoriesSection';
import UnderstandingSection from '../components/UnderstandingSection';
import NeedHelpSection from '../components/NeedHelpSection';
import TeamSection from '../components/TeamSection';
import ShareThoughtsSection from '../components/ShareThoughtsSection';

const HomePage: React.FC = () => {
  return (
    <> {/* Use Fragment or a main tag */}
      <Hero />
      <AboutSection />
      <FeaturedStoriesSection />
      <UnderstandingSection />
      <NeedHelpSection />
      <TeamSection />
      <ShareThoughtsSection />
    </>
  );
};

export default HomePage;