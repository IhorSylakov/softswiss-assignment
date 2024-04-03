import React from 'react';
import './Banner.scss';
import bannerVisual from '../../images/banner-visual.webp';

export default function Banner() {
  return (
    <section className="Banner">
      <div className="Banner__content">
        <h1 className="Banner__title">
          Discover the vast expanses of
          <span className="Banner__title-mark">space</span>
        </h1>
        <p className="Banner__text">
          Where the possibilities are
          <span className="Banner__text-mark">endless!</span>
        </p>
        <a href="/" className="Banner__button">Learn more</a>
      </div>
      <div className="Banner__visual">
        <img
          width="361"
          height="403"
          src={bannerVisual}
          alt=""
        />
      </div>
    </section>
  );
}
