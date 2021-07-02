/*Think about how to structure your application into components. Your application should include:
A section to add general information like name, email, phone number.
A section to add your educational experience (school name, title of study, date of study)
A section to add practical experience (company name, position title, main tasks of your jobs, date from and until when you worked for that company)
Be sure to include an edit and submit button for each section or for the whole CV, your preference. 
The submit button should submit your form and display the value of your input fields in HTML elements. 
The edit button should add back (display) the input fields, with the previously displayed information as values. 
In those input fields, you should be able to edit and resubmit the content. You’re going to make heavy
 use of state and props, so make sure you understood those concepts. 
 
 components needed:
 -headshot box
 -input field
 -button
 
 */
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

//logic is - each form element should update its own state with input value on change. submit button should convert
    //all input fields to HTML elements. App state should handle mode value and pass it down to each section/form 
    //component as props.  pass down it's name in props