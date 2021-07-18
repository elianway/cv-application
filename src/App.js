import React from 'react';
import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';
import Button from './components/Button';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      mode: 'Submit',
    };

    this.handleButton = this.handleButton.bind(this)
  }

  handleButton = () => {
    if (this.state.mode === 'Edit') {
      this.setState({
        mode: 'Submit',
      });
    } else {
      this.setState({
        mode: 'Edit',
      });
    };
  };

  render() {
    const { mode } = this.state;
    return (
      <div className="container">
        <General mode={mode} />
        <Education mode={mode} />
        <Experience mode={mode} />
        <Button mode={mode} handleButton={this.handleButton} />
      </div>
    );
  }
}

export default App;

//changes to make - store all state here and pass down
//need handler functions for adding and removing fields
//handlers for changes
//emptyCV for start and reset
//view docs for style-component and implement