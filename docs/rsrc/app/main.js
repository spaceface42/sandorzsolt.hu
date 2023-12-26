/**
 * PromiseDom
 * FetchPartial
 */
import PromiseDom from "./e42/promiseDom.js";
import FetchPartial from "./e42/fetchPartial.js";



let dom = new PromiseDom;
dom.ready.then(___start());

function ___start() {
    console.info('_42 / dom is ready');

    const partial = new FetchPartial();
    partial.fetchAll();
}







const debounce = (fn, ms = 0) => {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(this, args), ms);
    };
};
  
window.addEventListener(
    'resize',
    debounce(() => {
        console.log(window.innerWidth);
        console.log(window.innerHeight);
    }, 250)
); // Will log the window dimensions at most every 250ms





// eof