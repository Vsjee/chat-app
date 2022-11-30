import { UserInfo } from '@/models';
import { addLocalStorage, removeLocalStorage } from '@/utilities';
import { createSlice } from '@reduxjs/toolkit';

const EmptyInitialUserState: UserInfo = {
  id: 0,
  name: '',
  email: '',
};

export const userKey = 'user';

export const userSlice = createSlice({
  name: 'user',
  initialState: localStorage.getItem(userKey) ? JSON.parse(localStorage.getItem(userKey) as string) : EmptyInitialUserState,
  reducers: {
    createUser: (state, action) => {
      addLocalStorage(userKey, action.payload);
      return action.payload;
    },
    updateUser: (state, action) => {
      const result = { ...state, ...action.payload };
      addLocalStorage<UserInfo>(userKey, result);
      return result;
    },
    removeUser: () => {
      removeLocalStorage(userKey);
      return EmptyInitialUserState;
    },
  },
});

export const { createUser, updateUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
