import React from 'react;'
import './App.css';

class App extends React.component {
  state = {
    name: '',
    password:'',
  }

  handleChange = (event) => {
    const { target { value, name } } = event;
    this.setState({ [name]: value})
  };

  render() {
    return (
      <section>
        <form>
          <input type="email" name="name" onChange={this.handleChange}></input>
        </form>
      </section>
    )
  }
}

export default App;
