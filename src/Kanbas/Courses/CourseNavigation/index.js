import { Link, useParams, useLocation } from "react-router-dom";
import './index.css'; 



function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza","Zoom Meetings", "Assignments", "Quizzes","Grades","People","Panopto Video","Discussions","Announcements","Pages","Files"];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <div>
      <div style={{ fontSize: '14px', color: '#a9a9a9', fontStyle: 'italic' }}>
      2024_1 Fall 2023 Semester
    </div>
    <div className="list-group" style={{ width: 150 }}>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/Courses/${courseId}/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}>
          {link}
        </Link>
      ))}
    </div>
    </div>
  );
}


export default CourseNavigation;