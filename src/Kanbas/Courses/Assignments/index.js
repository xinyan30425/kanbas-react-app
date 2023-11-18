import React from "react";
import { Link, useParams } from "react-router-dom";
import "./index.css";
import AssignmentList from "./AssignmentList";


function Assignments() {
  const { courseId } = useParams()
  return (
    <div>
        <AssignmentList/>
    </div>
  );
}
export default Assignments;