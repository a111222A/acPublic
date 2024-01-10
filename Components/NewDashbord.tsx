import React from "react";
import { View, TextInput, StyleSheet, Text,Image } from 'react-native';

const NewDashbord = () => {
  const imagePath = require('./assets/free.png');
  return (
    <View>
     <TextInput style={style.Search}
        placeholder="Search..."

      />
      
      <View style={style.container}>
      <Image source={imagePath} style={style.image} />
      </View>
      </View>
      )

}
      const style=StyleSheet.create({
        Search:{
        borderWidth:1,
      margin:10,
      borderRadius:30,
      color:'#000',
      fontSize:20,
    
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: 200,
      height: 200,
      resizeMode: 'cover', // or 'contain', 'stretch', 'repeat', 'center'
    },
})
      export default NewDashbord;