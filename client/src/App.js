
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentDashboard from './pages/StudentDashboard';
function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<StudentDashboard />} />
          {/* <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/expense" element={<Expense />} />
          <Route path="/investments" element={<Investments />} />
          <Route path="/savings" element={<Savings />} /> */}
        </Routes>
    </Router>
    
  );
}

export default App;
