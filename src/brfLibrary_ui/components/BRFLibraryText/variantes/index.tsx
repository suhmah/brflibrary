import * as titles from './title';
import * as body from './body';

export const variants = {
  '@title': titles.title,
  '@titleh2': titles.titleH2,
  '@subtitle': titles.subtitle,
  '@body1': body.body_1,
  '@body2': body.body_2,
  '@description': body.description,
} as const;

export type TBRFLibraryTextVariants = keyof typeof variants;
