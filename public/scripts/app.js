"use strict";

/*console.log("App is running in background");
//JSX -javaScript XML
var template = (
  <div>
    <h1> Indeceision app</h1>
    <p>This is some info</p>
    <ol>
      <li> Item one</li>

      <li> Item two</li>
      <li> Item Three</li>
    </ol>
  </div>
  //condition : only render the subtitle (and a p tag)if subtitle exist - logical and operator
  // render new p tag -if options.length >0 "here are your option ": "Np options"
);
var app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  Options: ["One", "Two"],
};
var user = {
  name: "Akhilesh Rana",
  age: 18,
  location: "Denmark",
};

function getSubtitles(subtitle) {
  if (subtitle) {
    return <p>Subtitle: {subtitle}</p>;
  } else {
    return "No Subtitles";
  }
}*/

var count = 0;
var addOne = function addOne() {
  count++;
  renderCounterapp();
};

var minusOne = function minusOne() {
  console.log("minusOne");
};
var reset = function reset() {
  console.log("reset");
};

var appRoot = document.getElementById("app");
var renderCounterapp = function renderCounterapp() {
  var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Count: ",
      count
    ),
    React.createElement(
      "button",
      { onClick: addOne },
      " +1 "
    ),
    React.createElement(
      "button",
      { onClick: minusOne },
      " -1 "
    ),
    React.createElement(
      "button",
      { onClick: reset },
      " Reset "
    )
  );
  ReactDOM.render(templateTwo, appRoot);
};
renderCounterapp();
