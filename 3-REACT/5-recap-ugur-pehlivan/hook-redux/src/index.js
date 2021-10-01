import React from "react";
import ReactDOM from "react-dom";
import profile1 from "./images/closeup-profile-confident-business-woman-260nw-259315901.jpg";
import profile2 from "./images/hero-what-is-disc.jpg";
import profile3 from "./images/pexels-photo-220453.jpeg";
import SingleComment from "./SingleComment";
import UserCard from "./UserCard";

const App = () => {
  return (
    <div className="ui comments">
      <UserCard>
        <SingleComment
          name="Alex"
          picture={profile1}
          text="it is amazing"
          date="Today at 5:00 PM"
        />
      </UserCard>
      <UserCard>
        <SingleComment
          name="Sarah"
          text="Great Job"
          picture={profile2}
          date="Today at 7:00 PM"
        />
      </UserCard>

      <UserCard>
        <SingleComment
          name="Jack"
          text="Thanks"
          picture={profile3}
          date="Today at 9:00 PM"
        />
      </UserCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
