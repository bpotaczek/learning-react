import { React, Component } from 'react';
import './App.scss';
import {Header} from "./components/header/header";

export class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
      </div>
    );
  }
}

