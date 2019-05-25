import React, {Component} from 'react';
import { View, TouchableOpacity, Text, Platform } from 'react-native';
import Example1 from './Examples/Example1';
import Example2 from './Examples/Example2';

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'center',
    padding: 10,
    backgroundColor:'#68a0cf',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  textStyle: {
    textAlign: "center",
    color: 'white'
  },
  rowStyle: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    height: 50,
    paddingLeft: 25,
    paddingRight: 25
  },
  exampleViewStyle: {
    flex: 7,
    alignSelf: 'center',
    paddingTop: 10
  },
  iosPadding: {
    paddingTop: 50
  }
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { example: null };
  }
  renderExample() {
    if (this.state.example === 1) return <Example1 />;
    if (this.state.example === 2) return <Example2 />;
    return null;
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={[styles.exampleViewStyle, Platform.OS === 'ios' && styles.iosPadding]}>
          {this.renderExample()}
        </View>
        <View style={styles.rowStyle}>
          <TouchableOpacity
            onPress={() => this.setState({ example: 1 })}
            style={styles.buttonStyle}
          >
            <Text style={styles.textStyle}>Rectangle Example</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.setState({ example: 2 })}
            style={styles.buttonStyle}
          >
          <Text style={styles.textStyle}>Circle Example</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}
