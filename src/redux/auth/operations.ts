import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginFormValues, RegistrationFomValues } from "../../types/types";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const setAuthHeader = (token: string): void => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};
const clearAuthHeader = () => {
  axios.defaults.headers.common["Authorization"] = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (newUser: RegistrationFomValues, thunkAPI) => {
    try {
      const response = await axios.post("/users/signup", newUser);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.message) {
        return thunkAPI.rejectWithValue(error.message);
      }
      return thunkAPI.rejectWithValue("An unknown error occurred");
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (userInfo: LoginFormValues, thunkAPI) => {
    try {
      const response = await axios.post("/users/login", userInfo);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.message) {
        return thunkAPI.rejectWithValue(error.message);
      }
      return thunkAPI.rejectWithValue("An unknown error occurred");
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/users/logout");
    clearAuthHeader();
  } catch (error) {
    if (axios.isAxiosError(error) && error.message) {
      return thunkAPI.rejectWithValue(error.message);
    }
    return thunkAPI.rejectWithValue("An unknown error occurred");
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const redaxSatte = thunkAPI.getState() as { auth: { token: string } };
    const saveToken = redaxSatte.auth.token;
    setAuthHeader(saveToken);
    const response = await axios.get("/users/current");
    return response.data;
  },
  {
    condition: (_, thunkAPI) => {
      const redaxSatte = thunkAPI.getState() as { auth: { token: string } };
      const saveToken = redaxSatte.auth.token;
      return saveToken !== null;
    },
  }
);
