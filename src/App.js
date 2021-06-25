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
 -section box
 -input field
 -button
 
 */
import React from 'react';
import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';
import Headshot from './components/Headshot';

function App() {
  return (
    //general information section

    //educational experience section

    //practical experience section

    //submit/edit button

  );
}

export default App;
