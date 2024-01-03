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
    partial.fetchAll();

    // _scroll();

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