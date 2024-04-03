import React from 'react';
import Content from '../Content/Content';
import Intro from '../Intro/Intro';
import './Main.scss';

const Main: React.FC = () => {
  return (
    <main className="Main">
      <Intro />
      <Content />
    </main>
  );
}

export default Main;
