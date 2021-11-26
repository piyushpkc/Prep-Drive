// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as firebase from 'firebase';
import  HomeScreen from './Screens/HomeScreen';
import  SignUpScreen from './Screens/SignUpScreen';
import  LoginScreen from './Screens/LoginScreen';
import  ForgotPassScreen from './Screens/ForgotPassScreen';
import  ResetPassScreen from './Screens/ResetPassScreen';
import  VarifyOtpScreen from './Screens/VarifyOtpScreen';
import  VerifyEmailScreen from './Screens/VerifyEmailScreen';
import  ProfileScreen from './Screens/ProfileScreen';
import HeaderStyle from './Screens/HeaderStyle'


// const firebaseConfig = {
//   apiKey: "AIzaSyAADs7A6PTwC0ir-0lwz55DaNMkTaa5Df4",
//   authDomain: "rnav-8634c.firebaseapp.com",
//   projectId: "rnav-8634c",
//   storageBucket: "rnav-8634c.appspot.com"
// };
// firebase.initializeApp(firebaseConfig);


const Stack = createStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen name="Dashboard" component={HomeScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={HeaderStyle("Sign Up")} />
        <Stack.Screen name="Login" component={LoginScreen} options={HeaderStyle("Login")}/>
        <Stack.Screen name="ForgotPassword" component={ForgotPassScreen} options={HeaderStyle("Forgot Password")} style={{paddingLeft:-100}} />
        <Stack.Screen name="ResetPassword" component={ResetPassScreen} options={HeaderStyle("Reset Password")} />
        <Stack.Screen name="VarifyOTP" component={VarifyOtpScreen} options={HeaderStyle("Verify OTP") }/>
        <Stack.Screen name="VerifyEmail" component={VerifyEmailScreen} options={HeaderStyle("Verify Email")} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={HeaderStyle("Profile")} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;