class PromiseDom {
    /**
     * Initializes PromiseDom instance.
     * @param document The document object to use. Default is window.document.
     */
    constructor(document = window.document) {
        this.document = document;
        console.info('PromiseDom v1.0.0 initialized');
        this.ready = new Promise((resolve, reject) => {
            try {
                const state = this.document.readyState;
                if (state === 'interactive' || state === 'complete') {
                    resolve();
                }
                else {
                    const onDOMContentLoaded = () => {
                        resolve();
                        this.document.removeEventListener('DOMContentLoaded', onDOMContentLoaded);
                    };
                    this.document.addEventListener('DOMContentLoaded', onDOMContentLoaded, false);
                }
            }
            catch (error) {
                console.error('Error initializing PromiseDom:', error);
                reject(error);
            }
        });
    }
}
export default PromiseDom;
//# sourceMappingURL=PromiseDom.js.map