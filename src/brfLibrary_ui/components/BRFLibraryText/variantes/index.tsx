import * as titles from './title';
import * as body from './body';

export const variants = {
  '@title': titles.title,
  '@body1': body.body_1,
  '@body2': body.body_2,
} as const;

export type TBRFLibraryTextVariants = keyof typeof variants;
