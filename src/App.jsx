import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import StudentDetailsPage from "./pages/StudentDetailsPage";
import UserProfilePage from "./pages/UserProfilePage";
import { Routes, Route } from "react-router-dom";
import students from './assets/students.json'
import { useState } from "react";


function App() {

  const [studentsToDisplay, setStudentsToDisplay] = useState(students);


  return (
    <div className="App relative z-20 pt-20">
      <Navbar />

      {/* Define routes to render components based on the URL */}
      <div className="pages">
        <Routes>
          <Route path="/" element={<HomePage studentsArr={studentsToDisplay} />} />
          <Route path="/studentDetailsPage/:studentId" element={<StudentDetailsPage />} />
          <Route path="/userProfilePage" element={<UserProfilePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
