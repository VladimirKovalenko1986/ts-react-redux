import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Contact } from "../../types/types";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const fetchContacts = createAsyncThunk<
  Contact[],
  void,
  { rejectValue: string }
>("contacts/fetchAll", async (_, thunkAPI) => {
  try {
    const response = await axios.get("/contacts");
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.message) {
      return thunkAPI.rejectWithValue(error.message);
    }
    return thunkAPI.rejectWithValue("An unknown error occurred");
  }
});

export const addContact = createAsyncThunk<
  Contact,
  Contact,
  { rejectValue: string }
>("contacts/addContact", async (newContact, thunkAPI) => {
  try {
    const response = await axios.post("/contacts", newContact);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.message) {
      return thunkAPI.rejectWithValue(error.message);
    }
    return thunkAPI.rejectWithValue("An unknown error occurred");
  }
});

export const deleteContact = createAsyncThunk<
  { id: string },
  string,
  { rejectValue: string }
>("contacts/deleteContact", async (contactId, thunkAPI) => {
  try {
    const response = await axios.delete(`/contacts/${contactId}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.message) {
      return thunkAPI.rejectWithValue(error.message);
    }
    return thunkAPI.rejectWithValue("An unknown error occurred");
  }
});

export const patchContact = createAsyncThunk<
  Contact,
  { contactId: string; updatedContact: Partial<Contact> },
  { rejectValue: string }
>("contacts/patchContact", async ({ contactId, updatedContact }, thunkAPI) => {
  try {
    const response = await axios.patch(
      `/contacts/${contactId}`,
      updatedContact
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.message) {
      return thunkAPI.rejectWithValue(error.message);
    }
    return thunkAPI.rejectWithValue("An unknown error occurred");
  }
});
