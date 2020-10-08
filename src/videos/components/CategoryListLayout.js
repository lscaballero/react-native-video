import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

function CategoryListLayout(props) {
  return (
    <ImageBackground
      source={require('../../../assets/categoryBack.jpg')}
      style={styles.container}>
      <View>
        <Text style={styles.title}>{props.title}</Text>
        <Text>{props.children}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
  title: {
    color: '#4c4c4c',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default CategoryListLayout;
