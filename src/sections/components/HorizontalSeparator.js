import React from 'react';
import {View, StyleSheet} from 'react-native';

const HorizontalSeparator = (props) => {
  return (
    <View
      style={[
        styles.separator,
        {
          borderTopColor: props.color ? props.color : '#eaeaea',
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    marginHorizontal: 5,
    flex: 1,
  },
});

export default HorizontalSeparator;
