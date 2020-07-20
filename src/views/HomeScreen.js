import React from 'react';
import {StyleSheet, View} from 'react-native';

export default class Homescreen extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return <View style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
