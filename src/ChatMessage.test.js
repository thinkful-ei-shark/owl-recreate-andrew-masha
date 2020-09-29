import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import ChatMessage from './ChatMessage.js';

const testProps = {
  event: {
    participantId: 3,
    type: 'message',
    message: 'Hello world',
    time: 1548852646559,
    timestamp: 1548852484247
  },
  participant: {

    id: 1,
    name: 'Koren Templeton',
    avatar:
      'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1',
    inSession: true,
    onStage: true

  }
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ChatMessage event={testProps.event} participant={testProps.participant} />,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
  const tree = renderer
    .create(<ChatMessage
      event={testProps.event}
      participant={testProps.participant} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
})