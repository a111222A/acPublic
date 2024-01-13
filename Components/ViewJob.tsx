
import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, ScrollView, Modal, Pressable, TextInput,FlatList } from 'react-native';
import { BASEURL } from '../Components/Constant';
type job ={
"id":string,
"name":string,
"address":string,
"phone":string,
"job_id":string,
"remark":string
};

const ViewJob = ({ navigation,route }: { navigation: any } ) => {
    const [data, setData] = useState<job[]>([]);
    const { jobData } = route.params;
    const jobTypeName = jobData.jobTypeName;
    const login_id = jobData.id;
    const type_id = jobData.jobTypId;
    //console.warn(jobData);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(BASEURL + '/customerJobDetailsByTypeId',{
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        id: login_id,
                        type_id: type_id,
                        user_type:"customer"
                      }),
                });
                const result = await response.json();
                if (result.success) {
                    setData(result.data);
                  } else {
                    console.error('API request failed:', result);
                  }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
            
        }
        fetchData();
    },[])
    
    const Home = () => {
        navigation.navigate('Home');
    }
    const Profile = () => {
        navigation.navigate('Profile');
    }
    const Task = () => {
        navigation.navigate('Task');
    }
    const Logout = () => {
        navigation.navigate('Login');
    }

    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={{ flex: 1, }}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={style.centeredView}>
                    <View style={style.modalView}>
                        <Text style={style.modalText}>Job ID : JYOTI_0987</Text>
                        <Text style={style.Declaration}>Declaration : Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, pariatur expedita itaque eum saepe cumque.</Text>
                        <Text></Text>
                        <Text style={style.Declaration}>Technician Name : Raju Ghosh</Text>
                        <Text style={style.Declaration}>Assisn Date : 20/12/2023</Text>
                        <Text style={style.Status}>Status : Pending</Text>
                        <Pressable
                            style={[style.button, style.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={style.textStyle}>OK</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <TextInput style={style.Search}
        placeholder="Search..."

      />
            <View style={style.main}>
                <ScrollView>
                    {data.length?
                    <FlatList data={data} renderItem={({item})=>
                    <View style={style.Box1}>
                        <View style={style.EXIMPOTEA}>
                            <Text style={style.EXIMPOTEA}> EXIMPOTEA LIMTED</Text>
                            <Text style={style.EXIMPOTEA1} onPress={() => setModalVisible(true)}>                            Job ID : JYOTI_45677</Text>
                        </View>
                        <View style={{flexDirection:'row',marginLeft:20}}>
                        <Text style={{color:'#000',fontWeight:'bold'}}>Mobile :</Text>
                        <Text style={{color:'#000',}}>{item.phone}</Text>
                        </View>
                        <Text style={{color:'#000',fontWeight:'bold',marginLeft:20}}>Address : </Text>
                        <Text style={{color:'#000',marginLeft:20}}>{item.address}</Text>
                        <View style={style.Remak}>
                            <Text style={{ color: '#000000', padding: 16,fontWeight: 'bold'}}> Remak : </Text>
                            <Text style={{ color: '#000000', padding: 16,}}>{item.remark}</Text>
                        </View>
                    </View>

                }
                    ></FlatList>
                    :<Text>No Data Found.</Text>}
                </ScrollView>

            </View>
        </View>
    )
}
const style = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: 'column',
        marginRight: 1,
        backgroundColor: '#edf4f7'
    },
    Box1: {
        flex: 1,
        backgroundColor: "#ffffff",
        margin: 20,
        marginLeft: 5,
        marginRight: 5,
        shadowColor: "black",
        elevation: 10,
        shadowOpacity: 10,
        height: 150,
        width: 400,
    },
    EXIMPOTEA: {
        flexDirection: 'row',
        color: '#000000',
        margin: 5,
        fontSize: 14,
        fontWeight: 'bold'
    },
    EXIMPOTEA1: {
        flexDirection: 'row',
        color: '#1b7a17',
        margin: 5,
        fontSize: 14,
        fontWeight: 'bold',
        
    },
    mobile: {
        color: '#000000',
        padding: 5,
        fontWeight: 'bold'
    },
    Address: {
        color: '#000',
        margin: 3,
        padding: 5,
        fontWeight: 'bold',
    },
    Remak: {
        backgroundColor: '#c1c2c0',
        height: 60,
        flexDirection:'row'

    },

    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        color: '#000',
        fontSize: 25,
        fontWeight: 'bold',
        
        
    },
    Declaration: {
        color: '#000000',
        margin: 4
    },
    Status: {
        color: '#000000',
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10

    },
    futter: {
        textAlign: 'center',
        color: '#ffffff',
        padding: 8,
    },
    bnt: {
        flex: 1,
        backgroundColor: '#008080',
        borderRadius: 5,
        margin: 3
    },Search:{
        borderWidth:1,
      margin:10,
      borderRadius:30,
      color:'#000',
      fontSize:20,
    
    },

})
export default ViewJob;