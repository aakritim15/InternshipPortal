import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar';
function Student() {
  const studentContent = (
    <div>
      <h2>Student Content Goes Here</h2>
    </div>
  );

  return (
    <div>
      <div id="dashboard">
        <Sidebar />
      </div>

      <div id="student-content">
        {studentContent}
      </div>
    </div>
  );
}

ReactDOM.render(<Student />, document.getElementById('root'));
