import React from 'react';
import {Text, TextInput, View, Button } from 'react-native';

class App extends React.Component{
  state = {
    text: "Essa é a mensagem na tela",
    todo: ["Aprendendo React", "Aprendendo React Native", "Construindo Apps"]
  }
  addTodo = () => {
    this.setState({todo: this.state.text})
  }

  renderTodos = () => {
    return this.state.todo.map( t => {
      return (
        <Text key = {t}>{t}</Text>
      )
    })
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
      {this.renderTodos()}
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