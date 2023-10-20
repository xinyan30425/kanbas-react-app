import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faEllipsisV, faPlus } from '@fortawesome/free-solid-svg-icons'



function AssignmentList() {
    const { courseId } = useParams();
    const assignments = db.assignments;

    return (
        <div className="main-content">
            <div className="options-bar d-flex justify-content-between options-bar-spacing">
                <input type="text" placeholder="Search for Assignments" className="form-control w-25" />
                <div className="d-flex float-end">
                    <button type="button" className="btn btn-secondary">
                        <FontAwesomeIcon icon={faPlus} /> Group
                    </button>

                    <button type="button" className="btn assignment-button">
                        <FontAwesomeIcon icon={faPlus} /> Assignment
                    </button>

                    <button type="button" className="btn btn-secondary">
                        <FontAwesomeIcon icon={faEllipsisV} />
                    </button>
                </div>
            </div>

            {
                assignments
                    .filter(assignment => assignment.course === courseId)
                    .map(assignment => (
                        <div key={assignment._id} className="assignment-item">
                            <h2 className="assignment-title">
                                <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
                                    {assignment.title}
                                </Link>
                            </h2>
                            <ul className="assignment-lists">
                                {assignment.description.map(desc => (
                                    <li key={desc._id} className="description-item">
                                        <h3>{desc.name}</h3>
                                        <span className="action-icons fa-lg">
                                            <FontAwesomeIcon icon={faCheckCircle} className="text-success" />
                                            <FontAwesomeIcon icon={faEllipsisV} style={{ marginLeft: '20px', marginRight: "20px" }} />
                                        </span>
                                        <p>{desc.date}</p>
                                        {/* <span className="points">{desc.course}</span> */}
                                        
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))
               
            }

        </div>
    );
}

export default AssignmentList;






