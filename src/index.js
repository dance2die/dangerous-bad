import React from "react";
import domElements from "./domElements";

// // https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml
// function DangerousComponent({ html, as: Component, ...rest }) {
//   return <Component dangerouslySetInnerHTML={{ __html: html }} {...rest} />;
// }

// const dangerous = html => <DangerousComponent html={html} />;

// const dangerous =

// refer to https://github.com/styled-components/styled-components/blob/master/src/constructors/styled.js
domElements.forEach(domElement => {
  dangerous[domElement] = dangerous(domElement);
});

export default dangerous;
