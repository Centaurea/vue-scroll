# vue-scroll

scroll directive for Vue 3

## Installation
### NPM(recommended)
```
npm install vue-scroll --save
```

## Get started

```javascript
import Vue from 'vue'
import vuescroll from 'vue-scroll'

Vue.use(vuescroll)
```

Directive v-scroll then can be used in any of your Component.

```App.vue
<template>
  <ul v-scroll="onScroll">
    <li></li>
  </ul>
</template>
...
```

Method onScroll receives two arguments once scroll event is fired,

* e - event
* position - Object contains scrolling data
  - scrollTop Number
  - scrollLeft Number

## Advanced
throttle and debounce are supported since v2.1.0, you can enable it as global configurations like:

```javascript
Vue.use(vuescroll, {throttle: 600})
//Or
Vue.use(vuescroll, {debounce: 600})
```

Override global configurations like

```html
<ul v-scroll:throttle="{fn: onScroll, throttle: 500 }">
```
```html
<ul v-scroll:debounce="{fn: onScroll, debounce: 500 }">
```

## LICENSE
MIT
