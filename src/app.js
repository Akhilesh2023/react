class IndecisionApp extends React.Component {
  constructor (props){
    super(props);
    this.state={
      options:["Thing One", "Thing Two", "Thing Three"]
    };

    }
  
  render() {
    const title = "Akhilesh Rana";
    const subtitle = "My name is Akhilesh Rana";
    

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action hasOptions={this.state.options.length>0}/>
        <Options options={this.state.options} />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick(){
    alert('handlePick!');
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}
        disabled={this.props.hasOptions}
        >
        What should I eat?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  handleRemoveAll(){
    alert('handleRemoveAll');
  }
  render() {
    return (
      <div>
      <button onClick={this.handleRemoveAll}>Remove all</button>
        {this.props.options.map((option) => (
          <Option key={option} optionText={option} />
        ))}
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return <div>{this.props.optionText}</div>;
  }
}
class AddOption extends React.Component {
  handleAddOption(e){
    e.preventDefault();

    const option = e.target.elements.option.value;
    if(option){
      alert(option);
    }
  }
  render() {
    return <div>
    <form onSubmit={this.handleAddOption}>
      <input type="text" name="option"/>
    <button>Add Option</button>
    </form>
    AddOption Key is here.</div>;
  }
}


ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
