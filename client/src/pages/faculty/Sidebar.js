const Sidebar=() =>{
  return (
    <div id="sidebar">
      <h2>Faculty Dashboard</h2>
      <ul>
        <li>
          <a href="main.js">
            <i className="fas fa-home"></i> Home
          </a>
        </li>
        <li>
          <a href="internship.js">
            <i className="fas fa-briefcase"></i> Internships
          </a>
        </li>
        <li>
          <a href="student.js">
            <i className="fas fa-user-graduate"></i> Students
          </a>
        </li>
        <li>
          <a href="reports.jsx">
            <i className="fas fa-chart-bar"></i> Reports
          </a>
        </li>
        <li>
          <a href="settings.jsx">
            <i className="fas fa-cog"></i> Settings
          </a>
        </li>
        <li id="logout">
          <a id="logout-btn" href="#">
            <i className="fas fa-sign-out-alt"></i> Log Out
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
