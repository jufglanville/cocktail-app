/**
 * @summary Represents a modular HTML component.
 * @desc The Component class acts as a blueprint for every Component
 *       that extends it, providing an access method to retrieve the
 *       HTML markup of the component. Classes that extend Component
 *       only have to assign a string with valid HTML to the static
 *       variable 'html', and can legally instantiate new components
 *       as well as static markup.
 * */
export default class Component {
  static html = "";

  /**
   * Returns the HTML markup for the component.
   * @return {String} the HTML markup.
   * @throws {Error} when the HTML markup is undefined.
   * */
  static getHtml() {
    if (this.html) {
      return this.html;
    } else {
      throw new Error("HTML markup not found for component: " + this.name);
    }
  }
}
