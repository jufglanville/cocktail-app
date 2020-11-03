import Home from "./views/Home";
import View from "./views/View";
import Weather from "./components/Weather";
import Location from "./components/Location";

/**
 * @summary Initialises and handles the rendering of views in the app.
 * @desc Creates an application that initially renders the Home view,
 *       and allows further DOM updates via the render method. For views
 *       to be rendered, they need to extend the View component, as well
 *       as implement a valid render method.
 * */
class App {
  /**
   * Builds the HTML using the render method of the given view, then injects
   * it into the DOM if it's valid - else, throw as error.
   * @param {View} view a class that extends View with a render method.
   * @throws {Error} when the render method of the view is undefined.
   * */
  static render(view) {
    const rootNode = document.getElementById("root");
    const html = view.render();
    if (html) {
      rootNode.innerHTML = html;
    } else {
      throw new Error("HTML markup not found for view: " + view.name);
    }
  }

  /**
   * Initialises the application by attaching the render method to the window
   * object, then renders the Home view.
   * */
  static init() {
    window.render = this.render;
    render(Home);
  }
}

App.init();



const state = {};

// For testing
window.state = state;

window.addEventListener('load', () => {

    // Create a new Location IF there is none yet
    if (!state.location) state.location = new Location();
    state.location.getLocation();

    // Create a new Weather IF there is none yet
    if (!state.weather) state.weather = new Weather();
    // state.weather.getWeather(state.location.latitude, state.location.longitude);

});