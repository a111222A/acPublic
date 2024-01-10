// Import necessary React Native components
import React from 'react';
import { View, Text, StyleSheet, Image,TouchableHighlight } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';



// ProfilePage component
const ProfilePage = ({ navigation }: { navigation: any }) => {
    const EditProfile =()=>{
        navigation.navigate('EditProfile');
    }
    const imagePat = require('./assets/propic.jpg');
  return (
    <View style={styles.container}>
        
      <Image
        source={imagePat}
        style={styles.profileImage}
      />
      <View style={{flexDirection:'row'}}>
      <Text style={styles.username}>John Doe</Text>
      <TouchableHighlight onPress={()=>EditProfile()} >
        <Entypo name='edit' color={'#f70000'} size ={30}/> 
        </TouchableHighlight>
        </View>
      <Text style={styles.bio}>Software Developer</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Email: john.doe@example.com</Text>
        <Text style={styles.infoText}>Mobile No: 0987654321</Text>
        <Text style={styles.infoText}>Address: Uluberia, Shyampur, Howrah, </Text>
        </View>
    </View>
  );
};

// Styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 16,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color:'#000'
  },
  bio: {
    fontSize: 18,
    marginBottom: 16,
    color:'#000'
  },
  infoContainer: {
    width: '100%',
    padding: 16,
    borderWidth: 5,
    borderColor: '#ddd',
    borderRadius: 8,
    shadowColor:'#000',
    
    
  },
  infoText: {
    fontSize: 16,
    marginBottom: 8,
    color:'#000'
  },
});

export default ProfilePage;
