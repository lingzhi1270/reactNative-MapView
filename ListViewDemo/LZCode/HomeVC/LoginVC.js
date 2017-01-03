/**
 * Created by yb on 2016/10/25.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';


import NavigationBar from 'react-native-navbar';

var Dimensions = require('Dimensions');
var screenWidth = Dimensions.get('window').width;


export default class LoginVC extends Component{

   //返回按钮
     _goBack(){
    const{navigator} = this.props;
    if(navigator){
        navigator.pop();
    }
     }

    render(){

   const rightButtonConfig={
       title:'下一页',
       handler:() => alert('hello!'),
   }

    const leftButtonConfig={
     title:'返回',
     handler:()=>{}
     
}


   const titleConfig = {

        title:'登录界面',
        tintColor:'white'
   }

        return(

            <View style={{flex:1}}>
         <NavigationBar 
         

         tintColor='blue'
         title={titleConfig}
         rightButton={rightButtonConfig}
         leftButton={leftButtonConfig}
         
         />

          </View>
        );
    }
}


//创建样式
// const styles = StyleSheet.create({
//     containerStyle:{
//         flex:1,
//         backgroundColor:'white'
//     },

//     topViewStyle:
//     {
//       height:64,
//     flexDirection:'row',
//     //  justifyContent:'center',
//      alignItems:'center',
//      backgroundColor:'blue'
//     }
// });

