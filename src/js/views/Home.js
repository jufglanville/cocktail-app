import View from "./View";
import SampleComponent from "../components/SampleComponent";
import Button from "../components/SampleButton";

/**
 * Represents the view for the home page. Currently holds placeholder
 * values used for testing.
 * */
class Home extends View {
  static components = [
    new SampleComponent(),
    // Doesn't define a value for prop 'text', so will use default.
    new Button({}),
    new Button({ text: "Button #2" }),
    new Button({ text: "Something" }),
  ];
}

export default Home;
