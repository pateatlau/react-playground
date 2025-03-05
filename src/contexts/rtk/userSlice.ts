import { createSlice } from '@reduxjs/toolkit';

interface User {
  name: string;
  password: string;
}

const initialState: User = {
  name: '',
  password: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload.name;
    },
    setPassword: (state, action) => {
      state.password = action.payload.password;
    },
    resetUser: (state) => {
      state.name = '';
      state.password = '';
    },
  },
});

export const { setName, setPassword, resetUser } = userSlice.actions;
export default userSlice.reducer;
