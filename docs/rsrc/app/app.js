/**
 * init.ts
 *
 * Initialization script for the application.
 */
import PromiseDom from '../42/PromiseDom.js';
import FetchPartial from '../42/FetchPartial.js';
async function start() {
    // Instantiate PromiseDom
    const domReady = new PromiseDom();
    try {
        await domReady.ready;
        console.log('app.start | DOM is fully loaded and parsed');
        // html message
        const appElement = document.getElementById('app');
        if (appElement) {
            appElement.innerHTML = '<h3>Welcome to version 1.0.0</h3>';
        }

    }
    catch (error) {
        console.error('app.start | Error during initialization:', error);
    }
}
// Start the script
start();
//# sourceMappingURL=app.js.map