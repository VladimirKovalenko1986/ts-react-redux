import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  fetchContacts,
  addContact,
  deleteContact,
  patchContact,
} from "./operations";
import { logout } from "../auth/operations";
import { Contact, ContactsState } from "../../types/types";

const initialState: ContactsState = {
  items: [],
  loading: false,
  error: null,
};

const slice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(
        fetchContacts.fulfilled,
        (state, action: PayloadAction<Contact[]>) => {
          state.items = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchContacts.rejected, (state, action) => {
        state.error = action.error.message || "Error fetch contact";
        state.loading = false;
      })
      .addCase(addContact.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(
        addContact.fulfilled,
        (state, action: PayloadAction<Contact>) => {
          state.items.push(action.payload);
          state.loading = false;
        }
      )
      .addCase(addContact.rejected, (state, action) => {
        state.error = action.error.message || "Error add contact";
        state.loading = false;
      })
      .addCase(deleteContact.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(
        deleteContact.fulfilled,
        (state, action: PayloadAction<{ id: string }>) => {
          state.items = state.items.filter(
            (contact) => contact.id !== action.payload.id
          );
          state.loading = false;
        }
      )
      .addCase(deleteContact.rejected, (state, action) => {
        state.error = action.error.message || "Error add contact";
        state.loading = false;
      })
      .addCase(patchContact.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(
        patchContact.fulfilled,
        (state, action: PayloadAction<Contact>) => {
          state.items = state.items.map((contact) =>
            contact.id === action.payload.id ? action.payload : contact
          );
          state.loading = false;
        }
      )
      .addCase(patchContact.rejected, (state, action) => {
        state.error = action.error.message || "Error edite contact";
        state.loading = false;
      })
      .addCase(logout.fulfilled, (state) => {
        state.items = [];
        state.loading = false;
        state.error = null;
      }),
});

export default slice.reducer;
