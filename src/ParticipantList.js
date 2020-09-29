import React from 'react'
import Participant from './Participant.js'

function ParticipantList(props) {
  const participants = props.list.map(participant => (
  <Participant key={participant.id} props={participant} />
    )
  )
  return (
    <ul className="Participant-list">
      {participants}
    </ul>
  )
}

export default ParticipantList;