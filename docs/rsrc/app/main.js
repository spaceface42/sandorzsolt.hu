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



    // smooyh scroll
    /*
    const lenis = new Lenis()
    lenis.on('scroll', (e) => {
    console.log(e)
    })
    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    */


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