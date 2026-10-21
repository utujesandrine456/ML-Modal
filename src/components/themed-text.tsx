import { StyleSheet, Text, type TextProps } from 'react-native';

import { Fonts, ThemeColor } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export type ThemedTextProps = TextProps & {
  type?: 'default' | 'title' | 'small' | 'smallBold' | 'subtitle' | 'link' | 'linkPrimary' | 'code';
  themeColor?: ThemeColor;
};

export function ThemedText({ style, type = 'default', themeColor, ...rest }: ThemedTextProps) {
  const theme = useTheme();

  return (
    <Text
      style={[{ color: theme[themeColor ?? 'text'] }, styles[type], style]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  small: {
    fontFamily: Fonts.regular,
    fontSize: 13,
    lineHeight: 18,
  },
  smallBold: {
    fontFamily: Fonts.semiBold,
    fontSize: 13,
    lineHeight: 18,
  },
  default: {
    fontFamily: Fonts.regular,
    fontSize: 15,
    lineHeight: 22,
  },
  title: {
    fontFamily: Fonts.bold,
    fontSize: 28,
    lineHeight: 34,
    letterSpacing: -0.4,
  },
  subtitle: {
    fontFamily: Fonts.semiBold,
    fontSize: 20,
    lineHeight: 26,
    letterSpacing: -0.2,
  },
  link: {
    fontFamily: Fonts.medium,
    lineHeight: 22,
    fontSize: 14,
  },
  linkPrimary: {
    fontFamily: Fonts.medium,
    lineHeight: 22,
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  code: {
    fontFamily: Fonts.medium,
    fontSize: 12,
  },
});
