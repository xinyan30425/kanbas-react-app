import React, { useState, useEffect } from "react";
import axios from "axios";

function WorkingWithArrays() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [todo, setTodo] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
    completed: false,
  });

  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const response = await axios.get(API);
    setTodos(response.data);
  };

  const createTodo = async () => {
    const response = await axios.get(`${API}/create`);
    setTodos(response.data);
  };

  const removeTodo = async (todo) => {
    const response = await axios
      .get(`${API}/${todo.id}/delete`);
    setTodos(response.data);
  };

  const fetchTodoById = async (id) => {
    const response = await axios.get(`${API}/${id}`);
    setTodo(response.data);
  };

  const updateTitle = async () => {
    const response = await axios.get(
      `${API}/${todo.id}/title/${todo.title}`);
    setTodos(response.data);
  };

  const postTodo = async () => {
    const response = await axios.post(API, todo);
    setTodos([...todos, response.data]);
  };

  const deleteTodo = async (todo) => {
    try {
      const response = await axios.delete(
        `${API}/${todo.id}`);
      setTodos(todos.filter((t) => t.id !== todo.id));
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response.data.message);
    }
  };

  const updateTodo = async () => {
    try {
      const response = await axios.put(
        `${API}/${todo.id}`, todo);
      setTodos(todos.map((t) => (
        t.id === todo.id ? todo : t)));
      setTodo({});
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response.data.message);
    }

  };

  

  useEffect(() => {
    fetchTodos();
  }, []);

  // Update the description input field
  const handleDescriptionChange = (e) => {
    setTodo({
      ...todo,
      description: e.target.value
    });
  };

  // Update the completed checkbox
  const handleCompletedChange = (e, id) => {
    const updatedTodos = todos.map((t) => {
      if (t.id === id) {
        return { ...t, completed: e.target.checked };
      }
      return t;
    });
    setTodos(updatedTodos);
  };

  const API_BASE =process.env.REACT_APP_API_BASE;
  const API = `${API_BASE}/a5/todos`;

  return (
    <div>
      {errorMessage && (
        <div className="alert alert-danger mb-2 mt-2">
          {errorMessage}
        </div>
      )}

      <h3>Working with Arrays</h3>
      {/* Button to Post New Todo */}
      <button onClick={postTodo} className="btn btn-info mb-2 w-100">
        Post New Todo
      </button>

      {/* Button to Create Todo */}
      <button onClick={createTodo} className="btn btn-primary mb-2 w-100">
        Create Todo
      </button>

      {/* Button to Update Title */}
      <button onClick={updateTitle} className="btn btn-success mb-2 w-100">
        Update Title to: {todo.title}
      </button>

      {/* Input for ID */}
      <input
        value={todo.id}
        onChange={(e) => setTodo({
          ...todo, id: e.target.value
        })}
        className="form-control mb-2"
        type="number"
      />
      {/* Input for Title */}
      <input
        value={todo.title}
        onChange={(e) => setTodo({
          ...todo, title: e.target.value
        })}
        className="form-control mb-2"
        type="text"
      />
      {/* Input for Description */}
      <input
        value={todo.description}
        onChange={handleDescriptionChange}
        className="form-control mb-2"
        type="text"
      />
      <input
        value={todo.due}
        onChange={(e) => setTodo({ ...todo, due: e.target.value })}
        className="form-control mb-2"
        type="date"
      />
      <label>
        <input
          checked={todo.completed}
          onChange={(e) => setTodo({ ...todo, completed: e.target.checked })}
          type="checkbox"
        />
        Completed
      </label>

      {/* Link to Update Title */}
      <a
        href={`${API}/${todo.id}/title/${todo.title}`}
        className="btn btn-primary me-2" >
        Update Title to {todo.title}
      </a>

      {/* Link to Delete Todo */}
      <a href={`${API}/${todo.id}/delete`}
        className="btn btn-primary me-2">
        Delete Todo with ID = {todo.id}
      </a>

      {/* Link to Get All Todos */}
      <a href={`${API}`} className="btn btn-primary me-2">
        Get Todos
      </a>
      {/* Input for Retrieving Todo by ID */}
      <input
        value={todo.id}
        onChange={(e) => setTodo({
          ...todo,
          id: e.target.value
        })}
        className="form-control mb-2"
        type="number" />
      {/* Link to Get Todo by ID */}
      <a href={`${API}/${todo.id}`}
        className="btn btn-primary me-2">
        Get Todo by ID
      </a>
      {/* Link to Get Completed Todos */}
      <a href={`${API}?completed=true`}
        className="btn btn-primary me-2" >
        Get Completed Todos
      </a>
      {/* Link to Create New Todo */}
      <a href={`${API}/create`}
        className="btn btn-primary me-2">
        Create Todo
      </a>

      {/* Link to Update Description */}
      <a
        href={`${API}/${todo.id}/description/${todo.description}`}
        className="btn btn-primary me-2" >
        Update Description
      </a>

      {/* Checkbox for Completed Status */}
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleCompletedChange}
        className="me-2"
      />
      {/* Link to Update Completed */}
      <a
        href={`${API}/${todo.id}/completed/${todo.completed}`}
        className="btn btn-primary me-2" >
        Update Completed Status
      </a>

      {/* <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id}
            className="list-group-item">
            <button
              onClick={() => removeTodo(todo)}
              className="btn btn-danger float-end" >
              Remove
            </button>
            {todo.title}
          </li>
        ))}
      </ul> */}
      <textarea
        onChange={(e) => setTodo({
          ...todo,
          description: e.target.value
        })}
        value={todo.description} type="text"
      />
      <input
        onChange={(e) => setTodo({
          ...todo, due: e.target.value
        })}
        value={todo.due} type="date"
      />
      <button onClick={postTodo} >
        Post Todo
      </button>



      {/* <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id}
            className="list-group-item">

            <button onClick={updateTitle}
              className="btn btn-success mb-2 w-100">
              Update Title
            </button>
            <button
              onClick={() => fetchTodoById(todo.id)}
              className="btn btn-warning me-2 float-end" >
              Edit
            </button>
            <button
              onClick={() => removeTodo(todo)}
              className="btn btn-danger float-end" >
              Remove
            </button>
            <input
              checked={todo.completed}
              type="checkbox" readOnly
            />
            {todo.title}
            <p>{todo.description}</p>
            <p>{todo.due}</p>

            <button
              onClick={() => deleteTodo(todo)}
              className="btn btn-danger float-end ms-2">
              Delete
            </button>
            <button onClick={postTodo}>
              Post Todo
            </button>
            <button onClick={updateTodo}>
              Update Todo
            </button>
          </li>

        ))}
      </ul> */}
      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item">
            <div className="d-flex justify-content-between">
              <div>
                <input
                  checked={todo.completed}
                  onChange={(e) => handleCompletedChange(e, todo.id)} // Make checkboxes clickable
                  type="checkbox"
                />
                {todo.title}
                <p>{todo.description}</p>
                <p>{todo.due}</p>
              </div>
              <div>
                <button
                  onClick={() => fetchTodoById(todo.id)}
                  className="btn btn-warning me-2">
                  Edit
                </button>
                <button
                  onClick={() => deleteTodo(todo)}
                  className="btn btn-danger ms-2">
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default WorkingWithArrays;
