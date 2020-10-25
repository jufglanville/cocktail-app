/**
 * @summary Represents a modular HTML component.
 * @desc The Component class acts as a blueprint for every Component
 *       that extends it, providing an access method to retrieve the
 *       HTML markup of the component. Classes that extend Component
 *       only have to assign a string with valid HTML to the static
 *       variable 'html', and can legally instantiate new components
 *       as well as static markup.
 * */
class Component {
  /**
   * Defines the default value of each prop, as well as whether it
   * is required. The default value is only used if a prop is not
   * required and has no explicit value given in the constructor.
   * The default value of isRequired is false, so it can be omitted;
   * similarly, it's unnecessary to define a default value for any
   * required prop, since their values must be explicitly specified.
   *
   * @type {{}}
   * @example
   * propTypes = {
   *     propName: {
   *         isRequired: false,
   *         default: 123,
   *     },
   * }
   * @example
   * propTypes = {
   *     foo: {
   *         default: "Foo",
   *     },
   *     bar: {
   *         isRequired: true
   *     }
   * }
   */
  propTypes = {};

  /**
   * Creates and returns a new instance of the component, assigning
   * to it all of the props passed to the constructor.
   * @param {Object} props An object that holds all props that have
   *                 been used in the component for dynamic values.
   * */
  constructor(props) {
    this.props = props;
  }

  /**
   * Checks each passed prop to ensure that all required ones have
   * been specified in the constructor. If a prop has a default value,
   * it's used whenever a value has not been explicitly specified.
   * @throws {Error} when a required prop was not explicitly specified.
   */
  validateProps = () => {
    for (let i in this.propTypes) {
      let prop = this.propTypes[i];
      if (prop.isRequired && !this.props.hasOwnProperty(i)) {
        throw new Error(
          `Required property "${i}" not found in component: ${this.constructor.name}`
        );
      } else {
        this.props[i] = this.props[i] || prop.default;
      }
    }
  };

  /**
   * Directly returns the HTML markup for the component. This function
   * must be implemented by children classes, and has to return valid HTML.
   * @return the HTML markup for the component.
   */
  setHtml = () => {
    return "";
  };

  /**
   * Returns the HTML markup for the component.
   * @return {String} the HTML markup.
   * @throws {Error} when the HTML markup is undefined.
   * */
  getHtml = () => {
    this.validateProps();
    this.html = this.setHtml();
    if (this.html) {
      return this.html;
    } else {
      throw new Error(
        "HTML markup not found for component: " + this.constructor.name
      );
    }
  };
}

export default Component;
