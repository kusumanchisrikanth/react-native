
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput,TouchableOpacity,onPress, Alert,TouchableWithoutFeedback, Keyboard } from 'react-native';

const currencys={
  DOLLAR : 0.014, 
  EURO : 0.012,
  POUND : 0.011,
  YEN : 1.54,
  BITCOIN: 0.0000041,
  RUBEL : 0.93,
  AUSDOLLAR : 0.2,
  CANDOLLAR : 0.019,
  DINAR : 0.0043,
}

export default class  App extends React.Component {
  


constructor(props){
  super(props);
  this.state={
     input:"",
     result:0
  }
  
}
buttonpressed=(currency)=>{
  if(this.state.input===""){
    Alert.alert("Enter a number")
  }
   let resultvalue=parseFloat(this.state.input)*currencys[currency] 
    this.setState({result : resultvalue.toFixed(2)})
 }


 render(){
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <SafeAreaView style={styles.container}>
    <View style={styles.mainview}>
  <Text style={styles.resultstyle}>{this.state.result}</Text>
  <TextInput 
  style={styles.inputstyle}
  placeholder="Enter value in rupees"
  keyboardType="numeric"
  selectionColor="white"
  value ={this.setState.input}
  onChangeText={input=>this.setState({input})}
  />
  <View style={styles.viewonestyle}>
  <TouchableOpacity 
   onPress={()=>
    this.buttonpressed("DOLLAR")
  }
  style={styles.buttonstyle}>
  <Text style={styles.textone}>
    DOLLAR
</Text>
</TouchableOpacity>
<TouchableOpacity 
   onPress={()=>
    this.buttonpressed(" POUND")
  }
  style={styles.buttonstyle}>
  <Text style={styles.textone}>
    POUND
</Text>
</TouchableOpacity>
<TouchableOpacity 
   onPress={()=>
    this.buttonpressed("YEN")
  }
  style={styles.buttonstyle}>
  <Text style={styles.textone}>
    YEN
</Text>
</TouchableOpacity>
<TouchableOpacity 
   onPress={()=>
    this.buttonpressed(" BITCOIN")
  }
  style={styles.buttonstyle}>
  <Text style={styles.textone}>
    BITCOIN
</Text>
</TouchableOpacity>
<TouchableOpacity 
   onPress={()=>
    this.buttonpressed("RUBEL")
  }
  style={styles.buttonstyle}>
  <Text style={styles.textone}>
    RUBEL
</Text>
</TouchableOpacity>
<TouchableOpacity 
   onPress={()=>
    this.buttonpressed("AUSDOLLAR")
  }
  style={styles.buttonstyle}>
  <Text style={styles.textone}>
    AUSDOLLAR
</Text>
</TouchableOpacity>
<TouchableOpacity 
   onPress={()=>
    this.buttonpressed("CANDOLLAR")
  }
  style={styles.buttonstyle}>
  <Text style={styles.textone}>
    CANDOLLAR
</Text>
</TouchableOpacity>
<TouchableOpacity 
   onPress={()=>
    this.buttonpressed(" DINAR")
  }
  style={styles.buttonstyle}>
  <Text style={styles.textone}>
    DINAR
</Text>
</TouchableOpacity>
<TouchableOpacity 
   onPress={()=>
    this.buttonpressed("EURO")
  }
  style={styles.buttonstyle}>
  <Text style={styles.textone}>
    EURO
</Text>
</TouchableOpacity>
  </View>
    </View>
    </SafeAreaView>
    </TouchableWithoutFeedback>
  );
 
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    
  },
  mainview:{
    flex:1,
   
  },
  resultstyle:{
    backgroundColor:"steelblue",
    fontSize:30,
    fontWeight:"bold",
    color:"white",
    textAlign:"center",
    justifyContent:"center",
    borderWidth:2,
    borderColor:"white",
    marginTop:30
  },
  inputstyle:{
     backgroundColor:"steelblue",
     marginTop:10,
     fontSize:25,
     color:"white",
     textAlign:"center",
     justifyContent:"center",
     borderWidth:2,
    borderColor:"white"
     
  },
  viewonestyle:{
   
    marginTop:10,
    height:100,
    flexDirection:"row",
    flexWrap:"wrap"
  },
  buttonstyle:{
    height:100,
    width:"33.3%",
    backgroundColor:"steelblue",
    alignItems:"center",
    justifyContent:"center",
    borderWidth:2,
    borderColor:"white"
  },
  textone:{
    color:"white",
    justifyContent:"center",
    alignItems:"center",
    textAlign:"center",
    fontSize:17,

  }
});
