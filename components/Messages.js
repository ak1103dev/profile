import React from 'react';
import { arrayOf, shape, string, bool } from 'prop-types';

export default function Messages({ messages }) {
  return (
    <div>
      <div className="messages">
        { messages[0].message }
      </div>
      <style jsx>{`
        .messages {
          margin-top: 57px;
        }
      `}</style>
    </div>
  );
}

Messages.propTypes = {
  messages: arrayOf(shape({
    message: string.isRequired,
    isOwner: bool.isRequired,
  })),
};
Messages.defaultProps = {
  messages: [],
};
