import { baseColor } from '@/brfLibrary_ui/colors';
import fontSizes from '@/brfLibrary_ui/fontSizes';
import type { TextStyle } from 'react-native';

export const body_1: TextStyle = {
  fontSize: fontSizes.body_1,
  fontFamily: 'SFProDisplay-Regular',
  letterSpacing: 0,
  fontWeight: '700',
  color: baseColor.gray300,
};
export const body_2: TextStyle = {
  fontSize: fontSizes.body_2,
  fontFamily: 'SFProDisplay-Regular',
  letterSpacing: 0,
  fontWeight: '400',
  color: baseColor.gray700,
  textAlign: 'center',
};
export const description: TextStyle = {
  fontSize: fontSizes.description,
  fontFamily: 'SFProDisplay-Regular',
  letterSpacing: 0,
  fontWeight: '500',
  color: baseColor.gray700,
  textAlign: 'center',
};
