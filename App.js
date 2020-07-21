import React from 'react';
import { StyleSheet, Text, View , Image ,TouchableOpacity, Alert, Switch } from 'react-native';

export default class App extends React.Component {
   constructor(){
     super();
     this.state={
       ref:require("./src/images/dice1.png"),
     }
   }


getrandom =()=>{
  return Math.floor(Math.random()*6)+ 1
}

 game=()=>{
   var rnumber=this.getrandom();
   switch (rnumber) {
     case 1:
       this.setState({ref:require("./src/images/dice1.png")})
       break;
       case 2:
        this.setState({ref:require("./src/images/dice2.png")})
        break;
        case 3:
          this.setState({ref:require("./src/images/dice3.png")})
          break;
          case 4:
            this.setState({ref:require("./src/images/dice4.png")})
            break;
            case 5:
              this.setState({ref:require("./src/images/dice5.png")})
              break;
              case 6:
                this.setState({ref:require("./src/images/dice6.png")})
                break;
   
     default:
       break;
   }
 }
 render(){
  return (
    <View style={styles.container}>
       <Text style={{fontWeight:30}}>SRIKANTH</Text>
      <Image  source={this.state.ref}/>
      <TouchableOpacity onPress={this.game} > 
        <Text style={styles.play}>
          Play game
        </Text>
      </TouchableOpacity>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "hotpink",
    alignItems:"center",
    justifyContent: 'center', 
  },
   play:{
     marginTop:40,
     fontSize:30,
     fontWeight:"bold",
     borderWidth:2,
     color:"powderblue",
     borderColor:"powderblue",
     paddingVertical:5,
     paddingHorizontal:10,
     borderRadius:10
   }
});
