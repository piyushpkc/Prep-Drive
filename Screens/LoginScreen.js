import React, { useState, useEffect } from 'react';
// import  ProfileScreen from './Screens/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator} from 'react-native';
import firebase from '../config/fire';


function LoginScreen( { navigation } ){
  {

    const [userLoginMail, setuserLoginMail] = useState('');
    const [loginPassword, setloginPassword] = useState('');
    const [confloginPassword, setConfloginPassword] = useState('');
  
    const signIn = async()=> {
    
      firebase.auth().signInWithEmailAndPassword(userLoginMail, loginPassword)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    navigation.navigate('Profile');
    // ...
  });
 }
    
  
      return(
        <SafeAreaView style={{flex:1,backgroundColor:"#fff"}}>
         
          {/* <TextInput
            style={styles.input}
            placeholder="User Name"
            keyboardType='name-phone-pad'
           
          /> */}
           <TextInput
            style={styles.input}
            
            placeholder="Email"
            value={userLoginMail}
            onChangeText ={ (val) => setuserLoginMail(val) }
            keyboardType='email-address'
  
            
          />
           <TextInput
            style={styles.input}
           
            placeholder="Password"
      
            value={loginPassword}
            onChangeText ={ (val) => setloginPassword(val) }
          />
           {/* <TextInput
            style={styles.input}
            value = {confloginPassword}
            onChangeText = { (val) => setConfloginPassword(val) }
            placeholder="Confirm loginPassword"
            // keyboardType="loginPassword"
          /> */}
          
          <TouchableOpacity
            style={styles.buttonContainer}
            activeOpacity = { .5 }
          
          onPress = { () => signIn() }
  
         >
   
              <Text style={styles.TextStyle}> LOGIN </Text>
              
        </TouchableOpacity>
        <TouchableOpacity 
        activeOpacity = { .6 }
        onPress = { () => navigation.navigate('ForgotPassword') }
  
        >
        <Text style={{justifyContent:'center', textAlign:'center', marginTop:15, color:'#2F80ED'}} >Forgot Password?</Text>
  
          </TouchableOpacity>
        
          
          
        </SafeAreaView>
      );
  };
}
    
    const styles = StyleSheet.create({
      input: {
        height: 40,
        marginTop: 100,
        marginBottom:-70,
        marginLeft:20,
        marginRight:20,
        padding:10,
        height:45,
        backgroundColor:'#eeeeee',
        borderRadius:6,
        
      },
      buttonContainer:{
        marginTop:130,
        paddingTop:20,
        paddingBottom:15,
        marginLeft:30,
        marginRight:30,
        backgroundColor:'#2F80ED',
        borderRadius:50,
        borderWidth: 1,
        borderColor: '#fff'
      },
      TextStyle:{
        color:'#fff',
        textAlign:'center'
      }
  
    });


export default LoginScreen;