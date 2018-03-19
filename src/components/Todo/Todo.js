import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import TodoStyle from './TodoStyle';

export default class Todo extends Component {
  render() {
    return (
      <View key={this.props.keyval} style={TodoStyle.note}>
        <Text style={TodoStyle.noteText}> {this.props.val.date} </Text>
        <Text style={TodoStyle.noteText}> {this.props.val.time} </Text>
        <Text style={TodoStyle.noteText}> {this.props.val.note} </Text>
        <TouchableOpacity style={TodoStyle.delete} onPress={this.props.deleteMethod}>
          <Text style={TodoStyle.delButtonText}> DEL </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

