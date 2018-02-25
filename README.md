# TrackConfig
Configure for track.

## Installation

### npm

```shell
npm install track-config
```

## Usage

```javascript
const TrackConfig = require('track-config');

TrackConfig.configure((c) => {
  c.m = require('mithril');
});
```
