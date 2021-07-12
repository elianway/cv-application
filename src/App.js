import React from 'react';
import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';
import Button from './components/Button';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      mode: 'edit',
    };
  }

  handleButton = () => {
    if (this.state.mode === 'edit') {
      this.setState({
        mode: 'submit',
      });
    } else {
      this.setState({
        mode: 'edit',
      });
    };
  };

  render() {
    const { mode, handleButton } = this.state;
    return (
      <div>
        <General mode={mode} />
        <Education mode={mode} />
        <Experience mode={mode} />
        <Button mode={mode} handleButton={handleButton} />
      </div>
    );
  }
}

export default App;