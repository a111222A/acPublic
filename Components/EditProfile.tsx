import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const EditProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');

  const handleSave = () => {
    // Handle save logic here
    console.log('Save button pressed!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Edit Profile</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Mobile NO</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Mobile NO"
          multiline
          numberOfLines={4}
          value={bio}
          onChangeText={(text) => setBio(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Address"
          multiline
          numberOfLines={4}
          value={bio}
          onChangeText={(text) => setBio(text)}
        />
      </View>
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Edit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'#000'
  },
  inputContainer: {
    marginBottom: 16,
    color:'#000'
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color:'#000'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 8,
    color:'#000'
  },
  saveButton: {
    backgroundColor:"#008080",
   color:"#ffffff", 
   fontSize:24,
   textAlign:'center',
   padding:10,
   margin:5,
   borderRadius:30,
   marginLeft:30,
   marginRight:30,
   shadowColor:"black",
   elevation:10,
   shadowOpacity:1
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign:'center'
  },
});

export default EditProfile;
