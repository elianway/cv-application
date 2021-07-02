import React from 'react';
import Section from './components/Section';
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
        <Section mode={mode} title="General" />
        <Section mode={mode} title="Education" />
        <Section mode={mode} title="Experience" />
        <Button mode={mode} handleButton={handleButton} />
      </div>
    );
  }
}

export default App;