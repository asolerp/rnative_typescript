import {StyleSheet} from 'react-native';
import {ThemeLayout, ThemeVariables} from './theme.type';

export default function ({}: ThemeVariables): ThemeLayout {
  return StyleSheet.create({
    fill: {
      flex: 1,
    },
    column: {
      flexDirection: 'column',
    },
    colCenter: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    row: {
      flexDirection: 'row',
    },
    rowCenter: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    justifyContentEvenly: {
      justifyContent: 'space-evenly',
    },
  });
}
