import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator} from 'react-native';
import firebase from '../config/fire';


function ForgotPassScreen() {

  const ForgotPassword = (userMail) => {
    firebase.auth().sendPasswordResetuserMail(userMail)
     
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Forget Password Screen</Text>
      <TouchableOpacity>
      style={styles.buttonContainer}
      activeOpacity = { .5 }
      onPress = { () => ForgotPassword() }
      </TouchableOpacity>
    </View>
    
  );
}




const styles = StyleSheet.create({
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
}
});

export default ForgotPassScreen;