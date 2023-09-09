const Person = props => {
  return <li>{props}</li>;
};

class List extends React.Component {
  state = {
    value: "",
    personsList: [],
  };

  handleInputPerson = e => {
    this.setState({
      value: e.target.value,
    });
  };

  handleAddPerson = () => {
    const personsList = [...this.state.personsList];
    personsList.push(this.state.value);
    this.setState({
      personsList,
      value: "",
    });
  };

  render() {
    const newPerson = this.state.personsList.map(person => <li>{person}</li>);
    return (
      <>
        <h1>Just a list</h1>
        <label>
          Add somebody
          <input
            type="text"
            value={this.state.value}
            onChange={e => this.handleInputPerson(e)}
          />
          <button onClick={this.handleAddPerson}>Add to List</button>
        </label>
        <ul>{newPerson}</ul>
      </>
    );
  }
}

ReactDOM.render(<List />, document.getElementById("root"));
