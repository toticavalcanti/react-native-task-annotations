import React from 'react';
import {Text, TextInput, View, Button } from 'react-native';

class App extends React.Component{
  state = {
    todo: "Essa é a mensagem na tela"
  }
  render(){
    return(
    <View style = {style.viewStyle}>
      <Text>Olá native!!!</Text>
      <TextInput 
        style = {style.inputStyle}
        onChangeText = {(text) => this.setState({todo: text})}
      />
      <Button 
        title = "Meu botão"
        color = "green"
      />
      <Text>{this.state.todo}</Text>
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