import React from 'react';
import { ButtonProps } from '../../types/types';
import './Button.scss';

export default function Button({
  text,
  link,
  variant,
  className,
}: ButtonProps) {
  return (
    <a
      href={link}
      className={`${className} Button Button--${variant}`}
    >
        {text}
    </a>
  );
}
