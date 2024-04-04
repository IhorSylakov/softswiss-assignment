import React from 'react';
import Banner from '../Banner/Banner';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './App.scss';

export default function App() {
  return (
    <div className="App">
      <Header />

      <main className="Main">
        <Banner />
        <Content />
      </main>

      <Footer />
    </div>
  );
}
