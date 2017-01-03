/**
 * Created by yb on 2016/10/25.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Navigator,
    TouchableOpacity,
    ture,
    DeviceEventEmitter,
   InteractionManager
} from 'react-native';

import DetailVC from './DetailVC.js'
import LoginVC  from './LoginVC.js'

export default class HomeVC extends Component{

   constructor(props){
       super(props);
       this.state = {
             name:'没改变的值'
       };
   }

_pressButton(){
    const {navigator} = this.props;//为什么这里可以取得 props.navigator?请看上文:
        //<Component {...route.params} navigator={navigator} />
        //这里传递了navigator作为props

 if(navigator)
  {navigator.push({
        name:'详情页',
        component:DetailVC,
        passProps:{'text':'我是一个传过来的值'}
        
    });
}    
  }

//在该方法中  接收通知
componentDidMount(){
   DeviceEventEmitter.addListener('string',(text)=>{
  this.setState({
      name:text
  })
   })
}

logInBtnAction(){

   const{navigator}=this.props;
   if(navigator){
       navigator.push({
          
            component:LoginVC,
            passProps:{'title':'登录界面'}

       })


   }

}

    render(){

        return(
 
            <View style={styles.containerStyle}>

    
    <View style = {styles.topViewStyle}>
                <Text style={styles.textStyle}>首页</Text>
               
      </View>
 


 <TouchableOpacity onPress={this._pressButton.bind(this) }>
   <Text style={styles.contentTextStyle}>点击跳转</Text>

   </TouchableOpacity>

    <View style={{backgroundColor:'yellow',height:60}}>
    <Text>{this.state.name}</Text>
    </View>

    <View>
    <TouchableOpacity onPress={this.logInBtnAction.bind(this)}>
    <Text style={styles.loginBtnStyle}>登录界面练习，点击进入</Text>
    </TouchableOpacity>
    </View>
            </View>
   

        );
    }
}
//创建样式
const styles = StyleSheet.create({
    containerStyle:{
        flex:1,
        backgroundColor:'red'
        
       
    },

     topViewStyle:{
     height:64,
     backgroundColor:'gray',
     justifyContent:'center',
     alignItems:'center'
    },

    contentTextStyle:{
  backgroundColor:'blue',
    fontSize:30,

    },
    textStyle:{
         
        fontSize:20,
        // fontWeight: 'bold',
        // justifyContent:'center',
        // alignItems:'center',

    },
    loginBtnStyle:
    {
    fontSize:20
    }
});

//类似于自定义组件(props是在父组件中指定，而且一经指定，在被指定的组件的生命周期中则不再改变)
 class Blink extends Component{
 constructor(props){
     super(props);
     this.state = {showText:ture};

 }
   
 // 每1000毫秒对showText状态做一次取反操作
//  setInterval(() => {
//      this.setState({showText:!this.state.showText});
//  },1000);

//    }

render(){
    let display = this.state.showText? this.props.text:'';
    return(
<Text>{display}</Text>

    );
    }
}


