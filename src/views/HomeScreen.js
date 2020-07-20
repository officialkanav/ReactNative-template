import React from 'react';
import {StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';

class Homescreen extends React.PureComponent {
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

const mapStateToProps = (state) => {
  return {};
};

function mapDispatchToProps(dispatch) {
  return {
    func: (page) => {
      return dispatch(func(page));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Homescreen);
