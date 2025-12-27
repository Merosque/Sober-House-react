import { TFunction } from "react-i18next";
export interface ContentBlockProps {
  icon: string;
  title: string;
  content: string;
  section?: {
    title: string;
    content: string;
    icon: string;
  }[];
  button?: {
  title: string;
  color?: string;
  url?: string;        // ← добавили
  scrollToId?: string; // ← опционально на будущее
}[];
  t: TFunction;
  id: string;
  direction: "left" | "right";
}
