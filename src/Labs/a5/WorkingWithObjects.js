import React, { useState } from "react";
function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10",
        completed: false,
        score: 0,
    });

    // Handle changes to the title input
    const handleTitleChange = (e) => {
        setAssignment({ ...assignment, title: e.target.value });
    };

    // Handle changes to the score input
    const handleScoreChange = (e) => {
        setAssignment({ ...assignment, score: parseInt(e.target.value, 10) });
    };
    const API_BASE = process.env.REACT_APP_API_BASE;
    const URL = `${API_BASE}/a5/assignment`;

    return (
        <div>
            <h3>Working With Objects</h3>
            <h4>Modifying Properties</h4>
            <a href={`${URL}/title/${assignment.title}`} className="btn btn-primary me-2 float-end">
                Update Title
            </a>
            <input
                onChange={handleTitleChange}
                value={assignment.title}
                className="form-control mb-2 w-75"
                type="text" />

            <a href={`${URL}/score/${assignment.score}`} className="btn btn-primary me-2 float-end">
                Update Score
            </a>
            <input
                onChange={handleScoreChange}
                value={assignment.score}
                className="form-control mb-2 w-75"
                type="number" />

            <h4>Modifying Completion Status</h4>
            <a href={`${URL}/completed/${assignment.completed ? 'true' : 'false'}`} className="btn btn-primary me-2 float-end">
                Update Completed
            </a>
            <input
                type="checkbox"
                checked={assignment.completed}
                onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })}
                className="me-2"
            />




            <h4>Retrieving Objects</h4>
            <a href={`${API_BASE}/a5/assignment`}
                className="btn btn-primary me-2">
                Get Assignment
            </a>
            <h4>Retrieving Properties</h4>
            <a
                href="${API_BASE}/a5/assignment/title"
                className="btn btn-primary me-2">
                Get Title
            </a>
            <a
                href="${API_BASE}/a5/assignment/score"
                className="btn btn-primary me-2">
                Get Score
            </a>
        </div>
    );
}
export default WorkingWithObjects;
