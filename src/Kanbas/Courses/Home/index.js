import ModuleList from "../Modules/ModuleList";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./index.css";
import { faFileImport,faRightFromBracket,faArrowsSpin,faChartSimple,faBullhorn,faBell} from '@fortawesome/free-solid-svg-icons';
import { useParams } from "react-router-dom";

function Home() {
    return (
      <div className="container-fluid">
        <div className="row">


        <div className="col-md-8">
            <ModuleList />
        </div>
          
        <div className="col-md-4">

          <div class="course-status">   

          <div>
            <button type="button" className="btn btn-third" style={{ width:"400px",textAlign: 'left'}}>
            <FontAwesomeIcon icon={faFileImport}/> Import Existing Content
          </button>
          </div>


          <div>
            <button type="button" className="btn btn-third"style={{ width:"400px",textAlign: 'left'}}>
            <FontAwesomeIcon icon={faRightFromBracket} /> Import From Commons
            </button>
          </div>

          <div>
            <button type="button" className="btn btn-third"style={{ width:"400px",textAlign: 'left'}}>
            <FontAwesomeIcon icon={faArrowsSpin}/> Choose Home Page
            </button>
          </div>

          <div>
            <button type="button" className="btn btn-third"style={{ width:"400px",textAlign: 'left'}}>
            <FontAwesomeIcon icon={faChartSimple} /> View Course Stream
            </button>
          </div>

          <div>
            <button type="button" className="btn btn-third"style={{ width:"400px",textAlign: 'left'}}>
            <FontAwesomeIcon icon={faBullhorn} /> New Announcement
            </button>
          </div>

          <div>
            <button type="button" className="btn btn-third"style={{ width:"400px",textAlign: 'left'}}>
            <FontAwesomeIcon icon={faChartSimple} /> New Analytics
            </button>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <button type="button" className="btn btn-third"style={{ width:"400px",textAlign: 'left'}}>
            <FontAwesomeIcon icon={faBell} /> View Course Notification
            </button>
          </div>

          <h3 class="todo-title">TO DO</h3>
          <ul>
          <li>
          <p class="red-link">Grade A1 - ENV + HTML</p>
          <p class="small-text">100 points Sep 18 at 11:59pm</p>
          </li>
          <li>
          <p class="red-link">Grade A2 - CSS + BOOTSTRAP</p>
          <p class="small-text">100 points Oct 2 at 11:59pm</p>
        </li>
        </ul>
            </div>
        </div>
      </div>
    </div>
    );
  }
  export default Home;
