import { UserInfo } from '@/models';
import { createSlice } from '@reduxjs/toolkit';

const EmptyInitialUserState: UserInfo = {
  id: 0,
  name: '',
  email: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState: EmptyInitialUserState,
  reducers: {
    createUser: (state, action) => action.payload,
    updateUser: (state, action) => ({ ...state, ...action.payload }),
    removeUser: () => EmptyInitialUserState,
  },
});

export const { createUser } = userSlice.actions;

export default userSlice.reducer;
