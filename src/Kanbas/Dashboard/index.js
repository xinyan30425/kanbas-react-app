import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";
import paper from "./paper.png"


function Dashboard() {
    const courses = db.courses;
    return (
        <div>
            <div className="row">
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 flex-fill">
                    <h1 className="w-100">Dashboard</h1>
                    <hr className="w-100" />
                    <h2 className="w-100">Published Courses ({courses.length})</h2>

                    <div className="d-flex flex-row flex-wrap">
                        {courses.map((course) => (
                            <div key={course._id} className="col-xl-3 col-lg-4 col-md-6">
                                <div className="card course-card">
                                    <div style={{ backgroundImage: `url(${paper})`, height: '150px', backgroundSize: 'cover' }}></div>
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            <Link to={`/Kanbas/Courses/${course._id}`}>{course.name}</Link>
                                        </h5>
                                        <p className="card-text">
                                            ID: {course._id}<br />
                                            Number: {course.number}<br />
                                            Start Date: {course.startDate}<br />
                                            End Date: {course.endDate}
                                        </p>
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
