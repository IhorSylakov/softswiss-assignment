import { ReactNode } from "react";

export type NewsItem = {
  id: number;
  title: string;
  text: string;
  link: string;
  background: string;
};

export type HeaderLink = {
  id: number;
  link: string;
  text?: string;
  children?: ReactNode
};

export enum ButtonVariants {
    filled = 'filled',
    inverted = 'inverted',
}

export type ButtonProps = {
    text?: string;
    link?: string;
    variant?: ButtonVariants;
    className?: string;
};

