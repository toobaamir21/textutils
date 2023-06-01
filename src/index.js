import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';


//using react
// const links = "https://picsum.photos/205/300"


//ReactDOM is a package that provides DOM specific methods that can be used at the top level of a web app to enable an efficient way of managing DOM elements of the web page. ReactDOM provides the developers with an API containing the following methods and a few more. 
   //render()
   // findDOMNode()
   // unmountComponentAtNode()
   // hydrate()
   // createPortal()
//Call createRoot to create a React root for displaying content inside a browser DOM element.
//After you’ve created a root, you need to call root.render to display a React component inside of it:
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
   {/* <h1>hello</h1>
  <img src="https://picsum.photos/200/300" alt="hello" />
  <img src={links} alt="hi" />  */}

  <App/>

 
  </>
);

//behind the scenes react-> babel complies the above code in to this below code
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render( /*#__PURE__*/React.createElement("h1", null, "hello world"));

//creating the same thing using js
// const h1 = document.createElement("h1");
// h1.innerHTML="Tooba Amir";
// document.getElementById("root").appendChild(h1);


//reportWebVitals();
