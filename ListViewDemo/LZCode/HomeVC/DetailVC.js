/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Navigator,
  ScrollView,
  DeviceEventEmitter
} from 'react-native';


import HomeVC from './HomeVC.js'
export default class DetailVC extends Component {

//如果不初始化state就不需要写
// constructor(props){
// super(props);
// this.state = {

// };

// }

_pressButton(){

const {navigator} = this.props;
if(navigator){

    DeviceEventEmitter.emit('string',' 哎呦，我变了哦');
    navigator.pop();
}
}

  render() {
    return (
       
        <View   style={{backgroundColor:'red',flex:1}}>
        <View style= {styles.container}>

                <TouchableOpacity onPress={this._pressButton.bind(this)}>
                    <Text style={{fontSize:30}}>点我跳回去</Text>
                </TouchableOpacity>
    </View>
        <ScrollView style={{backgroundColor:'black'}}>
        

        <View style = {{backgroundColor:'yellow',height:60}}>
        
        <Text>{this.props.text}</Text>
         <Text style = {{backgroundColor:'red',marginTop:5}}>我是下一行文字</Text>
        </View>

            
      <View> 
      
      <Text style = {{backgroundColor:'gray',height:100,marginTop:15}}>
      你好，世界
      </Text>
        </View>

       </ScrollView>
      </View>
    )

    }
}

const styles = StyleSheet.create({
container:{
   height:64,
   backgroundColor:'green',

   
}


})