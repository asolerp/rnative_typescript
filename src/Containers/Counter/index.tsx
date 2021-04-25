import React, {useCallback} from 'react';
import Button from '@/Components/Button';
import {decrement, increment, selectCount} from '@/Store/Counter/counterSlice';
import {useTheme} from '@/Theme';
import {Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

const Counter = () => {
  const {Layout, Fonts} = useTheme();
  const count = useSelector(selectCount);

  const dispatch = useDispatch();

  const handleIncrement = useCallback(() => dispatch(increment()), [dispatch]);
  const handleDecrement = () => dispatch(decrement());

  return (
    <View style={[Layout.fill, Layout.colCenter]}>
      <Text style={[Fonts.textRegular]}>Hola!</Text>
      <Text style={[Fonts.titleLarge]}>{count}</Text>
      <View style={[Layout.row, Layout.justifyContentEvenly]}>
        <Button title="Incrementar" onPress={() => handleIncrement()} />
        <Button title="Reducir" onPress={() => handleDecrement()} />
      </View>
    </View>
  );
};

export default Counter;
