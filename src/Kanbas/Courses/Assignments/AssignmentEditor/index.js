import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import "./index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from "react-redux";

import {
  addAssignment as addAssignmentAction,
  deleteAssignment as deleteAssignmentAction,
  updateAssignment as updateAssignmentAction,
  setAssignment as setAssignmentAction,
} from "../assignmentsReducer";


function AssignmentEditor() {
  const { assignmentId, courseId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const history = useHistory();


  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  const assignment = useSelector((state) => state.assignmentsReducer.assignment);

  // const assignment = db.assignments.find(
  //   (assignment) => assignment._id === assignmentId);

  // const handleSave = () => {
  //   console.log("Actually saving assignment TBD in later assignments");
  //   navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  // };

  const [editedAssignment, setEditedAssignment] = useState({
    ...assignment
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(setAssignmentAction({
      ...assignment,
      [name]: value
    }));
  };

  const handleSave = () => {
    if (assignmentId === "new") {
      dispatch(addAssignmentAction({ ...assignment, course: courseId }));
    } else {
      dispatch(updateAssignmentAction(assignment));
    }
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  const handleCancel = () => {
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };


  return (
    <div>
      <div className="options-bar options-bar-spacing">
        <span className="published-icon-text">
          <FontAwesomeIcon icon={faCheckCircle} color="green" />
          <span className="published-text"> Published</span>
        </span>
        <button type="button" className="btn btn-secondary">
          <FontAwesomeIcon icon={faEllipsisV} />
        </button>
      </div>

      <li className="list-group-item d-flex">
        <div className="assignmemt-list flex-grow-1">
          <label className="me-3">Assignment Name</label>
          <input
            value={assignment.title}
            onChange={(e) => dispatch(setAssignmentAction({ ...assignment, title: e.target.value }))}
            placeholder="Assignmemt Name"
            className="form-control w-50"
          />
          <textarea
            value={assignment.description}
            onChange={(e) => dispatch(setAssignmentAction({ ...assignment, description: e.target.value }))}
            placeholder="New Assignmemt Description"
            className="form-control mt-2 mb-3 w-50 h-25"
          />
          <div className="d-flex align-items-center mb-3">
            <label className="me-3">Points</label>
            <input
              value={assignment.points}
              onChange={(e) => dispatch(setAssignmentAction({ ...assignment, points: e.target.value }))}
              placeholder="100"
              className="form-control w-50"
            />
          </div>

          <div className="assign-input-group d-flex align-items-center">
            <label className="me-3">Assign</label>
            <div className="input-box p-2 w-50 mt-3 mb-5 border rounded">
              <div className="row">
                <div className="col-12 due-date-input mb-2 d-flex align-items-center">
                  <label htmlFor="dueDate" className="me-2">Due</label>
                  <input
                    type="date"
                    id="dueDate"
                    value={assignment.dueDate}
                    onChange={(e) => dispatch(setAssignmentAction({ ...assignment, dueDate: e.target.value }))}
                    className="form-control form-control-sm"
                  />
                </div>
                <div className="d-flex justify-content-start mt-2">
                  <div className="me-3">
                    <label className="me-2">Available From:</label>
                    <input
                      type="date"
                      value={assignment.availableFrom}
                      onChange={(e) => dispatch(setAssignmentAction({ ...assignment, availableFrom: e.target.value }))}
                      className="form-control"
                    />
                  </div>
                  <div>
                    <label className="me-2">Until:</label>
                    <input
                      type="date"
                      value={assignment.untilDate}
                      onChange={(e) => dispatch(setAssignmentAction({ ...assignment, untilDate: e.target.value }))}
                      className="form-control"
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div>
        <button
          onClick={() => {
            dispatch(updateAssignmentAction(assignment));
            navigate(`/Kanbas/Courses/${courseId}/Assignments`);
          }}
          className="btn btn-danger ms-2 me-2 p-1 text-white">
          Save
        </button>
        <button
          onClick={handleCancel}
          className="btn btn-outline-secondary ms-2 me-2 p-1">
          Cancel
        </button>
        </div>
      </li>
    </div>
  );
}


export default AssignmentEditor;