import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV, faCircleCheck, faPlus, } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
    setModules,
} from "./modulesReducer";
import { findModulesForCourse, createModule } from "./client";
import * as client from "./client";

function ModuleList() {
    const { courseId } = useParams();
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();

    const handleAddModule = () => {
        client.createModule(courseId, module).then((module) => {
            dispatch(addModule(module));
        });
    };

    const handleDeleteModule = (moduleId) => {
        client.deleteModule(moduleId).then((status) => {
            dispatch(deleteModule(moduleId));
        });
    };

    const handleUpdateModule = async () => {
        const status = await client.updateModule(module);
        dispatch(updateModule(module));
    };

    useEffect(() => {
        client.findModulesForCourse(courseId)
            .then((modules) =>
                dispatch(setModules(modules))
            );
    }, [courseId]);

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

                    <button onClick={() => dispatch(addModule({ ...module, course: courseId }))} className="btn module-button"><FontAwesomeIcon icon={faPlus} /> Module</button>

                    <button type="button" className="btn btn-secondary">
                        <FontAwesomeIcon icon={faEllipsisV} />
                    </button>
                </div>
            </div>

            <li className="list-group-item d-flex">
                <div className="module-inputs flex-grow-1">
                    <input
                        value={module.name}
                        onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
                        placeholder="Module Name"
                        className="form-control w-50"
                    />
                    <textarea
                        value={module.description}
                        onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
                        placeholder="Module Description"
                        className="form-control mt-2 mb-3 w-50 h-25"
                    />
                </div>

                <div className="module-actions ml-auto">
                    <button className="btn btn-primary mt-2 me-2" onClick={() => handleUpdateModule()}> Update </button>
                    <button className="btn btn-success mt-2" onClick={() => handleAddModule()}>Add</button>
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
                                            {/* <button onClick={() => dispatch(deleteModuleAction(module._id))} className="btn btn-danger ms-2 me-2 mt-2 mb-2 p-1">Delete</button> */}
                                            {/* <button onClick={(event) => dispatch(setModuleAction(module))} className="btn btn-success me-2 mt-2 mb-2 p-1">Edit</button> */}
                                            <button className="btn btn-warning me-1"
                                                onClick={() => dispatch(setModule(module))}>
                                                Edit
                                            </button>
                                            <button className="btn btn-danger"
                                                onClick={() => handleDeleteModule(module._id)}>
                                                Delete
                                            </button>

                                        </div>
                                    </div>
                                </h2>
                            </div>
                            <p className="module-description">{module.description}</p>
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






