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

import {MapView, MapTypes, MapModule, Geolocation} from 'react-native-baidu-map'

export default class MineVC extends Component{

    constructor(props)
    {
        super(props);
        this.state = {
           
        }
    }

    render(){

        return(
        
            <View>
          <View style={{height:64,backgroundColor:'blue',alignItems:'center',justifyContent:'center'}}><Text>百度地图</Text></View>

         <View>
          <MapView style={{backgroundColor:'red',height:300}}
                    center={{latitude:32.00650, longitude: 118.74800}}
                    marker={{latitude:32.01300, longitude: 118.75400, title: '雨润云中央'}}
                    MapTypes={2}
          />
          </View>
            </View>

        );
    }

    Click = (name) =>{
        console.log(this.props.name)
    }

}


//创建样式
const styles = StyleSheet.create({
 
    textStyle:{
        justifyContent:'center'
    }
});


