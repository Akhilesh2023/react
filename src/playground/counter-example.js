class Counter extends React.Component{
  constructor(props){
    super(props);
    this.handleAddOne=this.handleAddOne.bind(this);
    this.handleMinusOne=this.handleMinusOne.bind(this);
    this.handleReset=this.handleReset.bind(this);
  this.state={
    count:0
  }}
  handleAddOne(){
   this.setState((prevState)=> {
    return{
      count: prevState.count+1
    }
   })
  }
  handleMinusOne(){
    this.setState((prevState)=> {
      return{
        count: prevState.count-1
      }
     })
  }
  handleReset(){
   this.setState(()=>{
    return{
      count:1
    }
   })
  
  }
  render(){
    return(
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    )
  }
}

ReactDOM.render(<Counter/>,document.getElementById('app'));
/*console.log("App.js is running!");

const app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: ["One", "Two"],
};
const template = (
  <div>
    <h1>{app.title} </h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? "Here are your options" : "No options"} </p>
    <ol>
      <li>Item One</li>
      <li> Item Two</li>
    </ol>
    <form></form>
  </div>
);
const appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);
*/