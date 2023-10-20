import { Link, useLocation } from "react-router-dom";
import "./index.css";

import {BiUserCircle} from "react-icons/bi";
import {RiDashboard3Fill} from "react-icons/ri";
import {FaBook} from "react-icons/fa";
import {BsFillCalendar2WeekFill} from "react-icons/bs";
import {AiOutlineInbox, AiFillEdit} from "react-icons/ai";
import {MdHistory, MdHelp} from "react-icons/md";
import {IoMdPeople} from "react-icons/io";

function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar","Inbox","History","Studio","Commons","Help"];
  const linkToIconMap = {
    "Account": <BiUserCircle className="ac-icon"/>,
    "Dashboard": <RiDashboard3Fill className="wd-icon"/>,
    "Courses": <FaBook className="wd-icon"/>,
    "Calendar": <BsFillCalendar2WeekFill className="wd-icon"/>,
    "Inbox": <AiOutlineInbox className="wd-icon"/>,
    "History": <MdHistory className="wd-icon"/>,
    "Studio": <AiFillEdit className="wd-icon"/>,
    "Commons": <IoMdPeople className="wd-icon"/>,
    "Help": <MdHelp className="wd-icon"/>
  };

  const { pathname } = useLocation();
  
  return (
    <div className="list-group wd-kanbas-navigation">
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}
        >
          <div className="icon-container"> 
            {linkToIconMap[link]}
          </div>
          <div className="text-container">
            {link}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default KanbasNavigation;
