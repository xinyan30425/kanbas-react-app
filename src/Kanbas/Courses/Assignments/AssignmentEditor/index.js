import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import "./index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV, faCheckCircle} from '@fortawesome/free-solid-svg-icons'



function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);


  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
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

      <h2>Assignment Name</h2>
      <input value={assignment.title}
             className="form-control mb-2" />
      <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-danger">
        Cancel
      </Link>
      <button onClick={handleSave} className="btn btn-success me-2">
        Save
      </button>
    </div>
  );
}


export default AssignmentEditor;