import React, { Component } from 'react';
// import Link from 'next/link';
import NavigationBar from '../components/NavigationBar';
import Input from '../components/Input';
import Messages from '../components/Messages';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      messages: [{
        message: 'hello',
        isOwner: true,
      }],
    };
  }

  render() {
    return (
      <div>
        <div className="container">
          <NavigationBar />
          <Messages messages={this.state.messages} />
          <Input />
        </div>
        <style jsx>{`
          .container {
            width: 100%;
          }
        `}</style>
      </div>
    );
  }
}
