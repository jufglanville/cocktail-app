/**
 * @summary Renders the appropriate view based on the hash in the URL.
 * @desc Dynamically renders a specific view component whenever the
 *       value of the hash in the URL changes. Each view is registered
 *       to a hash in the 'routes' object, and requests to hashes that
 *       are not associated to a component will throw an exception.
 *
 * @example const routes = {
 *     "/": Home,
 *     "/foo": Foo,
 *     "/bar": Bar
 * }
 * */

import Home from "../views/Home";

const routes = {
  "/": Home,
};

/**
 * Parses and returns the value of the hash in the request URL. If the
 * URL doesn't explicitly specify a hash, returns "/".
 *
 * @return {String} the requested hash.
 * */
const parseHash = () => {
  const hash = location.hash.slice(1).toLowerCase();
  return hash ? hash : "/";
};

/**
 * Renders the view associated with the hash in the URL.
 *
 * @throws {SyntaxError} whenever a hash doesn't have an associated view.
 * */
const render = async () => {
  const rootNode = document.getElementById("root");
  const requestHash = parseHash();

  if (routes[requestHash]) {
    const view = routes[requestHash];
    rootNode.innerHTML = await view.render();
  } else {
    throw new SyntaxError("Invalid hash found while rendering: " + requestHash);
  }
};

// Adds event listeners to render on hash change and page load.
window.addEventListener("hashchange", render);
window.addEventListener("load", render);
