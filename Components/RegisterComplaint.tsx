import React, { useRef } from 'react';
import { Text, View,StyleSheet,TextInput,Button } from 'react-native';
import DocumentPicker from "react-native-document-picker";
import { TouchableOpacity } from "react-native-gesture-handler";
import Entypo from 'react-native-vector-icons/Entypo';
import { RNCamera } from 'react-native-camera';


const RegisterComplaint = ()=>{
  const SelectDocumernt = async () => {
    try {
      const doc = await DocumentPicker.pick({
        type: [DocumentPicker.types.images]
      });

    } catch (err) {
      if (DocumentPicker.isCancel()) {
        console.log("User cancelled the upload");
      }
      else {
        console.log(err)
      }

    }
  }
  const cameraRef = useRef(null);

  const takePicture = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);
      console.log(data.uri);
    }
  };

    return(
        <View style={styles.container}>
            <TextInput
        style={styles.input}
        placeholder="Your Name"        
      />
      <TextInput
        style={styles.input}
        placeholder=" enter Your Email"
        keyboardType="email-address"     
      />
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Enter your complaint here"  
      />
      {/*<Button title="Submit Complaint"  />
      <Button title="updete" onPress={SelectDocumernt} />*/}
      <Text >
        
      </Text>
      <View style={{justifyContent:'center',alignItems:'center'}}>
      <Entypo name='upload' color={'#1b868e'} size={30} />
      <Text style={{color:'black'}}>Drop your file here </Text>
        
    
      <TouchableOpacity onPress={SelectDocumernt} style={styles.bnt}>
        <Text style={{color:'#ffffff'}}>Updete</Text>
      </TouchableOpacity>
      </View>

      <View style={{ flex: 1 }}>
      <RNCamera
        ref={cameraRef}
        style={{ flex: 1 }}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.off}
      />
      <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
        <TouchableOpacity onPress={takePicture}>
          <Text style={{ fontSize: 14 }}> SNAP </Text>
        </TouchableOpacity>
      </View>
    </View>
            
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
    bnt:{
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#008080',
      height:40,
      width:130,

    },
  });
export default RegisterComplaint;