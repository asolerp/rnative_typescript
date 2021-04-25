import {Theme, ThemeVariables} from '@/Theme/theme.type';
import * as DefaultVariables from '@/Theme/Variables';
import Layout from '@/Theme/Layout';
import Fonts from '@/Theme/Fonts';
import Gutters from '@/Theme/Gutters';

export default function () {
  const themeVariables: ThemeVariables = DefaultVariables as ThemeVariables;
  const darkMode = false;

  const baseTheme: Theme = {
    Fonts: Fonts(themeVariables),
    Gutters: Gutters(themeVariables),
    Layout: Layout(themeVariables),
    ...themeVariables,
  };

  console.log;

  return {
    ...(Object.entries(baseTheme).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: {
          ...value,
        },
      }),
      {} as Theme,
    ) as Theme),
    darkMode,
    NavigationTheme: baseTheme.NavigationColors,
  };
}
