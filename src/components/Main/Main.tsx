import React from 'react';
import Content from '../Content/Content';
import Banner from '../Banner/Banner';
import './Main.scss';

export default function Main() {
  return (
    <main className="Main">
      <Banner />
      <Content />
    </main>
  );
}
