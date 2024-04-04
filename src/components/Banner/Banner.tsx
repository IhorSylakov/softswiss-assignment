import React from 'react';
import './Banner.scss';
import bannerVisual from '../../images/banner-visual.webp';
import Button from '../Button/Button';
import { buttonVariants } from '../../types/types';

export default function Banner() {
  return (
    <section className="Banner">
      <div className="Banner__wrapper">
        <div className="Banner__content">
          <h1 className="Banner__title">
            Discover the vast expanses of <span className="Banner__title-mark">space</span>
          </h1>
          <p className="Banner__text">
            Where the possibilities are <span className="Banner__text-mark">endless!</span>
          </p>
          <Button
            link="/"
            text="Learn more"
            className="Banner__button"
            variant={buttonVariants.filled}
          />
        </div>
        <div className="Banner__visual">
          <img
            width="330"
            height="370"
            loading="lazy"
            src={bannerVisual}
            className="Banner__img"
            alt="Discover the vast expanses of space"
          />
        </div>
      </div>
    </section>
  );
}
