import React from "react";
import ReactDOM from 'react-dom/client';

const container = ReactDOM.createRoot(document.getElementById('root'));

const classObj = {className:'heading'};

const heading = React.createElement('h1',classObj,"Hello World!");
console.log(heading);
const innerDiv = React.createElement('div',{className:'innerDiv'},heading);
container.render(innerDiv);
