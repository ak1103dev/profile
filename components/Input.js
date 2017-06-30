import React from 'react';

export default () => (
  <div>
    <div className="inputBox">
      <textarea className="textInput" />
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
        position: relative;
        top: 16px;
        width: calc(100% - 52px);
        font-size: 16px;
        resize: none;
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
