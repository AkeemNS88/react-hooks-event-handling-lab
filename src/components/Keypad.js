import React from 'react';

//Create a Keypad React Component that renders an input type
// input type to be rendered is <input type="password" />
// add an event handler that listens for the change event.
// When the event fires, use console. log to print out text 'Entering password...'
function Keypad() {
    return <input type="password" onChange={() => console.log("Entering password...")}/>;
}




export default Keypad