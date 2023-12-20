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



// eof