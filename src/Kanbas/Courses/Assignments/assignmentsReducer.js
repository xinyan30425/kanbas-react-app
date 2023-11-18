import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  assignments: [],
  assignment: {
    title: "New Assignment",course: "RS101",
    points:"100",
    description:'Available online',
    dueDate: "2023-12-08",
    availableFrom: "2023-11-08",
    untilDate: "2023-12-08",
},
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, action) => {
      state.assignments=[
        { ...action.payload, _id: new Date().getTime().toString() },
        ...state.assignments,
    ];
},

    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
    },

    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((assignment) => {
        if (assignment._id === action.payload._id) {
          return action.payload;
        } else {
          return assignment;
        }
      });
    },

    setAssignment: (state, action) => {
      state.assignment = action.payload;
    },
    
    setAssignments: (state, action) => {
      state.assignments = action.payload;
  },

  },
});

export const {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
  setAssignments,
} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
