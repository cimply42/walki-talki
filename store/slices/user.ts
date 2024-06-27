import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type GetUserInfoResponse = {
  uuid: string | undefined;
  email: string | undefined;
  firstName?: string | undefined;
  lastName?: string | undefined;
  isFtu: boolean;
  isVerified: boolean;
};

const initialUserState: GetUserInfoResponse = {
  uuid: undefined,
  email: undefined,
  firstName: undefined,
  lastName: undefined,
  isFtu: true,
  isVerified: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    setUser: (state, action: PayloadAction<GetUserInfoResponse>) =>
      action.payload,
    updateUser: (state, action: PayloadAction<GetUserInfoResponse>) => {
      state = {
        ...state,
        ...action.payload,
      };
    },
    reset: (state) => initialUserState,
  },
});

export const { setUser, updateUser, reset } = userSlice.actions;
export default userSlice.reducer;
