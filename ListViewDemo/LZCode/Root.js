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
  Navigator,
  StatusBar,
  Platform
} from 'react-native';


import AppMain from './AppMain.js'
import{naviGoBack} from './CommonUtils.js'

export const STATUS_BAR_HEIGHT = (Platform.OS === 'ios' ? 20 : 25);


let _navigator;
export default class Root extends Component {

constructor(props){
    super(props);
    this.renderScene = this.renderScene.bind(this);
    this.goBack = this.goBack.bind(this);
}

 

render(){
return(

<View style={{flex:1}}>
     <StatusBar barStyle='light-content'
          style={{height:STATUS_BAR_HEIGHT}}
       />

    <Navigator
         style={styles.navigator}
         initialRoute={{
   component:AppMain,
   name:'AppMain'

         }}
         configureScene={this.configureScene}
         renderScene = {this.renderScene}
    />
</View>
   );
}

configureScene(route, routeStack) {
    return Navigator.SceneConfigs.PushFromRight;
  }

renderScene(route,navigator){
    const Component = route.component;
    _navigator = navigator;
    return(
        <Component navigator={navigator} route={route} {...route.passProps} />
    );
}

goBack(){
    return naviGoBack(_navigator);
}

}


const styles = StyleSheet.create({
  navigator:{
 flex:1
  }

});