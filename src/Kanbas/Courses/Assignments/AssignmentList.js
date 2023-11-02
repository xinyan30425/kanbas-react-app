import React, { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import db from "../../Database";
import { useSelector, useDispatch } from "react-redux";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faEllipsisV, faPlus } from '@fortawesome/free-solid-svg-icons'
import {
    addAssignment as addAssignmentAction,
    deleteAssignment as deleteAssignmentAction,
    updateAssignment as updateAssignmentAction,
    setAssignment as setAssignmentAction,
} from "./assignmentsReducer";
import { useNavigate } from 'react-router-dom';




function AssignmentList() {
    const { courseId } = useParams();
    const assignments = useSelector((state) => state.assignmentsReducer.assignments);
    const assignment = useSelector((state) => state.assignmentsReducer.assignment);
    const dispatch = useDispatch();
    // const history = useHistory();
    const navigate = useNavigate();

    return (
        <div className="main-content">
            <div className="options-bar d-flex justify-content-between options-bar-spacing">
                <input type="text" placeholder="Search for Assignments" className="form-control w-25" />
                <div className="float-end">
                    <button type="button" className="btn btn-secondary p-1 me-1">
                        <FontAwesomeIcon icon={faPlus} /> Group
                    </button>
                    <button onClick={() => dispatch(addAssignmentAction({ ...assignment, course: courseId }))} className="btn btn-danger mb-1 p-1"> <FontAwesomeIcon icon={faPlus} /> Assignment</button>
                    <button type="button" className="btn btn-secondary p-1 ms-1">
                        <FontAwesomeIcon icon={faEllipsisV} />
                    </button>
                </div>
            </div>

            {
                assignments
                    .filter(assignment => assignment.course === courseId)
                    .map(assignment => (
                        <div key={assignment._id} className="assignment-item">
                            <h2 className="assignment-title" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
                                    {assignment.title}
                                </Link>
                                <div className="assignment-actions">
                                    {/* <button onClick={() => dispatch(deleteAssignmentAction(assignment._id))} className="btn btn-danger ms-2 me-2 mt-2 mb-2 p-1">Delete</button> */}
                                    <span className="action-icons">
                                        <FontAwesomeIcon icon={faCheckCircle} className="text-success" style={{ marginLeft: '10px', marginRight: "10px",marginTop: '10px' }} size="sm" />
                                        <FontAwesomeIcon icon={faEllipsisV} style={{ marginLeft: '10px', marginRight: "10px",marginTop: '10px' }}size="sm" />
                                    </span>
                                    <button onClick={() => {
                                        console.log('Delete button clicked');
                                        dispatch(deleteAssignmentAction(assignment._id));
                                    }} className="btn btn-danger ms-1 me-1 mt-2 mb-2 p-1">Delete</button>

                                    <button onClick={() => {
                                        dispatch(setAssignmentAction(assignment));
                                        navigate(`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`);
                                    }} className="btn btn-success ms-1 me-1 mt-2 mb-2 p-1">Edit</button>

                                    {/* <button onClick={(event) => dispatch(setAssignmentAction(assignment))} className="btn btn-success ms-2 me-2 mt-2 mb-2 p-1">Edit</button> */}
                                </div>
                            </h2>
                            <div className="description-item">
                                <p><strong>Description:</strong> {assignment.description}</p>
                                <p><strong>Total Points:</strong> {assignment.points}</p>
                                <div style={{ display: 'flex' }}>
                                    <p><strong>Due Date:</strong> {assignment.dueDate}</p>
                                    <strong>|</strong>
                                    <p><strong>Available From:</strong> {assignment.availableFrom}</p>
                                    <strong>|</strong>
                                    <p><strong>Until:</strong> {assignment.untilDate}</p>
                                </div>
                            </div>
                        </div>
                    ))
            }

        </div>
    );
}

export default AssignmentList;






