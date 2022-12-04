import { ContactInfo, UserInfo } from '@/models';
import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from './state/contacts';
import userSlice from './state/users';

export interface AppStore {
  user: UserInfo;
  contact: ContactInfo[];
}

const myStore = configureStore<AppStore>({
  reducer: {
    user: userSlice,
    contact: contactsSlice,
  },
});

export default myStore;
