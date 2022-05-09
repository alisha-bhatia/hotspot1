import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import "./VenueInfo.css";

export default function VenueInfo() {
  const history = useHistory();

  function navigateToPage(path) {
    history.push(path);
  }

  return (
    <div className="content">
      <a href="/bHome">
        <h1>HotSpot </h1>
      </a>
      <a href="/bsettings">
        <button id="settings">
          <img src="https://img.icons8.com/nolan/64/apple-settings.png" />
        </button>
      </a>
      <div>
        <form>
          <label>
            Vibe: <input type="text" />
          </label>
          <br />
          <label>
            Age Requirement: <input type="text" />
          </label>
          <br />
          <label>
            Bar Type: <input type="text" />
          </label>
          <br />
        </form>
      </div>

      <button
        onClick={() => navigateToPage("/bHome")} // must remove event from list of events
        className="page-button"
      >
        Delete
      </button>
      <button
        onClick={() => navigateToPage("/bHome")} //needs to prevent users from updating w/o hitting edit beyond this point
        className="page-button"
      >
        Publish
      </button>
      <button
        onClick={() => navigateToPage("/bHome")} //needs to allow users to update info. MUST UPDATE
        className="page-button"
      >
        Save
      </button>

      <br />

      <button
        onClick={() => navigateToPage("/bHome")} //needs to send to settings page
        className="page-button"
      >
        Settings
      </button>
    </div>
  );
}