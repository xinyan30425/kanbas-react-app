import React from "react";
import AddRedux from "./AddRedux";
import CounterRedux from "./CounterRedux";

import TodoList from "./todos/TodoList";


const ReduxExamples = () => {
    return (
        <div>
            <h2>Redux Examples</h2>
            <AddRedux />
            <CounterRedux />
            <TodoList />
        </div>
    );
};

export default ReduxExamples;