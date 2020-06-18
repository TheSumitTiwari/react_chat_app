import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Join.css";

export default function SignIn() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <div className="ui card blue raised fluid">
          <div className="content card-head">
            <div class="header heading">JOIN</div>
          </div>
          <div className="content">
            <div className="ui input fluid">
              <input
                placeholder="Name"
                type="text"
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="ui input fluid">
              <input
                placeholder="Room"
                type="text"
                onChange={(event) => setRoom(event.target.value)}
              />
            </div>
            <Link
              onClick={(e) => (!name || !room ? e.preventDefault() : null)}
              to={`/chat?name=${name}&room=${room}`}
            >
              <button className="ui blue button fluid mt-20" type="submit">
                Enter
              </button>
            </Link>
          </div>
          <div class="extra content">Developed by SUMIT TIWARI</div>
        </div>
      </div>
    </div>
  );
}
