import React from "react";

function Collapse(props) {
  console.log(props.children)
  return (
    <div>
      <p>
        <a
          className="btn btn-primary"
          data-bs-toggle="collapse"
          href={"#".concat(props.href)}
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Link with href
        </a>
       
      </p>
      <div className="collapse" id={props.href}>
          {props.children}
      </div>
    </div>
  );
}

export default Collapse;
