import { addClass, removeClass } from './helpers';

function mouseOverHandler(event) {
  const span = event.target.parentNode.getElementsByTagName('SPAN')[0];
  addClass(span, 'tooltip-show');
}

function mouseOutHandler(element) {
  const span = event.target.parentNode.getElementsByTagName('SPAN')[0];
  removeClass(span, 'tooltip-show');
}

export default {
  install(Vue) {
    Vue.directive('tooltip', {
      bind(el, bindings) {
        const span = document.createElement('SPAN');
        const text = document.createTextNode(`Seats available: ${bindings.value.seats}`);
        span.appendChild(text);
        addClass(span, 'tooltip');
        el.appendChild(span);

        const div = el.getElementsByTagName('DIV')[0];
        div.addEventListener('mouseover', mouseOverHandler);
        div.addEventListener('mouseout', mouseOutHandler);

        div.addEventListener('touchstart', mouseOverHandler);
        div.addEventListener('touchend', mouseOutHandler);
      },
      unbind(el) {
        const div = el.getElementsByTagName('DIV')[0];
        div.removeEventListener('mouseover', mouseOverHandler);
        div.removeEventListener('mouseover', mouseOverHandler);

        div.removeEventListener('touchstart', mouseOutHandler);
        div.removeEventListener('touchend', mouseOutHandler);
      }
    });
  }
};
