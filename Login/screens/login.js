/* eslint-disable prettier/prettier */
import {AuthenticationDetails, CognitoUser} from 'amazon-cognito-identity-js';
import React, {useState} from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import UserPool from '../components/userPool';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const checkLogin = () => {
    const user = new CognitoUser({
      Username: username,
      Pool: UserPool,
    });

    const authDetails = new AuthenticationDetails({
      Username: username,
      Password: password,
    });
    user.authenticateUser(authDetails, {
      onSuccess: data => {
        navigation.navigate('Dashboard', {username: username});
      },
      onFailure: err => {
        Alert.alert('Opps!!', 'Invalid Credentials', [
          {
            text: 'Ok',
          },
        ]);
      },
      newPasswordRequired: data => {
        console.log('newPasswordRequired ', data);
        navigation.navigate('Dashboard', {username: username});
      },
    });
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/vklogo.png')} />
      <Text style={styles.welcome}>Please login to continue</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={val => setUsername(val)}
      />
      <TextInput
        style={styles.input}
        placeholder="password"
        secureTextEntry={true}
        onChangeText={val => setPassword(val)}
      />
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.userBtn} onPress={checkLogin}>
          <Text style={styles.btnTxt}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.userBtn}>
          <Text style={styles.btnTxt}>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  welcome: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
    fontFamily: 'Arial',
  },
  input: {
    width: '90%',
    backgroundColor: '#99e699',
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '90%',
  },
  userBtn: {
    backgroundColor: '#2C951F',
    padding: 10,
    width: '35%',
    margin: 20,
    borderRadius: 10,
  },
  btnTxt: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#DDDDDD',
  },
});
export default Login;
