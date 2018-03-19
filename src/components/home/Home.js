import React, { Component } from 'react';
import{
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import HomeStyle from './HomeStyle';

import Todo from '../Todo/Todo';

export default class Home extends Component {

  state = {
    noteArray: [],
    noteText: "",
  }

  render() {

    let todos = this.state.noteArray.map( (val, key) => {
      return <Todo key={key} keyval={key} val={val} deleteMethod= {() => this.deleteTodo(key)} />
    });

    return (
      <View style={HomeStyle.container}>

        {/* HEADER STARTS */}
        <View style={HomeStyle.header}>
          <Text style={HomeStyle.headerText}>TODO APP</Text>
        </View>
        {/* HEADER END */}

        {/* CONTENT */}
        <ScrollView style={HomeStyle.scrolContainer}>
          {todos}
        </ScrollView>
        {/* CONTENT */}

        {/* FOOTER STARTS */}
        <View style={HomeStyle.footer}>
          <TouchableOpacity onPress={this.addTodo.bind(this)} style={HomeStyle.addButton}>
            <Text style={HomeStyle.addButtonText}> + </Text>
          </TouchableOpacity>
          <TextInput style={HomeStyle.inputField} 
            onChangeText={ (text) => { this.setState({noteText: text}) } }
            value={this.state.noteText}
            placeholder="Add todo" placeholderTextColor="white" underlineColorAndroid="transparent"
          />
        </View>
        {/* FOOTER END */}

      </View>
    );
  }

  addTodo() {
    if(this.state.noteText){
      var d = new Date();
      this.state.noteArray.push({
        'date': "Date: " + d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear(),
        'time': "Time: " + d.getHours()+ "-" + d.getMinutes() +  "-" + d.getSeconds(),
        'note': "Todo: " + this.state.noteText
      });
      this.setState({ noteArray: this.state.noteArray });
      this.setState({ noteText: '' }); 
    } else{
      alert("Make sure that your note is not empty.");
    }
  }

  deleteTodo(key) {
    this.state.noteArray.splice(key, 1);
    this.setState({ noteArray: this.state.noteArray })
  }

}

