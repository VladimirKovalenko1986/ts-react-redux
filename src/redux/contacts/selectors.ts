import { createSelector } from "@reduxjs/toolkit";
import { selectFilterName, selectFilterNumber } from "../filters/selectors";
import { RootState } from "../store";

export const selectContacts = (state: RootState) => state.contacts.items;
export const selectLoading = (state: RootState) => state.contacts.loading;
export const selectError = (state: RootState) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilterName, selectFilterNumber],
  (contacts, filterName, filterNumber) => {
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filterName.toLowerCase()) &&
        contact.number.toLowerCase().includes(filterNumber.toLowerCase())
    );
  }
);
