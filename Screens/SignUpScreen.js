import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import Spinner from './Screens/Spinner';
import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator} from 'react-native';
import firebase from '../config/fire';

function SignUpScreen( { navigation } )
{

  const [userMail, setUserMail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');

  const signUp = async()=> {
  
      const response = await firebase.auth().createUserWithEmailAndPassword(userMail, password)
      navigation.navigate('VerifyEmail'); 
  }
  

    return(
      <SafeAreaView style={{flex:1,backgroundColor:"#fff"}}>
       
        <TextInput
          style={styles.input}
          placeholder="User Name"
          keyboardType='name-phone-pad'
         
        />
         <TextInput
          style={styles.input}
          
          placeholder="Email"
          value={userMail}
          onChangeText ={ (val) => setUserMail(val) }
          keyboardType='email-address'

          
        />
         <TextInput
          style={styles.input}
         
          placeholder="Password"
    
          value={password}
          onChangeText ={ (val) => setPassword(val) }
        />
         <TextInput
          style={styles.input}
          value = {confPassword}
          onChangeText = { (val) => setConfPassword(val) }
          placeholder="Confirm Password"
          // keyboardType="password"
        />
        
        <TouchableOpacity
          style={styles.buttonContainer}
          activeOpacity = { .5 }
        
        onPress = { () => signUp() }
        // onPressOut = { () => Spinner() }

       >
 
            <Text style={styles.TextStyle}> SIGN UP </Text>
            
      </TouchableOpacity>
      <TouchableOpacity 
      activeOpacity = { .6 }
      onPress = { () => navigation.navigate('Login') }

      >
      <Text style={{justifyContent:'center', textAlign:'center', marginTop:15, color:'#2F80ED'}} >Already have an account? Sign in</Text>

        </TouchableOpacity>
      
        
        
      </SafeAreaView>
    );
};
  
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

 
export default SignUpScreen;