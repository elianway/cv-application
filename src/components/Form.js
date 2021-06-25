const Form = (props) => {
  const { fieldName } = props;

  return (
    <form onSubmit={this.handleSubmit}>
      <label htmlFor="fieldInput">{fieldName}: </label>
      <input
        onChange={this.handleChange}
        value={fieldName}
        type="text"
        id="fieldInput"/>
    </form>
  );
}

export default Form;