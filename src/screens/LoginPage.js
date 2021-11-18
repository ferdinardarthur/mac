import React from "react";
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import {Text, StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
const LoginPage = ({navigation})=>{

    function navigate(){
        navigation.navigate("SignUpPage");
    
    }
    return(
        <View>
           <View style={styles.BottomView}>
               <Text style={styles.Heading}>
                   Welcome to{"\n"}
                   Shop for Macs
               </Text>
               <View style={styles.FormView}>   
                  <TextInput placeholder={"Email Address"} placeholderTextColor={"grey"} style={styles.TextInput}/>
                  <TextInput placeholder={" Password"} secureTextEntry={true} placeholderTextColor={"grey"} style={styles.TextInput}/>
                  <TouchableOpacity style={styles.Button} onPress= {() => {navigation.navigate("HomePage");}}> 
                      <Text style={styles.ButtonText}>Login</Text>
                  </TouchableOpacity>

                  <TouchableOpacity >
                    <View style={styles.icons}> 
                  <FontAwesome name="facebook-square" size={24} color="blue" />
                      <Text style={styles.FacebookText}> Sign in with Facebook</Text>
                      </View>
                  </TouchableOpacity>

                  <TouchableOpacity >
                    <View style={styles.icons}> 
                    <Entypo name="google--with-circle" size={24} color="orange" />
                      <Text style={styles.GoogleText}> Sign in with Google</Text>
                      </View>
                  </TouchableOpacity>

               </View>
             
           </View>
        </View>




    ) 
}

const styles = StyleSheet.create({
    BottomView:{
        width:"100%",
        height:"100%",
        backgroundColor: "white",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor:"black"
        
    },

    Heading:{
      color:"grey",  
      fontSize: 40,
      fontWeight: "bold",
      marginLeft: 30,
      marginTop: 60,
    
    },
    FormView:{
        width:"100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,
        backgroundColor:"black"
        
    },

    TextInput:{
        width: "90%",
        borderWidth: 1,
        borderColor: "grey",
        height: 52,
        borderRadius: 10,
        paddingLeft: 5,
        marginTop: 20,
        
    },
    Button:{
        width:"90%",
        color: "black",
        height: 52,
        backgroundColor: "grey",
        borderRadius: 10,
        marginTop: 30,
        display: "flex",
        justifyContent:"center",
        alignItems: "center",
    },
    ButtonText:{
        fontWeight: "bold",
        fontSize: 18,
        color: "black",
    },

    QuestionText:{
            color: "grey",
            textAlign: "center", 
            fontWeight: "bold",
            fontSize: 14,
            
    },

    SignUpText:{
        color: "grey",
        fontWeight: "bold"
    },
    TextButton:{
        width: "100%",
        display: "flex",
        alignItems: "center",
        marginTop: 20
    },
    icons:{
        width: "60%",
        height: 35,
        borderWidth: 1,
        borderRadius:20,
        marginTop: 30,
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
        paddingHorizontal: "9%",
        borderColor:"white"
    
    },
    FacebookText:{
        color:"white"
    },
    GoogleText:{
        color:"white",
    }

})

export default LoginPage