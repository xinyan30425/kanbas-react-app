import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faEllipsisV, faPlus } from '@fortawesome/free-solid-svg-icons'
import {
    addAssignment,
    deleteAssignment,
    setAssignment,
    setAssignments,
} from "./assignmentsReducer";

import { useNavigate } from 'react-router-dom';
import * as client from "./client";

function AssignmentList() {
    const { courseId } = useParams();
    const assignments = useSelector((state) => state.assignmentsReducer.assignments);
    const assignment = useSelector((state) => state.assignmentsReducer.assignment);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formatDate=(dateString) =>{
        const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
        return new Date(dateString).toLocaleString('en-US', options).replace(/(\d+)\/(\d+)\/(\d+),\s(\d+:\d+:\d+)/, '$3-$1-$2 $4');
      }

    // Fetch assignments when courseId changes
    useEffect(() => {
        client.findAssignmentsForCourse(courseId)
            .then((assignments) => dispatch(setAssignments(assignments)));
    }, [courseId, dispatch]);

    // Function to handle adding a new assignment
    const handleAddAssignment = async () => {
        // Dummy data for new assignment
        const newAssignment = { title: "New Assignment", description: "New Description", points: 100, course: courseId };
        const createdAssignment = await client.createAssignment(courseId, newAssignment);
        dispatch(addAssignment(createdAssignment));
    };

    // Function to handle deleting an assignment
    const handleDeleteAssignment = async (assignmentId) => {
        await client.deleteAssignment(assignmentId);
        dispatch(deleteAssignment(assignmentId));
    };


    return (
        <div className="main-content">
            <div className="options-bar d-flex justify-content-between options-bar-spacing">
                <input type="text" placeholder="Search for Assignments" className="form-control w-25" />
                <div className="float-end">
                    <button type="button" className="btn btn-secondary p-1 me-1">
                        <FontAwesomeIcon icon={faPlus} /> Group
                    </button>

                    <button onClick={handleAddAssignment} className="btn btn-danger mb-1 p-1">
                        <FontAwesomeIcon icon={faPlus} /> Assignment
                    </button>

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
                                    <span className="action-icons">
                                        <FontAwesomeIcon icon={faCheckCircle} className="text-success" style={{ marginLeft: '10px', marginRight: "10px", marginTop: '10px' }} size="sm" />
                                        <FontAwesomeIcon icon={faEllipsisV} style={{ marginLeft: '10px', marginRight: "10px", marginTop: '10px' }} size="sm" />
                                    </span>
                                    <button onClick={() => handleDeleteAssignment(assignment._id)} className="btn btn-danger">Delete</button>
                                    <button onClick={() => {
                                        dispatch(setAssignment(assignment));
                                        navigate(`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`);
                                    }} className="btn btn-success ms-1 me-1 mt-2 mb-2 p-1">Edit</button>
                                </div>
                            </h2>
                            <div className="description-item">
                                <p><strong>Description:</strong> {assignment.description}</p>
                                <p><strong>Total Points:</strong> {assignment.points}</p>
                                <div style={{ display: 'flex' }}>
                                    <p><strong>Due Date:</strong> {formatDate(assignment.dueDate)}</p>
                                    <strong>|</strong>
                                    <p><strong>Available From:</strong> {formatDate(assignment.availableFrom)}</p>
                                    <strong>|</strong>
                                    <p><strong>Until:</strong> {formatDate(assignment.untilDate)}</p>
                                </div>
                            </div>
                        </div>
                    ))
            }
        </div>
    );
}

export default AssignmentList;






