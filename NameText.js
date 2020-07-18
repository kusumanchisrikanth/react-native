import React, {Component} from "react";
import {  Text , StyleSheet} from "react-native";


export default class NameText extends Component {
   render(){
   return<Text style={styles.textstyle}>{this.props.name}</Text>;
    }
}



const styles=StyleSheet.create({
   
    textstyle:{
        fontSize:18,
        backgroundColor:"white",
        borderRadius:5,   
        paddingHorizontal:5,
        paddingVertical:2,
        marginTop:1,
        color:"black",
        
    },
})