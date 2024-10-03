/**
 * PartialContentInjector v1.0.2
 *
 * PartialContentInjector class injects partial HTML content into the DOM,
 * maintaining the original sequence of the partials.
 */
// import { FetchError, HTTPError, ContentTypeError } from './customErrors.js';
import PartialContentFetcher from './PartialContentFetcher.js';
class PartialContentInjector {
    constructor(allowedCrossOriginDomains, baseUrl) {
        if (!allowedCrossOriginDomains || allowedCrossOriginDomains.length === 0) {
            throw new Error('ALLOWED_DOMAINS is undefined or empty. Please configure allowed domains.');
        }
        this.partialContentFetcher = new PartialContentFetcher(baseUrl);
        this.allowedCrossOriginDomains = allowedCrossOriginDomains;
    }


    async injectAllPartials(selector = 'link[rel="html"]') {
        const partials = document.querySelectorAll(selector);
        await Promise.all(Array.from(partials).map(async (partial) => {
            const url = partial.getAttribute('href');
            if (!url) {
                throw new Error(`injectAllPartials: No URL provided for element: ${partial.outerHTML}`);
            }
            await this.injectPartial(url, partial);
        }));
    }

    async injectSinglePartial(url, targetSelector) {
        const targetElement = document.querySelector(targetSelector);
        if (!targetElement) {
            throw new Error(`Target element not found for selector: ${targetSelector}`);
        }
        await this.injectPartial(url, targetElement);
    }




    async injectPartial(url, element) {
        try {
            let content;
            if (this.partialContentFetcher.isSameOrigin(url)) {
                content = await this.partialContentFetcher.fetchContent(url);
            }
            else if (this.isAllowedCrossOrigin(url)) {
                content = await this.partialContentFetcher.fetchContent(url, {
                    mode: 'cors',
                    credentials: 'omit'
                });
            }
            else {
                throw new Error(`Cross-origin request not allowed for: ${url}`);
            }
            this.insertContent(content, element);
        }
        catch (error) {
            console.error(`Error injecting partial from ${url}:`, error instanceof Error ? error.message : String(error));
            throw error;
        }
    }






    isAllowedCrossOrigin(url) {
        try {
            const urlObject = new URL(url);
            return this.allowedCrossOriginDomains.includes(urlObject.hostname);
        }
        catch (error) {
            console.warn(`Invalid URL: ${url}`);
            return false;
        }
    }


    async insertContent(content, element) {
        console.log('_________________________');
        console.log('Content to be inserted:', content);
        console.log('_________________________');
    
        try {
            // Create a temporary container
            const temp = document.createElement('div');
            temp.innerHTML = content;
    
            let svgCount = 0;
    
            const insertWithDelay = async (node, delay) => {
                return new Promise(resolve => {
                    setTimeout(() => {
                        element.parentNode.insertBefore(node, element);
                        resolve();
                    }, delay);
                });
            };
    
            // Process and insert each node
            for (let child of Array.from(temp.childNodes)) {
                if (child instanceof SVGElement) {
                    svgCount++;
                    console.log(`Processing SVG ${svgCount}`);
    
                    const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                    svgElement.innerHTML = child.innerHTML;
                    for (let i = 0; i < child.attributes.length; i++) {
                        svgElement.setAttribute(child.attributes[i].name, child.attributes[i].value);
                    }
                    await insertWithDelay(svgElement, 100); // 100ms delay
                } else {
                    element.parentNode.insertBefore(child, element);
                }
            }
    
            console.log(`Total SVGs processed: ${svgCount}`);
            console.log('All content inserted successfully');
            element.remove();
            console.log('Original element removed');
        }
        catch (error) {
            console.error('insertContent: Error inserting HTML:', error instanceof Error ? error.message : String(error));
            throw error;
        }
    
        console.log('_________________________');
    }


    insertContentOOOOO(content, element) {
        console.log('_________________________');
        console.log(content);
        console.log('_________________________');
        try {
            element.insertAdjacentHTML('beforebegin', content.trim());
            element.remove();
        }
        catch (error) {
            console.error('insertContent: Error inserting HTML:', error instanceof Error ? error.message : String(error));
            throw error;
        }
    }


    insertContentXXX(content, element) {
        console.log('_________________________');
        console.log('Content to be inserted:', content);
        console.log('_________________________');
        console.log('Target element:', element);
    
        try {
            const trimmedContent = content.trim();
            console.log('Trimmed content:', trimmedContent);
    
            element.insertAdjacentHTML('beforebegin', trimmedContent);
            console.log('Content inserted successfully');
    
            // Log the inserted content
            console.log('Inserted content:', element.previousSibling);
    
            element.remove();
            console.log('Original element removed');
        }
        catch (error) {
            console.error('insertContent: Error inserting HTML:', error instanceof Error ? error.message : String(error));
            throw error;
        }
    
        console.log('_________________________');
    }






        // ... other methods ...
    
        insertContentXXXXX(content, element) {
            console.log('_________________________');
            console.log('Content to be inserted:', content);
            console.log('_________________________');
        
            try {
                // Create a temporary container
                const temp = document.createElement('div');
                temp.innerHTML = content;
        
                // Process and insert each node
                while (temp.firstChild) {
                    if (temp.firstChild instanceof SVGElement) {
                        // For SVG elements, use SVG namespace
                        const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                        svgElement.innerHTML = temp.firstChild.innerHTML;
                        for (let i = 0; i < temp.firstChild.attributes.length; i++) {
                            svgElement.setAttribute(temp.firstChild.attributes[i].name, temp.firstChild.attributes[i].value);
                        }
                        element.parentNode.insertBefore(svgElement, element);
                    } else {
                        element.parentNode.insertBefore(temp.firstChild, element);
                    }
                }
        
                console.log('All content inserted successfully');
                element.remove();
                console.log('Original element removed');
            }
            catch (error) {
                console.error('insertContent: Error inserting HTML:', error instanceof Error ? error.message : String(error));
                throw error;
            }
        
            console.log('_________________________');
        }





    





}
PartialContentInjector.VERSION = '1.2.1';
export default PartialContentInjector;
//# sourceMappingURL=PartialContentInjector.js.map