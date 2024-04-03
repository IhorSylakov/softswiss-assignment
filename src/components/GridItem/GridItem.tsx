import React from 'react';
import { NewsItem } from '../../types/types';
import './GridItem.scss';

export default function GridItem({
  title,
  text,
  link,
  background
}: NewsItem ) {
  return (
    <div
      className="GridItem"
      style={{ '--bg': `url(${require(`../../images/${background}.webp`)})` } as React.CSSProperties}
    >
      <h2 className="GridItem__title">{title}</h2>
      <p className="GridItem__text">{text}</p>
      <a href={link} className="GridItem__link">Learn more</a>
    </div>
  );
}
