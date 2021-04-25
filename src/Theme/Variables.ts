import {
  ThemeColors,
  ThemeFontSize,
  ThemeMetricsSizes,
  ThemeNavigationColors,
} from '@/Theme/theme.type';

// Colors
export const Colors: ThemeColors = {
  white: '#FFFFFF',
  text: '#747474',
  primary: '#40C3A5',
  success: '#3D83DF',
  error: '#DD3E3E',
};

export const NavigationColors: Partial<ThemeNavigationColors> = {
  primary: Colors.primary,
};

// FontSize
export const FontSize: ThemeFontSize = {
  small: 16,
  regular: 20,
  large: 40,
};

// Metric Sizes
const tiny = 5;
const small = tiny * 2;
const regular = tiny * 3;
const large = regular * 2;

export const MetricsSizes: ThemeMetricsSizes = {
  tiny,
  small,
  regular,
  large,
};
