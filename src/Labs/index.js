import { Route, Routes, Link, useLocation, Navigate } from "react-router-dom";
import Assignment3 from "./a3";
import Assignment4 from "./a4";
import Assignment5 from "./a5";
import store from "./store";
import { Provider } from "react-redux";
import Nav from "../Nav";

function Labs() {
  const { pathname } = useLocation();
  // const { pathname } = location;
  return (
    <Provider store={store}>
      <div className="container">
        <Nav/>
        <Routes>
          <Route path="/" element={<Navigate to="a3" />} />
          <Route path="a3/*" element={<Assignment3 />} />
          <Route path="a4" element={<Assignment4 />} />
          <Route path="a5" element={<Assignment5 />} />
        </Routes>

      </div>
    </Provider>
  );
}

export default Labs;