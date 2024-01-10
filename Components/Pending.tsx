import React from "react";
import { View, Text, StyleSheet, } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Pending = () => {
    return (
        <View style={{flex:1}}>
            <View style={styles.Box1}>
                <View style={styles.ProfileName}>
                    <FontAwesome5 name='user-circle' color={'#f70000'} size={50} style={{ margin: 10 }} />
                    <Text style={styles.nsme}>Jhon Den</Text>
                    <View style={{ }}>
                        <Text style={{ marginLeft: 150, marginTop: 10,fontWeight:'bold',color:'#000' }}>12/12/2023</Text>
                        <Text style={{ marginLeft: 150,fontWeight:'bold',color:'#000'  }}>Job Id :78998</Text>
                    </View>

                </View>
                <Text style={{fontWeight:'bold',color:'#000'}}>Secvice Type : Pumper</Text>
                <Text style={{fontWeight:'bold',color:'#000'}}>Secvice Title : Pipe lick</Text>
                <Text style={{fontWeight:'bold',color:'#000'}}>location : Shyampu, Uluberia, Howrah, pin:77778</Text>
                <View style={styles.Remak}>
                    <Text style={{fontWeight:'500',color:'#000'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, blanditiis dolorem necessitatibus earum nesciunt, laboriosam et, aut dignissimos officiis at quos exercitationem </Text>
                </View>
            </View>
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5
    },
    ProfileName: {
        flexDirection: 'row',
    },
    nsme: {
        marginTop: 25,
        fontWeight:'bold',
        color:'#000'

    },
    date: {
        marginRight: 50,
        fontWeight:'bold',
        color:'#000'
    },
    Box1: {
        backgroundColor: "#ffffff",
        margin: 20,
        marginLeft: 5,
        marginRight: 5,
        shadowColor: "black",
        elevation: 10,
        shadowOpacity: 10,
        width: 400,
        padding:10,
        
    },
    Remak: {
        
        height: 70,
        padding:10,
        fontWeight:'bold',
        color:'#000' 
        
    },

})
export default Pending;