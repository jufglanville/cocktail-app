/**
 * @summary Represents a view made up of multiple components.
 * @desc The View class acts as a blueprint for every object
 *       that extends it, providing ways to dynamically build
 *       the HTML content via the use of components. Children
 *       classes only have to populate the 'components' array
 *       using valid classes that extend 'Component', so that
 *       the render method builds them sequentially.
 * */

export default class View {
  static components = [];

  /**
   * Builds the HTML markup for the view by getting the HTML
   * of every component, then returns it as a string.
   * @return {String} the HTML markup for the view.
   * */
  static render() {
    let view = "";
    for (let i in this.components) {
      view += this.components[i].getHtml();
    }
    return view;
  }
}
