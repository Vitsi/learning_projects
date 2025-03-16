import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

const ColorBox = ({ color, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.box, { backgroundColor: color }]}
      onPress={onPress}
    />
  );
};

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    margin: 10,
  },
});

export default ColorBox;