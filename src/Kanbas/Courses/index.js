import React, { useState, useEffect } from 'react';
import axios from 'axios';
import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import "./index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faGlasses } from '@fortawesome/free-solid-svg-icons';

function Courses() {
  const { courseId } = useParams();
  const [course, setCourse] = useState({});
  const API_BASE = process.env.REACT_APP_API_BASE;
  // const API_BASE = "http://localhost:4000";
  const URL = `${API_BASE}/api/courses`;
  const findCourseById = async (courseId) => {
    const response = await axios.get(
      `${URL}/${courseId}`
    );
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);


  return (
    <div>
      {/* <h1>Course {course.name}</h1>  */}
      <div className="breadcrumb-container">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <FontAwesomeIcon icon={faBars} color="red" style={{ marginLeft: "10px", marginRight: "10px" }} />
          </li>
          <li className="breadcrumb-item">
            <span className="course-text">{course._id}{course.name}</span>
          </li>
          <li className="breadcrumb-item active module-text" aria-current="page">Modules</li>
        </ol>

        <button type="button" className="btn btn-secondary">
          <FontAwesomeIcon icon={faGlasses} /> Student View
        </button>
      </div>

      <hr style={{ borderColor: '#ccc', borderWidth: '1px', borderStyle: 'solid' }} />

      <div className="d-flex">
        <CourseNavigation />
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;