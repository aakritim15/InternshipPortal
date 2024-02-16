import React from 'react';
import Sidebar from './Sidebar';
const  Student =()=> {
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

export default Student;
