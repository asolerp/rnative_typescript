import {useTheme} from '@/Theme';

import React from 'react';
import {TouchableOpacity, Text, GestureResponderEvent} from 'react-native';

interface Props {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
}

const Button = ({title, onPress}: Props) => {
  const {Layout, Fonts, Colors, Gutters, MetricsSizes} = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        Layout.rowCenter,
        Gutters.tinyVPadding,
        Gutters.regularHPadding,
        Gutters.tinyHMargin,
        {
          backgroundColor: Colors.primary,
          borderRadius: MetricsSizes.small,
        },
      ]}>
      <Text style={[Fonts.textRegular, {color: Colors.white}]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
