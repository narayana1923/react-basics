import axios from 'axios';

const requestHeaders = {
  'Content-Type': 'application/json',
};

const requestBody = {};

const baseURL = 'https://z5qdmz9yrb.execute-api.us-east-1.amazonaws.com/dev/';

export const fetchCustomerData = async () => {
  try {
    let data = await axios({
      method: 'get',
      url: baseURL,
      // timeout: 2000,
      // data: requestBody,
      // headers: requestHeaders,
    });
    console.log('Verifying!!   ', data.data);
    return data.data;
  } catch (err) {
    console.log(error);
    return undefined;
  }
};
