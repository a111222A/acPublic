import React, { Component, useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button, ScrollView, TouchableHighlight, } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';

import DatePicker from 'react-native-date-picker'
import { TouchableOpacity } from 'react-native-gesture-handler';

const Register = ({ navigation }: { navigation: any }) => {



    const Register = () => {
        console.warn("registerSucess  method call");
        navigation.navigate('Login');
    }
    {/** **/ }
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'MR.', value: 'MR.' },
        { label: 'MIS.', value: 'MIS.' },
        { label: 'MS.', value: 'MS.' },
    ]);
    


    return (
        <View style={{ flex: 1, }}>
            <ScrollView>
            <Text style={{ fontSize: 20, color: 'black' }}>  Title:</Text>
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingHorizontal: 15,
                        margin: 10
                    }}>
                    <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        placeholder={'Choose '}
                        style={{ borderWidth: 2, borderColor: '#000', }}
                    />
                </View>


                <Text style={{ fontSize: 20, color: 'black' }}>  First name :</Text>
                <TextInput placeholder=' Enter Your Nane' style={style.InputBox} />

                <Text style={{ fontSize: 20, color: 'black' }}>  Last name :</Text>
                <TextInput placeholder=' Enter Your Nane' style={style.InputBox} />

                <Text style={{ fontSize: 20, color: 'black' }}>  Mobile Number :</Text>
                <TextInput placeholder=' Enter Your Mobile No' style={style.InputBox} />

                <Text style={{ fontSize: 20, color: 'black' }}>  Email ID :</Text>
                <TextInput placeholder=' Enter Your Email ID' style={style.InputBox} />

                <Text style={{ fontSize: 20, color: 'black' }}>  Gender :</Text>
                <View style={{flex:1,flexDirection:'row'}}>
                        <TouchableOpacity>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={style.radio}>
                                    <View style={style.fil}></View>
                                </View>
                                <Text style={style.text}>
                                    Male
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={style.radio}>
                                    <View style={style.fil}></View>
                                </View>
                                <Text style={style.text}>
                                    Female
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                <Text style={{ fontSize: 20, color: 'black' }}>  Address1 :</Text>
                <TextInput placeholder=' Enter Your Address1' style={style.InputBox} />

                <Text style={{ fontSize: 20, color: 'black' }}>  Address2 :</Text>
                <TextInput placeholder=' Enter Your Address2' style={style.InputBox} />


                <Text style={{ fontSize: 20, color: 'black' }}>  Password :</Text>
                <TextInput placeholder='Enter Password ' secureTextEntry={true} style={style.InputBox} />

                <Text style={{ fontSize: 20, color: 'black' }}>  Confrim Password :</Text>
                <TextInput placeholder='Enter confirm Password ' secureTextEntry={true} style={style.InputBox} />

                <View style={{ margin: 6 }}>
                    <TouchableHighlight onPress={() => Register()}>
                        <Text style={style.Button}>SingUp</Text>
                    </TouchableHighlight>
                </View >
                {/*ihh*/} 
                
                   
               
            </ScrollView>
        </View>
    )

}
const style = StyleSheet.create({
    InputBox: {
        borderColor: 'black',
        color: 'black',
        borderWidth: 2,
        fontSize: 20,
        margin: 10,
    },
    Button: {
        backgroundColor: "#008080",
        color: "#ffffff",
        fontSize: 24,
        textAlign: 'center',
        padding: 10,
        margin: 10,
        borderRadius: 30,
        marginLeft: 30,
        marginRight: 30,
        shadowColor: "black",
        elevation: 10,
        shadowOpacity: 1
    },
    radio: {
        height: 40,
        width: 40,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 20
    },
    text: {
        fontSize: 20,
        margin: 10,
        color:'#000'
    },
    fil: {
        width: 32,
        height: 32,
        backgroundColor: '#000',
        borderRadius: 20,
        margin: 2


    }
})

export default Register;
