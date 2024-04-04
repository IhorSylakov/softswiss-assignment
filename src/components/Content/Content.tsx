import React from 'react';
import data from '../../data/news.json';
import { NewsItem } from '../../types/types';
import Media from '../Media/Media';
import './Content.scss';

export default function Content() {
  const news: NewsItem[] = data.list;

  return (
    <div className="Content">
      <section>
        <h2 className="Content__title">Offers</h2>
        <div className="Content__grid-news">
          {news.map((item) => (
            <Media
              key={item.id}
              {...item}
            />
          ))}
        </div>
      </section>
      
      <section>
        <h2 className="Content__title">Embark on a space journey</h2>
        <p className="Content__text">
          Travelling into space is one of the most exciting and unforgettable adventures 
          that can change your life forever. And if you have ever dreamed of exploring stars, 
          planets and galaxies, then our company is ready to help you realize this dream. 
          We offer a unique experience that will allow you to go on a space journey and see 
          all the secrets of the universe. We guarantee that every moment in space will be 
          filled with incredible impressions, excitement and new discoveries. Our team of 
          professionals takes care of your safety and comfort so that you can fully enjoy 
          your adventure in space. We offer various options for space excursions.
        </p>
        <a href="/" className="Content__more">Read more</a>
      </section>
    </div>
  );
}
