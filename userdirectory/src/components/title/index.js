import React from "react";
import "./style.css";

function Title() {
    return (
        <div>
          <jumbotron className="jumbotron">
              <h1 className="title">Dream Fútbol Team!</h1>
              <p className="lead">Search for a player by name, position, or country!</p>
          </jumbotron>
        </div>
    );   
}

export default Title;
