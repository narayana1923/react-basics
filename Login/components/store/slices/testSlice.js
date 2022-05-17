import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {fetchCustomerData} from '../api';

export const getCustomerData = createAsyncThunk('getCustomerData', async () => {
  console.log('::Fetching Customer Data::');
  const data = await fetchCustomerData();
  if (data === undefined) throw new Error('Error while Fetching customer data');
  const finalData = data;
  console.log('Inside get customer ', finalData);
  return finalData;
});

const initialState = {
  isCustomerData: false,
  retryCustomerData: 0,

  customerDetails: {
    username: '',
    credits: '',
  },
};

const testSlice = createSlice({
  name: 'test',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getCustomerData.rejected, state => {
      state.retryCustomerData++;
      console.log('Trying.....');
    });
    builder.addCase(getCustomerData.fulfilled, (state, action) => {
      state.isCustomerData = true;
      state.customerDetails = action.payload;
      console.log('Fetched!!!!');
    });
  },
});

export default testSlice.reducer;