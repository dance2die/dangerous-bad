import React from "react";

// https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml
function DangerousComponent({ html, as: Component, ...rest }) {
  return <Component dangerouslySetInnerHTML={{ __html: html }} {...rest} />;
}

const dangerous = html => <DangerousComponent html={html} />;
