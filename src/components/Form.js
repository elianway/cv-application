import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };
  render() {
    const { mode, fieldName } = this.props;

    if (mode === 'Edit') {
      return (
        <div>
          <form>
            <label htmlFor="inputField">{fieldName}: </label>
            <input
            onChange={this.handleChange}
            value={this.state.content}
            type="text"
            id="inputField"/>
          </form>
        </div>
      );
    } else if (mode === 'Submit') {
      return (
        <div>
          <h3>{fieldName}: </h3>
          <p>{this.state.content}</p>
        </div>
      );
    };
  }
}

export default Form;