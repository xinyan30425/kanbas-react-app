import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorBoundary from './ErrorBoundary'; // adjust the path if you put it in a different directory
import Labs from "./Labs";
import HelloWorld from "./Labs/a3/HelloWorld";
import Kanbas from "./Kanbas";
import Project from "./project";
import {HashRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

// Add the icons to the library, so they can be used across the application
library.add(faCheckCircle, faEllipsisH);

function App() {
   return (
    <HashRouter>
      <div>
      <ErrorBoundary>
        <Routes>
          <Route path = "/" element = {<Navigate to = "project" />}/>
          <Route path = "/project/*" element = {<Project />}/>
          <Route path="/"         element={<Navigate to="/Labs"/>}/>
          <Route path="/hello"    element={<HelloWorld/>}/>
          <Route path="/Labs/*"   element={<Labs/>}/>
          <Route path="/Kanbas/*" element={<Kanbas/>}/>
        </Routes>
        </ErrorBoundary>
      </div>
    </HashRouter>
   );
}
export default App;