import React from "react";
import ModuleList from "./ModuleList";
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";



function Modules() {
    const { courseId } = useParams();
    return (
        <div>
        <ModuleList />
      </div>
  );
}

export default Modules;