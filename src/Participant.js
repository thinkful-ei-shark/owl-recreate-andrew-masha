import React from 'react';

function Participant(props) {
  return (
    <div className="Participant" key={props.id}>
      <div className="portait">
        <img src={props.avatar} alt="avatar" />
      </div>
      <div className="participant-meta">
        <div className="participant-name">
          {props.name}
        </div>
        <div className="Participant-byline">
          <span 
            className={`dot ${props.inSession ? 'in-session' : 'not-in-session'}`}>
          </span>
          <span className="stage-status">
            {`${props.onStage ? 'On Stage' : 'Off Stage'}`}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Participant;