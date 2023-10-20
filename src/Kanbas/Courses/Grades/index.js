import db from "../../Database";
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileImport,faCaretDown,faFileExport,faGear,faFilter,faSearch} from '@fortawesome/free-solid-svg-icons'
import "./index.css";


function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
  
  return (
    <div>
      <div className="header-container">
        <div className="title-container">
          <h1 className="grade-header">Gradebook</h1>
          <FontAwesomeIcon icon={faCaretDown} className="dropdown-icon" />
        </div>
    
        <div className="button-container">
          <button type="button" className="btn btn-secondary"> 
            <FontAwesomeIcon icon={faFileImport} /> Import
          </button>

          <button type="button" className="btn btn-secondary"> 
            <FontAwesomeIcon icon={faFileExport} /> Export
          </button>

          <button type="button" className="btn btn-secondary"> 
            <FontAwesomeIcon icon={faGear} />
          </button>
        </div>
      </div>  

      <div className="row mb-3">
        <div className="col-md-6" style={{textAlign: 'left'}}>
          <strong>Student Names</strong>
        </div>

        <div className="col-md-6" style={{textAlign: 'left'}}>
          <strong>Assignment Names</strong>
        </div>
      </div>


    <div className="row mb-3">
    <div className="col-md-6">
        <div className="input-group">
            
                <span className="input-group-text">
                    <FontAwesomeIcon icon={faSearch} />
                </span>
          
            <input 
                type="text" 
                className="form-control" 
                placeholder="Search Students" 
                onChange={e => {/* handle student name input change if necessary */}}
            />
            <div className="input-group-append">
                <span className="input-group-text">
                    <FontAwesomeIcon icon={faCaretDown} />
                </span>
            </div>
        </div>
    </div>

    <div className="col-md-6">
        <div className="input-group">
            <div className="input-group-prepend">
                <span className="input-group-text">
                    <FontAwesomeIcon icon={faSearch} />
                </span>
            </div>
            <input 
                type="text" 
                className="form-control" 
                placeholder="Search Assignments" 
                onChange={e => {/* handle assignment name input change if necessary */}}
            />
            <div className="input-group-append">
                <span className="input-group-text">
                    <FontAwesomeIcon icon={faCaretDown} />
                </span>
            </div>
        </div>
    </div>
</div>





      



  

      <button type="button" className="btn btn-secondary"> 
        <FontAwesomeIcon icon={faFilter} /> Apply Filters
      </button>

      <div className="table-responsive">
        <table className="table">
          <thead>
            <th>Student Name</th>
            {assignments.map((assignment) => (<th>{assignment.title}</th>))}
          </thead>
          <tbody>
            {enrollments.map((enrollment) => {
              const user = db.users.find((user) => user._id === enrollment.user);
              return (
                <tr>
                   <td>{user.firstName} {user.lastName}</td>
                   {assignments.map((assignment) => {
                     const grade = db.grades.find(
                       (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                       return (<td>{grade?.grade || ""}</td>);})}
                </tr>);
            })}
                      </tbody></table>
      </div></div>);
}
export default Grades;
