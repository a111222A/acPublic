import React from "react";
import { Text, View,StyleSheet,TextInput,Button } from 'react-native';

const RegisterComplaint = ()=>{
    return(
        <View style={styles.container}>
            <TextInput
        style={styles.input}
        placeholder="Your Name"        
      />
      <TextInput
        style={styles.input}
        placeholder="Your Email"
        keyboardType="email-address"     
      />
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Enter your complaint here"  
      />
      {/*<Button title="Submit Complaint"  />*/}
      
            
        </View>

    )
};
const styles = StyleSheet.create({
    container: {
      padding: 20,
    },
    input: {
      height: 40,
      borderColor: '#000',
      borderWidth: 1,
      marginBottom: 10,
      padding: 10,
    },
  });
export default RegisterComplaint;