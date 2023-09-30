import { baseColor } from '@/brfLibrary_ui/colors';
import fontSizes from '@/brfLibrary_ui/fontSizes';
import type { TextStyle } from 'react-native';

export const title: TextStyle = {
  fontSize: fontSizes.title,
  fontFamily: 'SFProDisplay-Regular',
  letterSpacing: 0,
  fontWeight: '700',
  color: baseColor.gray700,
};
