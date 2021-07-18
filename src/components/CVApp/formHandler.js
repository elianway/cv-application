import React from 'react';
import Form from './Form';
import HtmlElement from './htmlElement';

class FormHandler extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
    };
  }

  handleInput = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  render() {
    const { fieldName } = this.props;
    const { input } = this.state;
    let element;
    if (this.props.mode === "Submit") {
      element = <Form fieldName={fieldName} input={input} handleInput={this.handleInput} />
    } else {
      element = <HtmlElement fieldName={fieldName} input={input} />
    }

    return (
      <div>
        {element}
      </div>
    );
  }
}

export default FormHandler;