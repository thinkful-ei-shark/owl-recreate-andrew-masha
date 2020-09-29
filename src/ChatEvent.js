import React from 'react';

function ChatEvent(props) {
  const eventTexts = {
    'thumbs-up': 'gave a thumbs up',
    'thumbs-down': 'gave a thumbs down',
    'raised-hand': 'raised their hand',
    'clap': 'clapped',
    'join': 'joined',
    'join-stage': 'joined the stage',
    'leave': 'left',
    'leave-stage': 'left the stage'
  };
  return (
    <li className={props.event.type}>
      <span className='participant-name'>{props.participant.name}</span>
      <span className='event-text'>{eventTexts[props.event.message]}</span>
    </li>
  )
}

export default ChatEvent;