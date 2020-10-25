import Component from "./Component";

/**
 * @summary Represents a sample component.
 * @desc Shows the correct way to instantiate a new component by
 *       extending the parent class Component.
 * */
export default class SampleComponent extends Component {
  // Sample variables
  foo = "Foo";
  bar = "Bar";

  // HTML Markup
  setHtml = () => {
    return `<div class="sample-component">
    <p class="sample-component__paragraph">This is a sample component.</p>
    <p class="sample-component__paragraph">Any valid HTML can be used here, as
        well as ${"Java" + "Script"} or instances of components (as long as they
        are using the right syntax in template literals.</p>
    <p>Values computed using JavaScript can be injected directly into the HTML,
        as long as they represent or return a string. For example:
        ${this.myFunc()}</p>
            </div>`;
  };

  // Sample function (returns "foo")
  myFunc() {
    return this.foo.indexOf("o") === 1
      ? "f" + this.foo.substring(1, this.foo.length)
      : "b" + this.bar + this.bar.substring(1, this.bar.length);
  }
}
