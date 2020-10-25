import Component from "./Component";

/**
 * @summary Represents a sample button.
 * */
export default class Button extends Component {
  // Sample props
  propTypes = {
    text: {
      // Can be omitted, or explicitly specified for added clarity.
      // Defaults to false.
      isRequired: false,
      default: "GO",
    },
  };

  // Sample markup
  setHtml = () => {
    return `<div class="button">${this.props.text}</div>`;
  };
}
