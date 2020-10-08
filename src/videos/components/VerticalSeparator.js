import React from 'react';
import {View, StyleSheet} from 'react-native';

const VerticalSeparator = (props) => {
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
    borderTopWidth: 2,
    marginTop: 5,
  },
});

export default VerticalSeparator;
