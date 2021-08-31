import React from "react";
import { useParams, useLocation} from "react-router-dom";

function Post({ match }) {
    
    const item = new URLSearchParams(useLocation().search);

  return (
    <div>
      <h2>Post ID: {match.params.id} </h2>
      <h2>{item.get("name")}  </h2>
      <h2>{item.get("second")}  </h2>
    </div>
  );
}

export default Post;
