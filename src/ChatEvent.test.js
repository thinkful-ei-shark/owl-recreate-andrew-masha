import React from 'react';
import ReactDOM from 'react-dom'

import ChatEvent from './ChatEvent.js'

const testProps = {
  participant:
  {
    id: 1,
    name: 'Koren Templeton',
    avatar:
      'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1',
    inSession: true,
    onStage: true
  },
  event: 
  {
    participantId: 3,
    type: 'message',
    message: 'Hello world',
    time: 1548852646559,
    timestamp: 1548852484247
  }
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ChatEvent event={testProps.event} participant={testProps.participant} />,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
})