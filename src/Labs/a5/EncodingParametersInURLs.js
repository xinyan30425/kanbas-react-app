import React, { useState, useEffect } from "react";
import axios from "axios";

function EncodingParametersInURLs() {
  const [a, setA] = useState(34);
  const [b, setB] = useState(23);
  const [welcome, setWelcome] = useState("");
  const [result, setResult] = useState(0);
  // Define the state for assignment
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    });

  const URL = "http://localhost:4000/a5";

  

  const fetchWelcome = async () => {
    const response = await axios.get("http://localhost:4000/a5/welcome");
    setWelcome(response.data);
  };
  useEffect(() => {
    fetchWelcome();
  }, []);
  const updateTitle = async () => {
    const response = await axios
      .get(`${URL}/title/${assignment.title}`);
    setAssignment(response.data);
  };
  useEffect(() => {
    fetchAssignment();
  }, []);

  // Fetch assignment (you need to define where to fetch from)
  const fetchAssignment = async () => {
    const response = await axios.get(`${URL}/assignment`);
    setAssignment(response.data);
    };


  const fetchSum = async (a, b) => {
    const response = await
      axios.get(`http://localhost:4000/a5/add/${a}/${b}`);
    setResult(response.data);
  };
  const fetchSubtraction = async (a, b) => {
    const response = await axios.get(
      `http://localhost:4000/a5/subtract/${a}/${b}`);
    setResult(response.data);
  };
  useEffect(() => {fetchWelcome();}, []);

return (
  <div>
    <h3>Encoding Parameters In URLs</h3>
    <h4>Integrating React with APIs</h4>
    <h5>Fetching Welcome</h5>
    <h6>{welcome}</h6>

    <h4>Calculator</h4>
    <input value={result}
      className="form-control mb-2" type="number" readOnly
    />
    <h3>Fetch Result</h3>
    <input
      onChange={(e) => setA(e.target.value)}
      className="form-control" type="number" value={a} />
    <input
      onChange={(e) => setB(e.target.value)}
      className="form-control" type="number" value={b} />
    <button onClick={() => fetchSum(a, b)}
      className="btn btn-primary mb-2  w-100" >
      Fetch Sum of {a} + {b}
    </button>
    <button onClick={() => fetchSubtraction(a, b)}
      className="btn btn-danger me-2 w-100" >
      Fetch Substraction of {a} - {b}
    </button>
    <h3>Query Parameters</h3>
    <a
      href={`http://localhost:4000/a5/calculator?operation=add&a=${a}&b=${b}`}
      className="btn btn-primary">
      Add {a} + {b}
    </a>
    <a
      href={`http://localhost:4000/a5/calculator?operation=subtract&a=${a}&b=${b}`}
      className="btn btn-danger">
      Substract {a} - {b}
    </a>

    <input value={result}
      className="form-control mb-2" type="number" readOnly
    />
    <button onClick={updateTitle}
      className="w-100 btn btn-primary mb-2">
      Update Title to: {assignment.title}
    </button>
    <button onClick={fetchAssignment}
      className="w-100 btn btn-danger mb-2">
      Fetch Assignment
    </button>
  </div>
);
}
export default EncodingParametersInURLs;
