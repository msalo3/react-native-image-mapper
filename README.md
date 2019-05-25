# react-native-image-mapper

React Native component to allow clickable areas on an image. Includes ability to highlight areas on click as well.


## Demo & Examples

Live demo: [coldiary.github.io/react-image-mapper](http://coldiary.github.io/react-image-mapper/)

To build the example locally, run:

```
npm install
npm start
```

Then open [`localhost:8000`](http://localhost:8000) in a browser.

## Installation

The easiest way to use react-image-mapper is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

You can also use the standalone build by including `dist/react-image-mapper.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable.

```
npm install react-image-mapper --save
```


## Usage

Import the component as you normally do, and add it wherever you like in your JSX views as below:

```javascript
// ES5 require
var ImageMapper = require('react-image-mapper');

// ES6 import
import ImageMapper from 'react-image-mapper';

<ImageMapper src={IMAGE_URL} map={AREAS_MAP}/>
```

### Properties

|Props|type|Description|default|
|---|---|---|---|
|**imgSource**|*string*|Image source url| **required**|
|**imgMap**|*array*|Mapping for image| `see below` |
|**selectedId**|*string*|ID of the currently selected area| `areaOne`|
|**areaType**|*string*|Shape of touchable area|`Circle` or `Rectangle`|
|**imgWidth**|*number*|Image width|`Displayed width`|
|**imgHeight**|*number*|Image height|`Displayed height`|

|Props callbacks|Called on|signature|
|---|---|---|
|**onPress**|Click on a zone in image|`(area: obj, index: num, event): void`|

**`imgMap` is an object describing touchable areas in the image.**

|Property| type|Description|
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

### Notes & Contributions

This a component is still a work in progress.

If you encounter a bug of some kind, feel free to report the issue.

If you'd like to improve this code or ask/advise for any improvement, feel free to comment it as well.


## License

Distributed with an MIT License. See LICENSE.txt for more details

Copyright (c) 2017 Coldiary.