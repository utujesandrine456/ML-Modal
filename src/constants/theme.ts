import '@/global.css';

import { Platform } from 'react-native';

export const Colors = {
  light: {
    text: '#000000',
    background: '#ffffff',
    backgroundElement: '#f5f5f5',
    backgroundSelected: '#e5e5e5',
    textSecondary: '#666666',
    border: '#e5e5e5',
  },
  dark: {
    text: '#ffffff',
    background: '#000000',
    backgroundElement: '#121212',
    backgroundSelected: '#1f1f1f',
    textSecondary: '#888888',
    border: '#262626',
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

export const Fonts = {
  regular: 'Poppins_400Regular',
  medium: 'Poppins_500Medium',
  semiBold: 'Poppins_600SemiBold',
  bold: 'Poppins_700Bold',
};

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 600;
