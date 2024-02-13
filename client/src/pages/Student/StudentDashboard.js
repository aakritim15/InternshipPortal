import {React , useState,useEffect} from 'react'
import Sidebar from '../../components/Sidebar'
import FilterDropdown from '../../components/FilterDropdown';
import { MdOutlineLocationOn } from "react-icons/md";

const InternshipCard = ({internship})=>{
  const formattedStartDate = new Date(internship.startDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return (
    <div className="bg-white p-4 m-4 rounded-md shadow-lg flex flex-col gap-2 w-80 flex-wrap">
      <h2 className="text-2xl font-semibold">{internship.title}</h2>
      <span className='text-slate-500 font-semibold'>{internship.company}</span>
      <p className='text-md font-normal flex flex-row'><MdOutlineLocationOn style={{fontSize: 20}}/>{internship.location}</p>
      <div className='flex flex-row gap-20'>
        <span className='text-slate-400 font-medium'>Start Date</span>
        <span className='text-slate-400 font-medium'>Duration</span>
      </div>
      <div className='flex flex-row gap-12'>
        <span className='text-slate-400 font-medium'>{formattedStartDate}</span>
        <span className='text-slate-400 font-medium'></span>
      </div>
      {/* <p className="font-semibold">Skills Required:</p>
        <ul>
          {internship.skillsRequired.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      <p>{internship.description}</p> */}
      {/* Add more details or customize as per your data structure */}
    </div>
  );
}
const StudentDashboard = () => {
  
  const [existingData, setExistingData] = useState([]);
  const [filterCriteria, setFilterCriteria] = useState({
    title: '',
    startDate: '',
    duration: '',
    location: '',
  });

  useEffect(() => {
    // Fetch existing data from the database when the component mounts
    const fetchExistingData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/getInternship', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        console.log(data);
        setExistingData(data);
      } catch (error) {
        console.error('Error fetching existing data:', error);
      }
    };

    fetchExistingData();
  }, []);
  // const handleFilterChange = (field, value) => {
  //   setFilterCriteria({ ...filterCriteria, [field]: value });
  // };
  
  const uniqueTitles = Array.from(new Set(existingData.map((internship) => internship.title)));
  const uniqueStartDates = Array.from(new Set(existingData.map((internship) => internship.startDate)));
  const uniqueDurations = Array.from(new Set(existingData.map((internship) => internship.duration)));
  const uniqueLocations = Array.from(new Set(existingData.map((internship) => internship.location)));

  return (
    <div className='flex w-full h-screen '>
      <div className='flex-col bg-red-50 p-5 w-[15%] '>
        <Sidebar/>
      </div>
      <div className='rounded-lg bg-slate-100 w-[85%] p-5'>
        <h1 className="flex flex-col text-3xl font-bold items-start">Welcome back</h1>
        <div>
        <div className='flex flex-row pt-5 lg:space-x-[75%]'>
          <h2 className='text-xl font-semibold text-slate-600'>
            Internships
          </h2>
          <div className='flex '>
              {/* Updated FilterDropdown with a button */}
              <FilterDropdown
                filterCriteria={filterCriteria}
                options={{
                  title: uniqueTitles,
                  startDate: uniqueStartDates,
                  duration: uniqueDurations,
                  location: uniqueLocations,
                }}
                onChange={(values) => setFilterCriteria(values)}
              />
            </div>
        </div>
        
        <div className='flex flex-row flex-wrap '>
          {/* Map through existingData and render InternshipCard for each internship */}
          {existingData
              .filter((internship) => {
                return (
                  (filterCriteria.title === '' || internship.title.includes(filterCriteria.title)) &&
                  (filterCriteria.startDate === '' || internship.startDate.includes(filterCriteria.startDate)) &&
                  (filterCriteria.duration === '' || internship.duration.includes(filterCriteria.duration)) &&
                  (filterCriteria.location === '' || internship.location.includes(filterCriteria.location))
                );
              })
              .map((internship) => (
                <InternshipCard key={internship._id} internship={internship} />
              ))}
        </div>
        </div>
      </div>
    </div>
  )
}

export default StudentDashboard