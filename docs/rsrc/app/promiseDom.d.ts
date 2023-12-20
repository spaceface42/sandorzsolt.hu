/**
 *
 * document.readyStates = loading || interactive || complete
 *
 * usage
 *
 * let dom = new PromiseDom()
 *
 * dom.ready.then(() => start('one'))
 * dom.ready.then(() => start('two'))
 * etc...
 *
 * function start(message) {
 *     console.log('___ startup script: ', message)
 * }
 *
 */
declare class PromiseDom {
    constructor();
    ready: Promise<void>;
}
export default PromiseDom;
