import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type LogInUserResponse = {
  token: string | undefined;
};

const initialAuthState: LogInUserResponse = {
  token: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    reset: (state) => initialAuthState,
  },
});

export const { setToken, reset } = authSlice.actions;
export default authSlice.reducer;
