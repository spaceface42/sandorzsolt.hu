/**
 * PromiseDom
 * FetchPartial
 */
import PromiseDom from "../e42/promiseDom.js";
import FetchPartial from "../e42/fetchPartial.js";



let dom = new PromiseDom;
dom.ready.then(___start());

function ___start() {
    console.info('e42 / dom is ready');

    const partial = new FetchPartial();
    // partial.fetchAll();



    let myPromise = new Promise(function(myResolve, myReject) {
        // "Producing Code" (May take some time)
        partial.fetchAll();

          myResolve( console.log('resolved') ); // when successful
          myReject( console.log('rejected') );  // when error
        });
        
        // "Consuming Code" (Must wait for a fulfilled Promise)
        myPromise.then(
          function(value) { /* code if successful */ __scroll() },
          function(error) { /* code if some error */ }
    );




      


      


    


}



function _scroll() {

    var target = document.getElementsByTagName("div")[0]

    function callback(e, o) {
        console.log('callback e ')
        target.style.opacity = e[0].intersectionRatio
    }

    var options = {
    root: null,
    threshold: [0, 0.1, 0.2, 0.3, 0.5, 0.7, 0.8, 0.9, 1, 1, 1]
    }

    var io = new IntersectionObserver(callback, options)
    io.observe(target)

}


function __scroll() {


    const element = document.getElementById('main');

    function lastIntersectionObserver(element) {
        let lastIntersection;
        return new Promise((resolve, reject) => {
            lastIntersection = new IntersectionObserver((entries) => {
            let entry = entries[0];
            if (!entry.isIntersecting) return;
                console.log('Element is visible ', entry.target);
                resolve(true);
            });
            lastIntersection.observe(element);
        });
    }

    let lastElement = document.querySelector('.card-element:last-child');

    startObservingElement(lastElement);

    function startObservingElement(element) {
        lastIntersectionObserver(element).then((result) => console.log({ result }));
    }


}


















/* DEBOUNCE */


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