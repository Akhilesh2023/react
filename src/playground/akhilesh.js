

class Akhilesh extends React.Component{
 addHandlor(){
    alert('Clicked on click me button');
  }
  removeHandlor(){
    alert('Clicked on remove me button');
  }
  render(){
    return(
      <div>
        <h1>Akhilesh first react</h1>
        <p> I am learning React</p>
        <button onClick={this.addHandlor}> click me to add</button>
        <button onClick={this.removeHandlor}>click me to remove</button>
      </div>
    )
  }
}
ReactDOM.render(<Akhilesh/>, document.getElementById('app'));