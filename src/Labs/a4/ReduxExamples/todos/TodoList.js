import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";


function TodoList() {
    const { todos } = useSelector((state) => state.todosReducer);
    return (
      <div>
        <h2>Todo List</h2>
        <ul className="list-group">
          <TodoForm />
          {todos.map((todo) => (
            <TodoItem todo={todo} />
          ))}
        </ul>
      </div>
    );
  }
  export default TodoList;



// function TodoList() {
//     const [todos, setTodos] = useState([
//         { id: "1", title: "Learn React" },
//         { id: "2", title: "Learn Node" }]);
//     const [todo, setTodo] = useState({ title: "Learn Mongo" });
//     const addTodo = (todo) => {
//         const newTodos = [...todos, {
//             ...todo,
//             id: new Date().getTime().toString()
//         }];
//         setTodos(newTodos);
//         setTodo({ title: "" });
//     };
//     const deleteTodo = (id) => {
//         const newTodos = todos.filter((todo) => todo.id !== id);
//         setTodos(newTodos);
//     };
//     const updateTodo = (todo) => {
//         const newTodos = todos.map((item) =>
//             (item.id === todo.id ? todo : item));
//         setTodos(newTodos);
//         setTodo({ title: "" });
//     };
//     return (
//         <div>
//             <h2>Todo List</h2>
//             <ul className="list-group">
//                 <TodoForm
//                     todo={todo}
//                     setTodo={setTodo}
//                     addTodo={addTodo}
//                     updateTodo={updateTodo} />
//                 {todos.map((todo) => (
//                     <TodoItem
//                         todo={todo}
//                         deleteTodo={deleteTodo}
//                         setTodo={setTodo} />
//                 ))}
//             </ul>
//         </div>
//     );
// }
// export default TodoList;
