import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  entities: [], // array of cats
  status: "idle", // loading state
};

const catsSlice = createSlice({
  name: "cats",
  initialState,
  reducers: {
    catAdded(state, action) {
      // using createSlice lets us mutate state!
      state.entities.push(action.payload);
    },
    catUpdated(state, action) {
      const cat = state.entities.find((cat) => cat.id === action.payload.id);
      cat.url = action.payload.url;
    },
    // async actions to come...
  },
});

export default catsSlice.reducer;
export const { catAdded, catUpdated } = catsSlice.actions;