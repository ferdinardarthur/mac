import React from 'react';
import { View, Text, Image, Pressable,TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 


const WelcomePage = ({navigation}) => {
  return (
    <View 
    style={{ 
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center",
        backgroundColor: "black",
        }}
        >
        <Image 
        style={{
            width: 200,
            height: 200,
            borderRadius: 20,
            marginBottom:50,
            transform: [{rotate: "30 deg"}],
        }}    
         source={{ uri: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2020&q=80"}}
    />
    <Text style={{color: "grey", fontSize: 24}}>Welcome to</Text>
    <Text style={{color: "white", fontSize: 30, fontWeight: '600'}}>Shop for Macs </Text>
    <Pressable
    android_ripple
    onPress={()=>{
        navigation.navigate("HomePage")
    }}
        style={{
            backgroundColor: "grey",
            borderRadius: 10,
            flexDirection:"row",
            alignItems: "center",
            padding: 10, 
            paddingHorizontal:60,
            marginTop:20,
        }}
    >
       <AntDesign name="google" size={24} color="rgb(256, 100,10)" />
        <Text style={{ fontSize: 20,marginLeft: 15}}>Login with Gmail</Text>
    </Pressable>
    <TouchableOpacity
     onPress={()=> {
        navigation.navigate("LoginPage")
     }}
        activeOpacity={0.8}
        style={{
            backgroundColor: "grey",
            borderRadius: 10,
            flexDirection: "row",
            alignItems: "center",
            padding: 10, 
            paddingHorizontal:60,
            marginTop:20,
        }}
    >
        <AntDesign name="apple1" size={24} color="white" />
        <Text style={{ fontSize: 20, color: "white",marginLeft: 10}}>Login with Apple</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress= {() => {navigation.navigate("SignUpPage"); }}>
    <Text style={{marginTop: 10, fontWeight: '500', color :'grey'}}>
        Not a member? {""}
        <Text style={{color:'orange',fontWeight: 'bold'}}> Signup </ Text>
    </Text>
    </TouchableOpacity>
    </View>
    )
}
export default WelcomePage