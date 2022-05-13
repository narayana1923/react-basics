import {CognitoUserPool} from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'us-east-1_B1MIVzVUU',
  ClientId: '4s7rc3gip8g1o1m9laj43id57h',
};

export default new CognitoUserPool(poolData);
