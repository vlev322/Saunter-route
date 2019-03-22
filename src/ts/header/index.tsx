import React, {Component} from 'react'
import { render } from 'react-dom';

export class Header extends Component{
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div className='header'>
        <a>
          <img src=''/>
          <span>Saunter</span>
        </a>
      </div>
    );
  }
}