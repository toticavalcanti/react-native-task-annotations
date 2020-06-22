import React from 'react';
import {Text, TextInput, View, Button } from 'react-native';

class App extends React.Component{
  state = {
    text: "Essa é a mensagem na tela",
    todo: ""
  }
  addTodo = () => {
    this.setState({todo: this.state.text})
  }

  render(){
    return(
    <View style = {style.viewStyle}>
      <Text>Olá native!!!</Text>
      <TextInput 
        style = {style.inputStyle}
        onChangeText = {(text) => this.setState({text})}
      />
      <Button 
        title = "Meu botão"
        color = "green"
        onPress = {this.addTodo}
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