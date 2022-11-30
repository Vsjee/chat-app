import { ContactInfo } from '@/models';
import { createSlice } from '@reduxjs/toolkit';

const EmptyInitialContactState: ContactInfo = {
  id: 0,
  name: '',
  image: '',
};

export const contactsKey = 'contacts';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: EmptyInitialContactState,
  reducers: {
    createContacts: (state, action) => action.payload,
    updateContacs: (state, action) => ({ ...state, ...action.payload }),
    resetContacts: (state, action) => EmptyInitialContactState,
  },
});

export const { createContacts, updateContacs, resetContacts } = contactsSlice.actions;

export default contactsSlice.reducer;
