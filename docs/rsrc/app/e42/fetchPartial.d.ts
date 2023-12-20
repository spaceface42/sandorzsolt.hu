/**
 *
 * Searces dom all partial tags: <link rel="html" href="partial.html" />
 * checks for rel="html" and href="partial.html" values
 *
 * usage
 *
 * html
 *
 * <link rel="html" href="partial.html" />
 *
 * or use it with a wrapper
 * <div class="partial">
 *     <link rel="html" href="./baz.html" />
 * </div>
 *
 * js
 *
 * then check if dom is ready and..
 *
 * MULTIPLE PARTIALS
 * partial.fetchAll( 'link[rel="html"]' )
 * or
 * const partial = new FetchPartial()
 * partial.fetchAll()
 *
 * partial.fetchAll( 'link[rel="html"]' )
 *
 *
 * SINGLE PARTIAL
 * const partial_tag = document.select by ID
 * const partial = new FetchPartial()
 * partial.fetchOne(partial_tag)
 *
 */
declare class FetchPartial {
    constructor();
    fetchOne(url?: any, _element?: any): Promise<void>;
    fetchAll(_selector?: string): Promise<void>;
    makeRequest(url: string): Promise<string>;
    processRequest(response: any, _el: any): Promise<void>;
    fetch(url: string, _el: NodeListOf<any>): Promise<void>;
}
export default FetchPartial;
