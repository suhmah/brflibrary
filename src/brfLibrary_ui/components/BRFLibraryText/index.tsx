import React from 'react';
import { Text, TextProps, TextStyle } from 'react-native';
import { variants, TBRFLibraryTextVariants } from './variantes';

interface IBRFLibraryTextProps extends TextProps {
  variant: TBRFLibraryTextVariants;
  color?: string;
  size?: number;
  lineHeight?: number;
  center?: boolean;
  uppercase?: boolean;
  value?: string | number;
}

const composeStyle = (props: IBRFLibraryTextProps): TextStyle => {
  const variantStyle = variants[props.variant || '@title'];

  return {
    ...variantStyle,
    color: props?.color || variantStyle.color,
    fontSize: props?.size || variantStyle?.fontSize,
    lineHeight: props?.lineHeight || variantStyle?.lineHeight,
    textAlign: props?.center ? 'center' : 'left',
    textTransform: props?.uppercase ? 'uppercase' : 'none',
  };
};

const BRFLibraryText = ({
  value,
  style = {},
  allowFontScaling = false,
  ...props
}: IBRFLibraryTextProps) => {
  if (!value) return null;
  const composedStyle = composeStyle(props);
  return (
    <Text
      {...props}
      allowFontScaling={allowFontScaling}
      style={[composedStyle, style]}
    >
      {!!value && `${value}`}
    </Text>
  );
};

export default BRFLibraryText;
