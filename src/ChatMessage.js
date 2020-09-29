import React from 'react';

function ChatMessage(props) {
  const time = new Date(props.event.timestamp);
  return (
    <li className="chat-message">
      <img src={props.participant.avatar} alt="avatar" />,
      <div className="byline">
        <span className="participant-name">{props.participant.name}</span>
        <span className="eventTime">{time.toDateString()}</span>
      </div>,
      <div className="message-text">{props.event.message}</div>
    </li>
  )
}

export default ChatMessage;