# vue-scroll

scroll directive for Vue 3  
use [vue-scroll](https://github.com/wangpin34/vue-scroll) for Vue 2

## Installation

```
npm install @centaurea/vue3-scroll
```

## Get started

```javascript
import vuescroll from '@centaurea/vue3-scroll';

app.use(vuescroll);
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
app.use(vuescroll, {throttle: 600})
//Or
app.use(vuescroll, {debounce: 600})
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
