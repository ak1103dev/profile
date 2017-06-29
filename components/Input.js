import React from 'react';

export default () => (
  <div>
    <div className="inputBox">
      <input type="text" className="textInput" />
      <button className="sendButton">send</button>
    </div>
    <style jsx>{`
      .inputBox {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin: 0;
        color: #FFF;
      }
      .textInput {
        width: calc(100% - 50px);
        height: 32px;
        font-size: 16px;
      }
      .sendButton {
        width: 46px;
        height: 40px;
        background-color: #00b900;
        color: #FFF;
      }
    `}</style>
  </div>
);
