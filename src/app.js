const obj={
  name: 'Akhilesh',
  getName(){
    return this.name;
  }
}
const getName=obj.getName.bind({name:'Akhilesh'});
console.log(getName());

class IndecisionApp extends React.Component{
  render(){
  const title='Indecision';
  const subtitle=' Put your life in hand of Computer';
  const options=['Thing one','Thing two','Thing three'];
    return(
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action />
        <Options options={options}/>
        <AddOption />

      </div>
    )
  }
}

class Header extends React.Component {
render(){
  return (
  <div>
    <h1> {this.props.title} </h1>
    <h2>{this.props.subtitle} </h2>
  </div>
  );
}
} 

class Action extends React.Component{
  handlePick(){
    alert(' What should i do?');
  }
  render(){
    return(

      <div>
<button onClick={this.handlePick}> What should i do?</button>
</div>
    );
 }
}

class Options extends React.Component{
  constructor(props){
    super(props);
    this.hanldeRemoveAll=this.hanldeRemoveAll.bind(this);
  }
  hanldeRemoveAll(){
console.log(this.props.options);
    alert('do you want to remove all?');
  }
  render(){
    return(
      <div>
      <button onClick={this.hanldeRemoveAll}>Remove all</button>
        {
          //this.props.options.map((option)=>  <p key={option}> {option} </p>)
          this.props.options.map((option)=> <Option key={option} optionText={option}/>)


        }

      </div>

    );
  }
}

class Option extends React.Component{
  render(){
    return(
      <div>
    
      {this.props.optionText}</div>
    )
  }
}

class AddOption extends React.Component{
  handleAddOption(e) {
    e.preventDefault();
    const option =e.target.elements.option.value.trim();

    if (option) {
      alert(option);
    }
  }
  render(){
    return(
      <div>
    <form onSubmit={this.handleAddOption}>
      <input type="text" name="option" />
      <button>Add Option</button>
   
    </form>
      </div>
    );
  }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

