import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import AssignmentList from "./AssignmentList";



function Assignments() {
// console.log('DB:', db);
// console.log('Assignments from DB:', db.assignments);
// console.log("Assignments component rendered");

  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (

    <div>

        <AssignmentList/>
    </div>
  );
}
export default Assignments;