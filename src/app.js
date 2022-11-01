import React from 'react';
import Header from './components/Header/index.js';
import Main from './components/Main/index.js';

import ToDo from './components/todo/todo.js';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main>{/* <ToDo /> */}</Main>
      </>
    );
  }
}
