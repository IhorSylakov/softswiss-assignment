import React from 'react';
import { buttonVariants, NewsItem } from '../../types/types';
import Button from '../Button/Button';
import './GridItem.scss';

export default function GridItem({
  title,
  text,
  link,
  background
}: NewsItem ) {
  return (
    <article
      className="GridItem"
      style={{ '--bg': `url(${require(`../../images/${background}.webp`)})` } as React.CSSProperties}
    >
      <div className="GridItem__content">
        <h3 className="GridItem__title">{title}</h3>
        <p className="GridItem__text">{text}</p>
        <Button
          link={link}
          text="Learn more"
          className="GridItem__button"
          variant={buttonVariants.inverted}
        />
      </div>
    </article>
  );
}
