import { UserInfo } from '@/models';
import { configureStore } from '@reduxjs/toolkit';
import userSlice from './state/users';

export interface AppStore {
  user: UserInfo;
}

const myStore = configureStore<AppStore>({
  reducer: {
    user: userSlice,
  },
});

export default myStore;
