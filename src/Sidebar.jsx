import React from "react";
import { Link } from "react-router-dom";

import { CiLogout } from "react-icons/ci";


const Sidebar = () => {
  return (
    <div className="Sidebar">
      <h1>Manas Health</h1>
      <h2>General</h2>
      <ul>
        <Link to="/dashboard"><li >Home</li></Link>
        <Link  to="/dashboard/calendar"><li>Calendar</li></Link>
        <li>Counsellor</li>
        <li>Education</li>
      </ul>
      <h2>Tools</h2>
      <ul>
        <li><a href="mailto:22bd1a0565@gmail.com?subject=MANAS HEALTH &body=">Contact us</a></li>
        <Link to="/"><li><CiLogout style={{fontSize:"17px",margin:"0px 5px -4px -3px"}}/>Logout</li></Link>
      </ul>
    </div>
  );
};

export default Sidebar;
