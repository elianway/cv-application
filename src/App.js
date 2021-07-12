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
      <div>
        <General mode={mode} />
        <Education mode={mode} />
        <Experience mode={mode} />
        <Button mode={mode} handleButton={this.handleButton} />
      </div>
    );
  }
}

export default App;