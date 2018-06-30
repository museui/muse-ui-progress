# muse-ui-progress

Muse-UI progress plugin like on Youtube

## Installation

```bash
npm install -S muse-ui-progress
// or
yarn add muse-ui-progress
```

## CDN

```html
<link rel="stylesheet" href="https://unpkg.com/muse-ui-loading/dist/muse-ui-loading.all.css"/>
<script src="https://unpkg.com/muse-ui-loading/dist/muse-ui-loading.js"></script>
```


## Usage

```javascript
import 'muse-ui-progress/dist/muse-ui-progress.css';
import Vue from 'vue';
import MuseUIProgress from 'muse-ui-progress';
Vue.use(MuseUIProgress);

new Vue({
  created () {
    this.$progress.start();
    this.$progress.done();
  }
})

// or
MuseUIProgress.start();
MuseUIProgress.done();
```

## API

### config

```javascript
export default {
  zIndex: 2000,          // progress z-index
  top: 0,                // position fixed top
  speed: 300,            // progress speed
  color: 'primary',      // color
  size: 2,               // progress size
  className: ''          // progress custom class
};
```

### config (config<Object>)

Change default config, Will return new config.

### Methods

* start();
* done();

## Dependencies Muse-UI

* `mu-linear-progress`
* `mu-fade-transition`

## Licence

muse-ui-progress is open source and released under the MIT Licence.

Copyright (c) 2018 myron
