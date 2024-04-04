import React from 'react';
import { ButtonVariants, NewsItem } from '../../types/types';
import Button from '../Button/Button';
import './Media.scss';

export default function Media({
  title,
  text,
  link,
  background
}: NewsItem ) {
  return (
    <article
      className="Media"
      style={{ '--bg': `url(${require(`../../images/${background}.webp`)})` } as React.CSSProperties}
    >
      <div className="Media__content">
        <h3 className="Media__title">{title}</h3>
        <p className="Media__text">{text}</p>
        <Button
          link={link}
          text="Learn more"
          className="Media__button"
          variant={ButtonVariants.inverted}
        />
      </div>
    </article>
  );
}
