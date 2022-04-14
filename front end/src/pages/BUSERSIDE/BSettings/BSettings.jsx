import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

import './BSettings.css';

export default function BSettings(){
  const history = useHistory();

  function navigateToPage(path) {
    history.push(path);
  }

  return (
    <div className="content">
      <a href = '/bHome'><h1>HotSpot </h1></a>
      <div>
        <form>
          <label>
            Change Password: <input type="text" /> 
          </label>
          <br />
        </form>

      </div>
      
      <button
        onClick={() => navigateToPage('/bHome')} // must remove event from list of events
        className="page-button"
      >
        Home
      </button>
      <button
        onClick={() => navigateToPage('/venueInfo')} //needs to prevent users from updating w/o hitting edit beyond this point
        className="page-button"
      >
        Back
      </button>
    </div>
  );
};