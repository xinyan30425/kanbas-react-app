import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faEllipsisV,faCircleCheck,faPlus,faCaretDown } from '@fortawesome/free-solid-svg-icons'


function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
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
                    <FontAwesomeIcon icon={faCircleCheck} color="green"/> Publish All
                </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton"> </div>

            <button type="button" className="btn module-button"> 
                <FontAwesomeIcon icon={faPlus} /> Module
            </button>
            
            <button type="button" className="btn btn-secondary"> 
                <FontAwesomeIcon icon={faEllipsisV} /> 
            </button>
        </div>
    </div>
        {
            modules
            .filter(module => module.course === courseId)
            .map(module => (
                <div key={module._id} className="module-item" >
                    <span className="action-icons fa-lg" style={{ marginTop: '20px', marginBottom: '20px',marginRight: '20px' }}>
                    <FontAwesomeIcon icon={faCheckCircle} className="text-success ms-3" />
                    <FontAwesomeIcon icon={faCaretDown} style={{ marginLeft: '5px' }}/>
                    <FontAwesomeIcon icon={faPlus} style={{ marginLeft: '20px' }}  />
                    <FontAwesomeIcon icon={faEllipsisV} style={{ marginLeft: '20px' }}/>
                    </span>                
                    <h2 className="module-title">{module.name}</h2>
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






