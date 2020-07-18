import React from "react";
import { View , Text , StyleSheet,Image} from "react-native";
import NameText from "./src/components/NameText";

export default class App extends React.Component{

    render(){
       return( 

       <View style={styles.container}>
           <Image source={{uri : "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}}
           style={{height:300 , width:400}}
           />
        <Image source={ require("./src/images/email.png")} />
        <NameText name="Srikanth"/>
       
    </View>
    
    
    );
    }
}



const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"powderblue",
        alignItems:"center",
        
        justifyContent:"center"
    },
   
})