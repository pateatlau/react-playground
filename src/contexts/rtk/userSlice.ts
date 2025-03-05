import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

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
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    resetUser: (state) => {
      state.name = '';
      state.password = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setNameAsync.pending, () => {
        console.log('pending');
      })
      .addCase(
        setNameAsync.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.name = action.payload;
        }
      );
  },
});

export const setNameAsync = createAsyncThunk(
  'user/setNameAsync',
  async (name: string) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return name;
  }
);

export const { setName, setPassword, resetUser } = userSlice.actions;
export default userSlice.reducer;
