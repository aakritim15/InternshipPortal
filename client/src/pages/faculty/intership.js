import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar'; 

const PastInternships = ({ internships }) => (
  <div>
    <h2>Past Internships</h2>
    <table id="past-internships-table">
      <thead>
        <tr>
          <th>Project Name</th>
          <th>Number of Interns</th>
          <th>Duration</th>
          <th>Start Date</th>
        </tr>
      </thead>
      <tbody>
        {internships.map((internship, index) => (
          <tr key={index}>
            <td>{internship.projectName}</td>
            <td>{internship.interns}</td>
            <td>{internship.duration}</td>
            <td>{internship.startDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const OngoingInternships = ({ internships }) => (
  <div>
    <h2>Ongoing Internships</h2>
    <table id="ongoing-internships-table">
      <thead>
        <tr>
          <th>Project Name</th>
          <th>Number of Interns</th>
          <th>Duration</th>
          <th>Start Date</th>
        </tr>
      </thead>
      <tbody>
        {internships.map((internship, index) => (
          <tr key={index}>
            <td>{internship.projectName}</td>
            <td>{internship.interns}</td>
            <td>{internship.duration}</td>
            <td>{internship.startDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const UpcomingInternships = ({ internships }) => (
  <div>
    <h2>Upcoming Internships</h2>
    <table id="upcoming-internships-table">
      <thead>
        <tr>
          <th>Project Name</th>
          <th>Number of Interns</th>
          <th>Duration</th>
          <th>Start Date</th>
        </tr>
      </thead>
      <tbody>
        {internships.map((internship, index) => (
          <tr key={index}>
            <td>{internship.projectName}</td>
            <td>{internship.interns}</td>
            <td>{internship.duration}</td>
            <td>{internship.startDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const InternshipPage = () =>{
  const pastInternships = [
    { projectName: 'Past Project 1', interns: 5, duration: '3 months', startDate: '2022-01-01' },
    { projectName: 'Past Project 2', interns: 3, duration: '2 months', startDate: '2022-03-15' },
  ];

  const ongoingInternships = [
    { projectName: 'Ongoing Project 1', interns: 8, duration: '4 months', startDate: '2022-02-10' },
  ];

  const upcomingInternships = [
    { projectName: 'Upcoming Project 1', interns: 10, duration: '6 months', startDate: '2022-05-01' },
    { projectName: 'Upcoming Project 2', interns: 4, duration: '3 months', startDate: '2022-06-15' },
  ];

  return (
    <div>
      <div id="dashboard">
        <Sidebar />
      </div>

      <div id="internship-content">
        <PastInternships internships={pastInternships} />
        <OngoingInternships internships={ongoingInternships} />
        <UpcomingInternships internships={upcomingInternships} />
      </div>
    </div>
  );
}

export default InternshipPage;