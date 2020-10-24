/**
 * @summary Represents the view for the home page.
 * */

import View from "./View";

export default class Home extends View {

    constructor() {
        super();
        console.log(this.props)
    }

    /**
     * Builds and returns the HTML ready to be rendered.
     * @return {String} the HTML to inject in the DOM.
     * */
    static async render() {
        const view = `
            <div class="home">
                <p>Sample Home</p>
            </div>
        `;
        return view;
    }
}
