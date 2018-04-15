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

  c.localeLoader = function(module) {
    return require(`./locales/${module}.yml`);
  };

  c.localeSelector = function(url) {
    return url.indexOf('ja') != -1 ? 'ja' : 'en';
  };

  c.relativeUrlRoot = '/my-app';
});
```
