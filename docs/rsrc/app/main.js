/**
 * PromiseDom
 */
import PromiseDom from "./promiseDom.js";

let dom = new PromiseDom;
dom.ready.then(___start());

function ___start() {
    console.info('_42 / dom is ready');

    // const partial = new FetchPartial();
    // partial.fetchAll();
}




