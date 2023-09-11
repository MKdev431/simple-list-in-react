const Person = props => {
  return (
    <li>
      <span>{props.name}</span>
      <button
        onClick={props.delete}
        key={props.id}
      >
        Delete
      </button>
    </li>
  );
};

class List extends React.Component {
  state = {
    people: [
      { id: 1, name: "Jan K." },
      { id: 2, name: "Piotr C." },
      { id: 3, name: "Marysia W." },
      { id: 4, name: "John S." },
    ],
  };

  handleDelete(id) {
    const people = [...this.state.people];
    const index = people.findIndex(person => person.id === id);
    people.splice(index, 1);
    this.setState({
      people,
    });
  }
  render() {
    const people = this.state.people.map(person => (
      <Person
        key={person.id}
        name={person.name}
        delete={this.handleDelete.bind(this, person.id)}
      />
    ));
    return <ul>{people}</ul>;
  }
}

ReactDOM.render(<List />, document.getElementById("root"));
