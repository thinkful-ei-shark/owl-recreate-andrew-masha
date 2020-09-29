import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import StagePanel from "./StagePanel";

const testObj = {
  id: 1,
  name: "Koren Templeton",
  avatar:
    "https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1",
  inSession: true,
  onStage: true,
};

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<StagePanel props={testObj} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders as expected", () => {
  const tree = renderer
    .create(<StagePanel props={testObj} />)
    .toJSON();
    expect(tree).toMatchSnapshot()
});
