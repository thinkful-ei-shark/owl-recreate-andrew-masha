import React from 'react';
import ChatEvent from './ChatEvent.js'
import ChatMessage from './ChatMessage.js';

function ChatLog(props) {
  const eventItems = props.events.map((event, i) => {
    const participant = props.participants.find(
      p => p.id === event.participantId);
    if (!event.message) {
      return (
        <ChatEvent
          key={i}
          event={event}
          participant={participant} 
        />
      )
    } else {
      return (
        <ChatMessage 
          key={i}
          event={event}
          participant={participant}
        />
      )
    }
  })
  return (
    <ul className='Chat-log'>
      {eventItems}
    </ul>
  )
}

export default ChatLog;