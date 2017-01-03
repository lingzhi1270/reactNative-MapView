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
    ScrollView
} from 'react-native';


import MapView from './MapView'


export default class MineVC extends Component{

    static defaultProps={
        name:'111'
    }

    render(){

        return(
<ScrollView style={styles.containerStyle}>
            <View style={{backgroundColor:'black',height:64,justifyContent:'center',alignItems:'center'}}>
                <Text style={styles.textStyle} onPress={()=>this.Click('222')}>Home</Text>
            </View>
            
            <MapView style={{backgroundColor:'white',height:400}}/>

</ScrollView>
        );
    }

    Click = (name) =>{
        console.log(this.props.name)
    }

}


//创建样式
const styles = StyleSheet.create({
    containerStyle:{
        flex:1,
        backgroundColor:'yellow'
    },
    textStyle:{
        justifyContent:'center',
        color:'white',
        fontSize:20
    }
});


