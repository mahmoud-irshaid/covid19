import { createSlice } from '@reduxjs/toolkit';
export const DashboardSlice = createSlice({
  name: 'DashboardSlice',
  initialState: {
    global: {},
    countries: []
  },

  reducers: {

    setStoreGlobal: (state, action) => {
      state.global = action.payload;
    },
    setStoreCountries: (state, action) => {
      state.countries = action.payload;
    },
  },
});
export const { setStoreGlobal, setStoreCountries } = DashboardSlice.actions;
export default DashboardSlice.reducer;