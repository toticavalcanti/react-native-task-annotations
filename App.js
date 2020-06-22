import React from 'react';
import {Text, TextInput, View, Button } from 'react-native';

class App extends React.Component{
  state = {
    text: "",
    todo: []
  }
  addTodo = () => {
    let newTodo = this.state.text;
    let arr = this.state.todo;
    arr.push(newTodo);
    this.setState({todo: arr, text: ""});
  }

  deleteTodo = (t) => {
    let arr = this.state.todo;
    //position in array
    let pos = arr.indexOf(t);
    arr.splice(pos, 1);
    this.setState({todo: arr});
  }

  renderTodos = () => {
    return this.state.todo.map( t => {
      return (
        <Text 
          key = {t}
          onPress = { () => (this.deleteTodo(t))  }
        >{t}</Text>
      )
    })
  }

  render(){
    return(
    <View style = {styles.viewStyle}>
      <Text style = {styles.header} >Anotações de Tarefas</Text>
      <TextInput 
        style = {styles.inputStyle}
        onChangeText = {(text) => this.setState({text})}
        value = {this.state.text}
      />
      <Button 
        title = "Para fazer"
        color = "green"
        onPress = {this.addTodo}
      />
      {this.renderTodos()}
    </View>
    )
  }
}

const styles = {
  header: {
    fontSize: 30,
    color: 'green',
    fontWeight: 'bold',
  },

  viewStyle: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    margin: 10
  }, 

  inputStyle: {
    height: 40,
    width: 300,
    borderColor: "green",
    borderWidth: 1
  }
}

export default App;