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

