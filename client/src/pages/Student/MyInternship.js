import React from 'react';
import Sidebar from '../../components/Sidebar';
import './MyInternship.css'; 

const MyInternship = () => {
  
  const ongoingInternships = [
    { name: 'Internship 1', faculty: 'Mr.A', progress: 70 },
    { name: 'Internship 2', faculty: 'Mr.B', progress: 50 },
    
  ];

  const pastInternships = [
    { name: 'Past Internship 1', faculty: 'C D', status: 'Completed', credits: 3 },
    { name: 'Past Internship 2', faculty: 'E F', status: 'Incomplete', credits: 2 },
    { name: 'Past Internship 3', faculty: 'G H', status: 'Complete', credits: 2 },
    
  ];

  const appliedInternships = [
    { name: 'Applied Internship 1', faculty: 'I J', approvalStatus: 'Pending' },
    { name: 'Applied Internship 2', faculty: 'K L', approvalStatus: 'Approved' },
    
  ];

  return (
    <div className='flex w-full h-screen'>
      <div className='flex-col bg-red-50 p-5 w-[15%]'>
        <Sidebar />
      </div>
      <div className='rounded-lg bg-slate-100 w-[85%] p-5'>
        <div className="internship-section">
          <h2>Ongoing Internships</h2>
          <div className="internship-boxes">
            {ongoingInternships.map((internship, index) => (
              <div key={index} className='internship-box'>
                <h3>{internship.name}</h3>
                <p>Faculty: {internship.faculty}</p>
                <p>Progress: {internship.progress}%</p>
              </div>
            ))}
          </div>
        </div>
        <div className="internship-section">
          <h2>Past Internships</h2>
          <div className="internship-boxes">
            {pastInternships.map((internship, index) => (
              <div key={index} className='internship-box'>
                <h3>{internship.name}</h3>
                <p>Faculty: {internship.faculty}</p>
                <p>Status: {internship.status}</p>
                <p>Credits: {internship.credits}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="internship-section">
          <h2>Applied Internships</h2>
          <div className="internship-boxes">
            {appliedInternships.map((internship, index) => (
              <div key={index} className='internship-box'>
                <h3>{internship.name}</h3>
                <p>Faculty: {internship.faculty}</p>
                <p>Approval Status: {internship.approvalStatus}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyInternship;


// import React, { useState, useEffect } from 'react';
// import Sidebar from '../../components/Sidebar';
// import './MyInternship.css';

// const MyInternship = () => {
//   const [internships, setInternships] = useState({
//     ongoingInternships: [],
//     pastInternships: [],
//     appliedInternships: []
//   });

//   useEffect(() => {
//     const fetchInternships = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/api/myinternships');
//         const data = await response.json();
//         setInternships(data);
//       } catch (error) {
//         console.error('Error fetching internship data:', error);
//       }
//     };

//     fetchInternships();
//   }, []);

//   return (
//     <div className='flex w-full h-screen'>
//       <div className='flex-col bg-red-50 p-5 w-[15%]'>
//         <Sidebar />
//       </div>
//       <div className='rounded-lg bg-slate-100 w-[85%] p-5'>
//         <div className="internship-section">
//           <h2>Ongoing Internships</h2>
//           <div className="internship-boxes">
//             {internships.ongoingInternships.map((internship, index) => (
//               <div key={index} className='internship-box'>
//                 <h3>{internship.name}</h3>
//                 <p>Faculty: {internship.faculty}</p>
//                 <p>Progress: {internship.progress}%</p>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="internship-section">
//           <h2>Past Internships</h2>
//           <div className="internship-boxes">
//             {internships.pastInternships.map((internship, index) => (
//               <div key={index} className='internship-box'>
//                 <h3>{internship.name}</h3>
//                 <p>Faculty: {internship.faculty}</p>
//                 <p>Status: {internship.status}</p>
//                 <p>Credits: {internship.credits}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="internship-section">
//           <h2>Applied Internships</h2>
//           <div className="internship-boxes">
//             {internships.appliedInternships.map((internship, index) => (
//               <div key={index} className='internship-box'>
//                 <h3>{internship.name}</h3>
//                 <p>Faculty: {internship.faculty}</p>
//                 <p>Approval Status: {internship.approvalStatus}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyInternship;
