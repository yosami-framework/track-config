# TrackConfig
Configure for track.

[![Build Status](https://travis-ci.org/yosami-framework/track-config.svg?branch=master)](https://travis-ci.org/yosami-framework/track-config)

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

  c.loader = function(module) {
    return require(`./app/${module}`);
  };

  c.relativeUrlRoot = '/my-app';
});
```
