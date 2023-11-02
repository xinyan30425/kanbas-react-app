import React, { useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import paper from "./paper.png";

function Dashboard() {
    const [courses, setCourses] = useState(db.courses);
    const [course, setCourse] = useState({
        name: "New Course",
        number: "New Number",
        startDate: "2023-09-10",
        endDate: "2023-12-15",
    });

    const [newCourseName, setNewCourseName] = useState("");
    const [editingId, setEditingId] = useState(null);
    const [editingCourse, setEditingCourse] = useState({ name: "", _id: "", number: "", startDate: "", endDate: "" });

    const addNewCourse = () => {
        setCourses([...courses, { ...course, _id: new Date().getTime().toString() }]);
    };

    const updateCourse = () => {
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return course;
                } else {
                    return c;
                }
            })
        );
    };

    const deleteCourse = (courseId) => {
        setCourses(courses.filter((course) => course._id !== courseId));
    };



    return (
        <div>
            <div className="row">
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 flex-fill">
                    <h1 className="w-100">Dashboard</h1>
                    <hr className="w-100" />
                    <h2 className="w-100">Published Courses ({courses.length})</h2>

                    <div>
                        <input
                            value={course.name}
                            className="form-control"
                            onChange={(e) => setCourse({ ...course, name: e.target.value })} />
                        <input
                            value={course.number}
                            className="form-control"
                            onChange={(e) => setCourse({ ...course, number: e.target.value })} />
                        <input
                            value={course.startDate}
                            className="form-control"
                            type="date"
                            onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
                        <input
                            value={course.endDate}
                            className="form-control"
                            type="date"
                            onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />

                        <button onClick={addNewCourse} className="btn btn-success ms-2 me-2 mt-2">Add</button>
                        <button onClick={updateCourse} className="btn btn-primary mt-2">Update</button>
                    </div>

                    <div className="d-flex flex-row flex-wrap">
                        {courses.map(course => (
                            <div key={course._id} className="col-xl-3 col-lg-4 col-md-6">
                                <div className="card course-card">
                                    <div style={{ backgroundImage: `url(${paper})`, height: '150px', backgroundSize: 'cover' }}></div>
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            {editingId === course._id ? (
                                                <div>
                                                    <input
                                                        type="text"
                                                        value={editingCourse.name}
                                                        onChange={e => setEditingCourse(prev => ({ ...prev, name: e.target.value }))}
                                                        placeholder="Name"
                                                    />
                                                    <input
                                                        type="text"
                                                        value={editingCourse._id}
                                                        onChange={e => setEditingCourse(prev => ({ ...prev, _id: e.target.value }))}
                                                        placeholder="ID"
                                                    />
                                                    <input
                                                        type="text"
                                                        value={editingCourse.number}
                                                        onChange={e => setEditingCourse(prev => ({ ...prev, number: e.target.value }))}
                                                        placeholder="Number"
                                                    />
                                                    <input
                                                        type="date"
                                                        value={editingCourse.startDate}
                                                        onChange={e => setEditingCourse(prev => ({ ...prev, startDate: e.target.value }))}
                                                    />
                                                    <input
                                                        type="date"
                                                        value={editingCourse.endDate}
                                                        onChange={e => setEditingCourse(prev => ({ ...prev, endDate: e.target.value }))}
                                                    />
                                                </div>
                                            ) : (
                                                <>
                                                    <Link to={`/Kanbas/Courses/${course._id}`}>{course.name}</Link>
                                                    <p className="card-text">
                                                        ID: {course._id}<br />
                                                        Number: {course.number}<br />
                                                        Start Date: {course.startDate}<br />
                                                        End Date: {course.endDate}
                                                    </p>
                                                </>
                                            )}
                                        </h5>
                                        {editingId === course._id ? null : (
                                            <div>
                                                <button onClick={(event) => { event.preventDefault(); setCourse(course); }} className="btn btn-warning me-2">Edit</button>
                                                <button onClick={(event) => { event.preventDefault(); deleteCourse(course._id); }} className="btn btn-danger">Delete</button>

                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Dashboard;
