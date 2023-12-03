import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithObjects from "./WorkingWithObjects";


function Assignment5() {
  const API_BASE =process.env.REACT_APP_API_BASE;

  return (
    <div>
      <h1>Assignment 5</h1>
      <div className="list-group">
        <a href={`${API_BASE}`} 
          className="list-group-item">
          Welcome
        </a>
      </div>
      <EncodingParametersInURLs />
      <WorkingWithObjects />
      <WorkingWithArrays />
    </div>
  );
}
export default Assignment5;

