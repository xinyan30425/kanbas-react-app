import React, { useState } from "react";
import { useParams } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV, faCircleCheck, faPlus, } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from "react-redux";
import {
    addModule as addModuleAction,
    deleteModule as deleteModuleAction,
    updateModule as updateModuleAction,
    setModule as setModuleAction,

} from "./modulesReducer";


function ModuleList() {
    const { courseId } = useParams();
    // const [modules, setModules] = useState(db.modules);
    // const [module, setModule] = useState({
    //     name: "New Module",
    //     description: "New Description",
    //     course: courseId,
    // });
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();

    return (
        <div className="main-content">
            <div className="options-bar d-flex justify-content-end align-items-center">
                <button type="button" className="btn btn-secondary">
                    Collapse All
                </button>
                <button type="button" className="btn btn-secondary">
                    View Progress
                </button>

                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <FontAwesomeIcon icon={faCircleCheck} color="green" /> Publish All
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton"> </div>

                    <button onClick={() => dispatch(addModuleAction({ ...module, course: courseId }))} className="btn module-button"><FontAwesomeIcon icon={faPlus} /> Module</button>

                    <button type="button" className="btn btn-secondary">
                        <FontAwesomeIcon icon={faEllipsisV} />
                    </button>
                </div>
            </div>

            <li className="list-group-item d-flex">
                <div className="module-inputs flex-grow-1">
                    <input
                        value={module.name}
                        onChange={(e) => dispatch(setModuleAction({ ...module, name: e.target.value }))}
                        placeholder="Module Name"
                        className="form-control w-50"
                    />
                    <textarea
                        value={module.description}
                        onChange={(e) => dispatch(setModuleAction({ ...module, description: e.target.value }))}
                        placeholder="Module Description"
                        className="form-control mt-2 mb-3 w-50 h-25"
                    />
                    {/* <input
                        value={module.lessons[0].name}
                        onChange={(e) => {
                            const updatedLessons = [...module.lessons];
                            updatedLessons[0].name = e.target.value;
                            dispatch(setModuleAction({ ...module, lessons: updatedLessons }));
                        }}
                        placeholder="Lesson Name for Lesson 1"
                        className="form-control mt-2 mb-3 w-50"
                    />
                    <textarea
                        value={module.lessons[0].description}
                        onChange={(e) => {
                            const updatedLessons = [...module.lessons];
                            updatedLessons[0].description = e.target.value;
                            dispatch(setModuleAction({ ...module, lessons: updatedLessons }));
                        }}
                        placeholder="Lesson 1 Description"
                        className="form-control mt-2 mb-3 w-50 h-25"
                    />
                    <input
                        value={module.lessons[1].name}
                        onChange={(e) => {
                            const updatedLessons = [...module.lessons];
                            updatedLessons[1].name = e.target.value;
                            dispatch(setModuleAction({ ...module, lessons: updatedLessons }));
                        }}
                        placeholder="Lesson Name for Lesson 2"
                        className="form-control mt-2 mb-3 w-50"
                    />
                    <textarea
                        value={module.lessons[1].description}
                        onChange={(e) => {
                            const updatedLessons = [...module.lessons];
                            updatedLessons[1].description = e.target.value;
                            dispatch(setModuleAction({ ...module, lessons: updatedLessons }));
                        }}
                        placeholder="Description for Lesson 2"
                        className="form-control mt-2 mb-3 w-50 h-25"
                    /> */}
                </div>

                <div className="module-actions ml-auto">
                    <button onClick={() => dispatch(updateModuleAction(module))} className="btn btn-primary ms-2 me-2 p-1">Update</button>
                    <button onClick={() => dispatch(addModuleAction({ ...module, course: courseId }))} className="btn btn-success me-2 p-1">Add</button>
                </div>
            </li>


            {
                modules
                    .filter(module => module.course === courseId)
                    .map(module => (
                        <div key={module._id} className="module-item">
                            <div className="d-flex justify-content-between align-items-center" style={{ backgroundColor: '#f5f5f5' }}>
                                <h2 className="module-title">
                                    <div className="title-content">
                                        {module.name}
                                        <div className="module-actions">
                                            <button onClick={() => dispatch(deleteModuleAction(module._id))} className="btn btn-danger ms-2 me-2 mt-2 mb-2 p-1">Delete</button>
                                            <button onClick={(event) => dispatch(setModuleAction(module))} className="btn btn-success me-2 mt-2 mb-2 p-1">Edit</button>
                                        </div>
                                    </div>
                                </h2>
                            </div>
                            <p className="module-description">{module.description}</p>  

                            {/* <span className="action-icons fa-lg" style={{ marginTop: '20px', marginBottom: '20px', marginRight: '20px' }}>
                                <FontAwesomeIcon icon={faCheckCircle} className="text-success ms-3" />
                                <FontAwesomeIcon icon={faCaretDown} style={{ marginLeft: '5px' }} />
                                <FontAwesomeIcon icon={faPlus} style={{ marginLeft: '20px' }} />
                                <FontAwesomeIcon icon={faEllipsisV} style={{ marginLeft: '20px' }} />
                            </span> */}

                            {module.lessons && (
                                <ul className="lesson-list">
                                    {module.lessons.map(lesson => (
                                        <li key={lesson._id} className="lesson-item">
                                            <h3>{lesson.name}</h3>
                                            {lesson.description.split('\n').map((line, idx, array) => (
                                                <React.Fragment key={idx}>
                                                    {line}
                                                    {idx === array.length - 1 ? null : <br />}
                                                </React.Fragment>
                                            ))}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))
            }
        </div>
    );
}

export default ModuleList;






