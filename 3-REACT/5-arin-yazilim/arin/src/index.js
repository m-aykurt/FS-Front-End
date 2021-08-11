import React from "react";
import ReactDOM from "react-dom";
import Card from "./components/Card";
import Collapse from "./components/Collapse";

function App() {
  return (
    <div>
      <div className="card-group">
        <Collapse href="collapseExample1">
          <Card
            cardTitle="Title -1 "
            cardText="Lorem ipsum dolor 1"
            updatedTime="Last updated 1 min ago"
            image="https://picsum.photos/id/12/200/300"
          />
        </Collapse>

        <Collapse href="collapseExample2">
          <Card
            cardTitle="Title -2 "
            cardText="Lorem ipsum dolor 2"
            updatedTime="Last updated 2 min ago"
            image="https://picsum.photos/id/11/200/300"
          />
        </Collapse>

        <Collapse href="collapseExample3">
          <Card
            cardTitle="Title -3 "
            cardText="Lorem ipsum dolor 3"
            updatedTime="Last updated 3 min ago"
            image="https://picsum.photos/id/14/200/300"
          />
        </Collapse>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
