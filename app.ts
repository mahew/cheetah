interface Lookup<T> {[key: string]: T};
interface Route {url: string, page?: string}
export type RouteLookup = Lookup<Route>

/**
 * cheetah app
 */
export class App {
    private head = document.head;
    private root = document.body;

    public router: Router;

    constructor(routes: RouteLookup, ...staticComponents: any) {
        this.router = new Router(routes);
    }
}

/**
 * router handles paths, query params and page loading
 * if a page is already loaded for the current path,
 * the query params will be validated again the page
 */
class Router {
    constructor(private routes: RouteLookup) {
        window.addEventListener("popstate", (ev) => {
            console.log("pop: ", ev);
        });
    }

    /**
     * goes to a specified path, needs path to have been setup
     * in routing
     * @param path 
     */
    public async go(path: string) {
        if (this.routes[path]) {

        }
    }
}

export class Page {

}