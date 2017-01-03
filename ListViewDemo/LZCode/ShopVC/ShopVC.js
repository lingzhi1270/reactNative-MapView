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
  Image,
  Navigator,
  TouchableOpacity
} from 'react-native';


import ShopDetailVC from './ShopDetailVC.js'


export default class ShopVC extends Component {

constructor(props)
{
  super(props);
  this.state = {

  };
}

_TapAction(){
const{navigator} = this.props;
if(navigator){
  navigator.push({
   title:'购物列表',
   component:ShopDetailVC
  })
}

}




  render() {
    return (
      <View style={styles.container}>
       
<Text style = {styles.contentTextStyle}>购物界面</Text>

<Text style={{color:'blue',fontSize:14}}
            onPress={this._TapAction.bind(this)}>
点击跳转
</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  contentTextStyle:{

fontSize:20,
color:'red'
  }
 
});