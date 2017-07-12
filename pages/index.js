import React, { Component } from 'react';
// import Link from 'next/link';

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
      <div className="content">
        <div className="container">
          <h1>Apichan Chaiyutthasat</h1>
        </div>
        <style jsx>{`
          .container {
            width: 100%;
            text-align: center;
          }
        `}</style>
      </div>
    );
  }
}
