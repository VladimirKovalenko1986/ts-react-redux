import { RootState } from "../store";

export const selectFilterName = (state: RootState) => state.filters.name;
export const selectFilterNumber = (state: RootState) => state.filters.number;
