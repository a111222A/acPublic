import React from "react";
import { Text, View, Image, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput } from "react-native-gesture-handler";
const ManageAddress = () => {
    const imgmap = require('./assets/map.jpg')
    return (
        <View style={{ flex: 1, }}>


            <ImageBackground source={imgmap} style={{ flex: 1 }}>
                <View style={style.sharch}>
                    <TextInput placeholder="From" />
                    <TextInput placeholder="To" />
                </View>
                <View>
                    <TouchableOpacity style={style.Button}>
                        <Text style={{textAlign:'center'}}>Find Location</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>

    )
};
const style = StyleSheet.create({

    Button: {
        backgroundColor: "#dce81a",
        color: "#ffffff",
        fontSize: 24,
        textAlign: 'center',
        padding: 10,
        margin: 0,
        borderRadius: 30,
        marginLeft: 55,
        marginRight: 55,
        shadowColor: "black",
        elevation: 10,
        shadowOpacity: 1
    },
    sharch: {
        backgroundColor: '#fff',
        margin: 25,
    }
})
export default ManageAddress;