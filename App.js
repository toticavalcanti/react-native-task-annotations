import React from 'react';
import {Text, TextInput, View, Button, TouchableOpacity } from 'react-native';

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
        <TouchableOpacity key = {t}>
        <Text 
          style = {styles.todo}
          onPress = { () => (this.deleteTodo(t))  }
        >{t}</Text>
        </TouchableOpacity>
      )
    })
  }

  render(){
    return(
      <View style = {styles.wholeStyle}>
        <View style = {styles.viewStyle}>
          <Text style = {styles.header} >Tarefas</Text>
          <TextInput 
            style = {styles.inputStyle}
            onChangeText = {(text) => this.setState({text})}
            value = {this.state.text}
          />
          <Button 
            title = "Adicionar tarefa"
            color = "0288D1"
            onPress = {this.addTodo}
          />
          {this.renderTodos()}
        </View>
      </View>
    )
  }
}

const styles = {
  wholeStyle: {
    backgroundColor: "#0288D1",
    flex: 1
  },

  header: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },

  viewStyle: {
    marginTop: 30,
    alignItems: 'center', 
    justifyContent: 'center',
    margin: 10,
  }, 

  inputStyle: {
    height: 40,
    width: 300,
    borderColor: "white",
    borderWidth: 1,
    color: 'white'
  },

  todo: {
    fontSize: 24,
    color: "white"
  }
}

export default App;