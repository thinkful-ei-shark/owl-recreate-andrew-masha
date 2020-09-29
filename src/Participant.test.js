import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Participant from './Participant.js'

const testObject = {
  id: 1,
  name: 'Koren Templeton',
  avatar:
      'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1',
  inSession: true,
  onStage: true
}

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <Participant props={testObject} />,
    div
  )

  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
  const tree = renderer
    .create(<Participant props={testObject} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});