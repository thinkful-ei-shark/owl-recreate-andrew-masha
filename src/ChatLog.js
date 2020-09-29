import React from 'react';
import ChatEvent from './ChatEvent.js'

function ChatLog(props) {
  const eventItems = props.events.map((event, i) => {
    if (event.message) {
      return (
        <ChatEvent
          key={i}
          event={event}
          participant={props.participants.find(
            p => p.id === event.participantId)} />
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