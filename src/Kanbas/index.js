import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Account from "./Account";
import Courses from "./Courses";
import Dashboard from "./Dashboard";
import CourseNavigation from "./Courses/CourseNavigation";
import db from "./Database";
import { useState,useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";

function Kanbas() {
  const [courses, setCourses] = useState([]);
  const API_BASE = process.env.REACT_APP_API_BASE;
  const URL = `${API_BASE}/api/courses`;
  // const URL = "http://localhost:4000/api/courses";
  const updateCourse = async (course) => {
    const response = await axios.put(
      `${URL}/${course._id}`,
      course
    );
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return response.data;
        }
        return c;
      })
    );
    setCourse({ name: "" });
  };


  const deleteCourse = async (course) => {
    const response = await axios.delete(
      `${URL}/${course._id}`
    );
    setCourses(courses.filter(
      (c) => c._id !== course._id));
  };

  const addCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([
      ...response.data,
      ...courses,
    ]);
    setCourse({ name: "" });
  };

  const findAllCourses = async () => {
  const response = await axios.get(URL);
    setCourses(response.data);
  };

  const [course, setCourse] = useState({
      name: "New Course",
      number: "New Number",
      startDate: "2023-09-10",
      endDate: "2023-12-15",
  });

  const [newCourseName, setNewCourseName] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingCourse, setEditingCourse] = useState({ name: "", _id: "", number: "", startDate: "", endDate: "" });
  

  useEffect(() => {
    findAllCourses();
  }, []);

  return (
    <Provider store={store}>
    <div>
      <div>
        <KanbasNavigation />
        <div style={{ marginLeft: '150px' }}>
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<h1>Account</h1>} />
            {/* <Route path="Dashboard" element={<Dashboard />} /> */}
            <Route path="Dashboard" element={
            <Dashboard/>
            // courses={courses}
            // course={course}
            // setCourse={setCourse}
            // addNewCourse={addCourse}
            // deleteCourse={deleteCourse}
            // updateCourse={updateCourse}
          } />

            {/* <Route path="Courses" element={<CourseNavigation/>} /> */}
            <Route path="Courses" element={<Navigate to={`/Kanbas/Courses/${db.courses[0]._id}/Home`} />} />
            {/* <Route path="Courses/:courseId/*" element={<Courses />} /> */}
            <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
            <Route path="Calendar" element={<h1>Calendar</h1>} />
            <Route path="Inbox" element={<h1>Inbox</h1>} />
            <Route path="History" element={<h1>History</h1>} />
            <Route path="Studio" element={<h1>Studio</h1>} />
            <Route path="Commons" element={<h1>Commons</h1>} />
            <Route path="Help" element={<h1>Help</h1>} />
          </Routes>
        </div>
      </div>
    </div>
    </Provider>
  );
}
export default Kanbas;
