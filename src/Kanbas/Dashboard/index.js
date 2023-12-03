import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import paper from "./paper.png";

function Dashboard() {
    const API_BASE  = process.env.REACT_APP_API_BASE;
    const URL = `${API_BASE}/api/courses`;

    const [courses, setCourses] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [course, setCourse] = useState({
        name: "New Course",
        number: "New Number",
        startDate: "2023-09-10",
        endDate: "2023-12-15",
    });
    const [errorMessage, setErrorMessage] = useState("");

    const fetchCourses = async () => {
        const response = await axios.get(`${API_BASE}/api/courses`);
        setCourses(response.data);
    };

    useEffect(() => {
        fetchCourses();
    }, []);

    const deleteCourse = async (courseId) => {
        const response = await axios.delete(
            `${URL}/${courseId}`
        );
        setCourses(courses.filter((c) => c._id !== courseId));
    };

    const addCourse = async () => {
        const response = await axios.post(URL, course);
        setCourses([
            response.data,
            ...courses,
        ]);
        setCourse({ name: "" });
    };

    const updateCourse = async () => {
        const response = await axios.put(
            `${URL}/${course._id}`,
            course
        );
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return course;
                }
                return c;
            })
        );
    };

    const startEditingCourse = (courseToEdit) => {
        setCourse(courseToEdit);
        setEditingId(courseToEdit._id);
    };

    return (
        <div>
            <div className="row">
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 flex-fill">
                    <h1 className="w-100">Dashboard</h1>
                    <hr className="w-100" />
                    <h2 className="w-100">Published Courses ({courses.length})</h2>

                    <form onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <input
                                type="text"
                                placeholder="Course Name"
                                value={course.name}
                                onChange={(e) => setCourse({ ...course, name: e.target.value })}
                            />
                            <input
                                type="text"
                                placeholder="Course ID"
                                value={course._id}
                                onChange={(e) => setCourse({ ...course, _id: e.target.value })}
                            />
                            <input
                                type="text"
                                placeholder="Course Number"
                                value={course.number}
                                onChange={(e) => setCourse({ ...course, number: e.target.value })}
                            />
                            <input
                                type="date"
                                value={course.startDate}
                                onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
                            />
                            <input
                                type="date"
                                value={course.endDate}
                                onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
                            />
                        </div>
                        {
                            editingId ? (
                                <>
                                    <button onClick={updateCourse} type="button" className="btn btn-primary">Update</button>
                                </>
                            ) : (
                                <>
                                    <button onClick={addCourse} type="button" className="btn btn-success">Add</button>
                                </>
                            )
                        }
                    </form>

                    <div className="d-flex flex-row flex-wrap">
                        {courses.map((courseItem) => (
                            <Link key={courseItem._id} to={`/Kanbas/Courses/${courseItem._id}`} className="col-xl-3 col-lg-4 col-md-6 py-3 text-decoration-none">
                                <div key={courseItem._id} className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="card course-card">
                                        <div style={{ backgroundImage: `url(${paper})`, height: '150px', backgroundSize: 'cover' }}></div>
                                        <div className="card-body">
                                            <button onClick={(e) => {e.preventDefault(); deleteCourse(courseItem._id);}} className="btn btn-danger float-end">Delete</button>
                                            <button onClick={(e) => {e.preventDefault(); startEditingCourse(courseItem);}} className="btn btn-warning">Edit</button>
                                            <h5 className="card-title">{courseItem.name}</h5>

                                            <p className="card-text">
                                                ID: {courseItem._id}<br />
                                                Number: {courseItem.number}<br />
                                                Start Date: {new Date(courseItem.startDate).toLocaleDateString()}<br />
                                                End Date: {new Date(courseItem.endDate).toLocaleDateString()}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Dashboard;
