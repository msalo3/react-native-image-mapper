# react-native-image-mapper

React Native component to allow clickable areas on an image

### Setup
```
$ yarn add react-native-image-mapper --save
```

### Usage

Import the `ImageMapper` component from `react-native-image-mapper` and use it as seen below:

```jsx
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Image Mapper } from 'react-native-image-mapper';

const imageSource = require('./path/to/my/image.jpg');
const MAPPING = [
  {
    id: '0',
    name: 'First Area Name',
    shape: 'rectangle',
    width: 30,
    height: 40,
    x1: 80,
    y1: 500,
    prefill: 'red',
    fill: 'blue'
  },
  {
    id: '1',
    name: 'Second Area Name',
    shape: 'rectangle',
    x2: 155,
    y2: 540,
    x1: 125,
    y1: 500
  },
]

class MyReactNativeComponent extends Component {
  // ....
  render() {
    return (
      <ImageMapper
        imgHeight={500}
        imgWidth={250}
        imgSource={imageSource}
        imgMap={MAPPING}
        onPress={(item, idx, event) => this.onAnyAreaPress(item, idx, event)}
        containerStyle={styles.myCustomStyle}
        selectedAreaId="my_area_id"
      />
    );
  }
}
```

### Properties

|Prop Name|Type|Description|Example|
|---|---|---|---|
|**imgSource**|*string*|Image source url| **required**|
|**imgMap**|*array*|Mapping for image| See below |
|**selectedAreaId**|*string* or *array*|ID of the currently selected area or array of ids| `'areaOne'` or `['areaOne', 'areaTwo']`|
|**imgWidth**|*number*|Image width|`Displayed width`|
|**imgHeight**|*number*|Image height|`Displayed height`|
|**multiselect**|*boolean*| Defaults to `false`. Allows for tracking of multiple selections.|`true` or `false`|

**When `multiselect` is set to `true`, `selectedAreaId` must be an array of ids rather than a string**

|Props callbacks|Called on|Signature|
|---|---|---|
|**onPress**|Click on an area in image|`(item: object, index: number, event: object)`|


**`imgMap` is an object describing touchable areas in the image.**

|Property|Type|Description|
|---|:---:|---|
|**id**|*string*|ID of the item used for selected or not selected|
|**name**|*string*|Name of the item|
|**shape**|*string*|**Required** - Either `rectangle` or `circle`|
|**prefill**|*string*|rgba(255, 255, 255, 0.5)|
|**fill**|*string*|rgba(255, 255, 255, 0.5)|
|**x1**|*number*|**Required** - Top Left X coordinate in rectangle or Center X coordinate in circle|
|**y1**|*number*|**Required** - Top Left Y coordinate in rectangle or Center Y coordinate in circle|
|**x2**|*number*|**Required for Rectangle unless `width` (below) is specified** - Bottom Left X coordinate in rectangle|
|**y2**|*number*|**Required for Rectangle unless `height` (below) is specified** - Bottom Left Y coordinate in rectangle|
|**width**|*number*|**Required for Rectangle unless `x2` (above) is specified** - Width of rectangle|
|**height**|*number*|**Required for Rectangle unless `y2` (above) is specified** - Height of rectangle|
|**radius**|*number*|**Required for Circle** - Radius of circle|

### Thanks
Big thanks to [Coldiary](https://github.com/coldiary) and his [React project](https://github.com/coldiary)

### License
Copyright (c) 2019 Marc Salo
MIT License
See LICENSE for specifics