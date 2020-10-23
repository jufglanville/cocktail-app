/**
 * @summary Represents the view for the home page.
 * */

export default class Home {
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
