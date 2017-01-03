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
  Navigator
} from 'react-native';


//导入TabNavigator
import TabNavigator from 'react-native-tab-navigator';

//导入四个模块
import HomeVC from './HomeVC/HomeVC.js';
import ShopVC from './ShopVC/ShopVC.js';
import MallVC from './MallVC/MallVC.js';
import MineVC from './MineVC/MineVC.js';

// var Home = require('./LZCode/Main/Main');
// var Shop = require('./LZCode/Shop/Shop');
// var Mall = require('./LZCode/Mall/Mall');
// var Mine = require('./LZCode/Mine/Mine');

const HOME_NORMAL = require('../image/home_bottom_icon_house_46x46@2x.png');  
const HOME_FOCUS = require('../image/home_bottom_icon_house_46x46_press@2x.png');  
  

const MALL_NORMAL = require('../image/home_bottom_icon_buy_46x46@2x.png');  
const MALL_FOCUS = require('../image/home_bottom_icon_buy_46x46_press@2x.png');  
  

const SHOP_NORMAL = require('../image/home_bottom_icon_mall_46x46@2x.png');  
const SHOP_FOCUS = require('../image/home_bottom_icon_mall_46x46_press@2x.png');  
   
  

const MINE_NORMAL = require('../image/home_bottom_icon_member_46x46@2x.png');  
const MINE_FOCUS = require('../image/home_bottom_icon_member_46x46_press@2x.png');  

let tabBarHeight = 56;
export default class AppMain extends Component {
 
 constructor(props){
   super(props);
   this.state = {
    selectedTab:'Home',
   };
 }

  render() {
    return(
      <TabNavigator>

 <TabNavigator.Item
      title='首页'
      selected = {this.state.selectedTab === 'Home'}
      renderIcon = {()=><Image style = {styles.tabIcon} source={HOME_NORMAL}/>}
      renderSelectedIcon = {() => <Image style = {styles.tabIcon} source= {HOME_FOCUS}/>}
      onPress = {()=> this.setState({selectedTab:'Home'})} >
<HomeVC {...this.props}/>

 </TabNavigator.Item>
 
 
 <TabNavigator.Item
      title='购物'
      selected = {this.state.selectedTab === 'Shop'}
      renderIcon = {()=><Image style = {styles.tabIcon} source={MALL_NORMAL}/>}
      renderSelectedIcon = {() => <Image style = {styles.tabIcon} source= {MALL_FOCUS}/>}
      onPress = {()=> this.setState({selectedTab:'Shop'})} >
  
   <ShopVC {...this.props}/>

 </TabNavigator.Item>

 <TabNavigator.Item
      title = '云豆'
      selected = {this.state.selectedTab === 'Mall'}
      renderIcon = {()=><Image style = {styles.tabIcon} source={SHOP_NORMAL}/>}
      renderSelectedIcon = {() => <Image style = {styles.tabIcon} source= {SHOP_FOCUS}/>}
      onPress = {()=> this.setState({selectedTab:'Mall'})} >
    <MallVC {...this.props}/>
   
 </TabNavigator.Item>


 <TabNavigator.Item
      title='我的'
      selected = {this.state.selectedTab === 'Mine'}
      renderIcon = {()=><Image style = {styles.tabIcon} source={MINE_NORMAL}/>}
      renderSelectedIcon = {() => <Image style = {styles.tabIcon} source= {MINE_FOCUS}/>}
      onPress = {()=> this.setState({selectedTab:'Mine'})} >

<MineVC {...this.props}/>
 </TabNavigator.Item>

 </TabNavigator>

    );
  }
}

const styles = StyleSheet.create({

  tabIcon:{
width:30,
height:30,
resizeMode:'stretch',
marginTop:10
  },
  tab:{
height:52,
backgroundColor:'#303030',
alignItems:'center'
  }

});
