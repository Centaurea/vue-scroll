import { isObject, isFunction } from './lodash'
import dom from './domEvent'


const vuescroll = new Object;

vuescroll.install = function (app, options) {

  options = options || {};
  const SCROLL = 'scroll';
  const THROTTLE = 'throttle';
  const DEBOUNCE = 'debounce';
  const VALID_ARGS = [THROTTLE, DEBOUNCE];

  function bindValue (el, value, arg) {
    let fn, opt = Object.assign({}, options);
    if (isObject(value) || isFunction(value)) {
      fn = value;

      if (VALID_ARGS.indexOf(arg) > -1) {
        fn = value.fn;
        if (arg === THROTTLE) {
          opt = { throttle: value.throttle}
        } else if(arg === DEBOUNCE) {
          opt = { debounce: value.debounce}
        }
      }

      try {
        dom.bind(el, SCROLL, fn, opt);
      } catch(err) {
        console.warn('Unexpected error happened when binding listener');
      }

    } else {
      console.warn('Unexpected scroll properties');
    }
  }

  function unbindValue (el, value, arg) {
    let fn;
    if (isObject(value) || isFunction(value)) {
      fn = value;
      if (VALID_ARGS.indexOf(arg) > -1)  {
        fn = value.fn;
      }
      dom.unbind(el, SCROLL, fn);
    }
  }

  app.directive(SCROLL, {

    beforeMount: function(el, binding, vnode, oldVnode) {
      bindValue(el, binding.value, binding.arg);
    },

    mounted: function(el, binding) {
      //To do, check whether element is scrollable and give warn message when not
    },

    updated: function(el, binding) {
      if (binding.value === binding.oldValue) {
        return;
      }
      bindValue(el, binding.value, binding.arg);
      unbindValue(el, binding.oldValue, binding.arg);
    },

    unbind: function(el, binding) {
      unbindValue(el, binding.value, binding.arg);
    }

  })

}

export default vuescroll;
