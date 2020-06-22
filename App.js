import React from 'react';
import {Text, TextInput, View, Button } from 'react-native';

class App extends React.Component{
  render(){
    return(
    <View style = {style.viewStyle}>
      <Text>Olá native!!!</Text>
      <TextInput 
        style = {style.inputStyle}
      />
      <Button 
        title = "Texto do botao"
      />
    </View>
    )
  }
}

const style = {
  viewStyle: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  }, 

  inputStyle: {
    height: 40,
    width: 300,
    borderColor: "green",
    borderWidth: 1
  }
}

export default App;