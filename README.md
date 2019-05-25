# react-native-image-mapper

React Native component to allow clickable areas on an image. Includes ability to highlight areas on click as well.

### Properties

|Props|type|Description|default|
|---|---|---|---|
|**imgSource**|*string*|Image source url| **required**|
|**imgMap**|*array*|Mapping for image| `see below` |
|**selectedAreaId**|*string*|ID of the currently selected area| `areaOne`|
|**imgWidth**|*number*|Image width|`Displayed width`|
|**imgHeight**|*number*|Image height|`Displayed height`|

|Props callbacks|Called on|signature|
|---|---|---|
|**onPress**|Click on an area in image|`(item: obj, index: num, event)`|

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

### License
MIT License

Copyright (c) 2019 Marc Salo
See `./LICENSE.txt` for specifics