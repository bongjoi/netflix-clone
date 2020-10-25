import React from 'react';
import HeaderContainer from '../containers/header';
import FeatureContainer from '../containers/feature';
import JumbotronContainer from '../containers/jumbotron';
import FaqsContainer from '../containers/faqs';
import FooterContainer from '../containers/footer';

export default function Home() {
  return (
    <>
      <HeaderContainer />
      <FeatureContainer />
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
