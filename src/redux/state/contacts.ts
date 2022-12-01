import { ContactInfo } from '@/models';
import { addLocalStorage, removeLocalStorage } from '@/utilities';
import { createSlice } from '@reduxjs/toolkit';

const EmptyInitialContactState: ContactInfo[] = [];

export const contactsKey = 'contacts';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: EmptyInitialContactState,
  reducers: {
    createContacts: (state, action) => {
      addLocalStorage(contactsKey, { res: [...action.payload] });
      return action.payload;
    },
    updateContacs: (state, action) => {
      const result = [...state, ...action.payload];
      addLocalStorage(contactsKey, result);
      return result;
    },
    removeContacts: () => {
      removeLocalStorage(contactsKey);
      return EmptyInitialContactState;
    },
  },
});

export const { createContacts, updateContacs, removeContacts } = contactsSlice.actions;

export default contactsSlice.reducer;
