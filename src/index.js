import React from 'react';
import ReactDOM from 'react-dom';
import MainView from "./main-view";

ReactDOM.render(
    <MainView/>,
    document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
