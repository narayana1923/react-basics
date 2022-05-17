/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import Login from './screens/login';
import DashBoard from './screens/dashboard';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector, useDispatch} from 'react-redux';
import {getCustomerData} from './components/store/slices/testSlice';
import Loading from './screens/loading';

const Stack = createNativeStackNavigator();

const App = () => {
  const {isCustomerData, retryCustomerData} = useSelector(state => state.test);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(retryCustomerData, isCustomerData);
    if (isCustomerData) return;
    setTimeout(() => {
      dispatch(getCustomerData());
    }, 3000);
  }, [retryCustomerData]);
  return isCustomerData ? (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'Login'}}
        />
        <Stack.Screen
          name="Dashboard"
          component={DashBoard}
          options={{title: 'Dashboard'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <Loading />
  );
};

export default App;
