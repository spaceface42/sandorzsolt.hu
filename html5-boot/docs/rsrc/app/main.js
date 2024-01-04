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

          _scroll(); // when successful
          myReject();  // when error
        });
        
        // "Consuming Code" (Must wait for a fulfilled Promise)
        myPromise.then(
          function(value) { /* code if successful */ },
          function(error) { /* code if some error */ }
    );




      


      


    


}

/*
function _scroll() {

    console.log('F: _scroll');

    const sections = document.querySelectorAll('p');
    
    window.addEventListener("scroll", (event) => {
      // console.log('F: Scroll event fired!');
      setTimeout(() => {
        // console.log('F: Waiting on scroll events...');

        sections.forEach(sec => {

            console.log('foreach');

            let top = window.scrollY;
            let offset = sec.offsetTop;
            let height = sec.offsetHeight;

            console.log('F: top = ', top);
            console.log('F: top = ', offset);
            console.log('F: top = ', height);

            if (top >= offset && top < offset + height) {
                console.log('add animate in');
                sec.classList.add('animate-in');
            } else {
                console.log('remove animate in');
                sec.classList.remove('animate-in');
            }
        })

        // output.innerHTML = "Waiting on scroll events...";

      }, 1000);
    });


}*/

function _scroll() {

console.log('_scroll')




// var target = document.getElementsByTagName("blockquote")[0]

var target = document.getElementsByTagName("blockquote")[0]


function callback(e, o) {
    console.log('callback e ')
   target.style.opacity = e[0].intersectionRatio

}

var options = {
   root: null,
   threshold: [0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1]
}

var io = new IntersectionObserver(callback, options)
io.observe(target)
















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