import React, { Component } from 'react';
import { View } from 'react-native';
import ImageMapper from '../src/ImageMapper';
import { CIRCLE_MAP } from './Maps';

const Img = require('./Samanvai-Art-Gallery.jpg');

class Example1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAreaId: null
    };
  }

  mainImgWasPressed(item, idx, event) {
    if (item.id === this.state.selectedAreaId) {
      this.setState({ selectedAreaId: null });
    } else {
      this.setState({ selectedAreaId: item.id });
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageMapper
          imgHeight={551}
          imgWidth={244}
          imgSource={Img}
          imgMap={CIRCLE_MAP}
          onPress={(item, idx, event) => this.mainImgWasPressed(item, idx, event)}
          containerStyle={{ top: 10 }}
          selectedAreaId={this.state.selectedAreaId}
        />
      </View>
    );
  }
}

export default Example1;
