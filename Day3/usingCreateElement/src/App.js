import React from "react";
import ReactDOM from 'react-dom/client';

const container = ReactDOM.createRoot(document.getElementById('root'));

const classObj = {className:'heading'};

const heading1 = React.createElement('h1',classObj,"Namaste React Bootcamp");
const heading2 = React.createElement('h2',classObj,"from Zero to Hero");
const heading3 = React.createElement('h3',classObj,"in 3 months");

const innerDiv = React.createElement('div',{className:'innerDiv'},heading1,heading2,heading3);
container.render(innerDiv);
