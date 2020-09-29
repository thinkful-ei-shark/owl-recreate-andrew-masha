import React from "react";
import StagePanel from "./StagePanel";

function Stage(props) {
  const panels = props.list
    .filter((participant) => participant.onStage)
    .map((participant) => (
      <StagePanel key={participant.id} props={participant} />
    ));
  return <div className="stage">{panels}</div>;
}

export default Stage;
