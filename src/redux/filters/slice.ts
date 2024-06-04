import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Filters } from "../../types/types";

const initialState: Filters = {
  name: "",
  number: "",
};

const slice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilterName(state, action: PayloadAction<string>) {
      state.name = action.payload.toLowerCase();
    },
    changeFilterNumber(state, action: PayloadAction<string>) {
      state.number = action.payload.toLowerCase();
    },
  },
});

export default slice.reducer;
export const { changeFilterName, changeFilterNumber } = slice.actions;
