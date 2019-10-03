import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Person = ({ img, name, job, children }) => {
  return (
    <article className="person">
      <img
        src={`https://randomuser.me/api/portraits/thumb/men/${img}.jpg`}
        alt="personImage"
      />
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  );
};

const PersonList = () => {
  return (
    <section className="personList">
      <Person img="34" name="John" job="developer" />
      <Person img="56" name="Bob" job="Footballer">
        <p>Hello</p>
      </Person>
      <Person img="87" name="Tony" job="Poet" />
    </section>
  );
};

ReactDOM.render(<PersonList></PersonList>, document.getElementById("root"));
