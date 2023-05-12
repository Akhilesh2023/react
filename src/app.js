console.log("App is running in background");
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
}

let count = 0;
const addOne = () => {
  count++;
  renderCounterApp();
};

const minusOne = () => {
  count--;
  renderCounterApp();
};
const reset = () => {
  count = 0;
  renderCounterApp();
};

const appRoot = document.getElementById("app");

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};
renderCounterApp();
