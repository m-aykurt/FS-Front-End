import React from "react";
import ReactDOM from "react-dom";
// import Card from "./components/Card";
import Collapse from "./components/Collapse";
import CardClass from "./components/CardClass";

function App() {
  return (
    <div>
        <div className="container">
          <div className="row">
            <div className="card-group w-100">
              <div className="col">
                <Collapse href="collapseExample1">
                  <CardClass
                    cardText="Lorem ipsum dolor 1"
                    updatedTime="Last updated 1 min ago"
                    image="https://picsum.photos/id/12/200/300"
                  />
                </Collapse>
              </div>

              <div className="col">
                <Collapse href="collapseExample2">
                  <CardClass
                    cardTitle="Title -2x x"
                    cardText="Lorem ipsum dolor 2"
                    updatedTime="Last updated 3 min ago"
                    image="https://picsum.photos/id/13/200/300"
                  />
                </Collapse>
              </div>

              <div className="col">
                <Collapse href="collapseExample3">
                  <CardClass
                    cardTitle="Title -3 "
                    cardText="Lorem ipsum dolor 3"
                    updatedTime="Last updated 3 min ago"
                    image="https://picsum.photos/id/14/200/300"
                  />
                </Collapse>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
