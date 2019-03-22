import React, { Component} from 'react';
import { render } from 'react-dom';
import { Main } from './src/ts/Main';
import './src/style/main/style.css';

interface AppProps { }


class App extends Component<AppProps> {
  constructor(props) {
    super(props);
    this.state = { };
  }
  render() {
    return (
      <div>
       <Main/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
