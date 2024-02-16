import React from 'react';
import Sidebar from './Sidebar'; 

const internships = [
    { company: 'ABC Corp', title: 'Software Developer Intern', duration: '3 months' },
    { company: 'Tech Solutions', title: 'UX/UI Designer Intern', duration: '3 months' },
    { company: 'Innovate Labs', title: 'Research Intern', duration: '6 months' },
  ];
  
  const InternshipTable =()=> {
    return (
      <div>
      <div id="dashboard">
      <Sidebar />
    </div>
      <div id="internship-list">
        <h2>Internship List</h2>
        <table>
          <thead>
            <tr>
              <th>Company</th>
              <th>Title</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody id="internship-table-body">
            {internships.map((internship, index) => (
              <tr key={index}>
                <td>{internship.company}</td>
                <td>{internship.title}</td>
                <td>{internship.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    );
  }

export default InternshipTable;