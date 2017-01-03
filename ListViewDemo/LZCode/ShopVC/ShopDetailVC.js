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
    ListView,
    TouchableHighlight
} from 'react-native';

// import CustomCell from './CustomCell.js'

//获取屏幕高度
var Dimensions = require('Dimensions');
var height = Dimensions.get('window').height

export default class ShopDetailVC extends Component{

constructor(props){
    super(props);
//创建ListView
var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2})

    this.state = {
             dataSource:ds.cloneWithRows(['asdas','aassdasf','fewfwe','fweewf','efwewfe']),
    };


    //bind
    this._renderRow = this._renderRow.bind(this);
}

_PopAction(){
     const{navigator} = this.props;
     if(navigator){
         navigator.pop();
     }

}


_renderRow(rowData){
    return(
<TouchableHighlight onPress={()=> {
   
}}>
    <View style={{height:50}}>
        <Text>{rowData}</Text>
    </View>
</TouchableHighlight>
      );
   

}

//添加分割线
_renderSeparator(sectionID:number,rowID:number,adjacentRowHighlighted:bool){
    return(
        //key={`{sectionID}-${rowID}`}
        <View key={`{sectionID}-${rowID}`}
            style={{height:1,backgroundColor:'black'}}>
        </View>

    );

}
   
    render(){

        return(
<View>
        <View style={{backgroundColor:'green',height:64,justifyContent:'center',alignItems:'center'}}>
        <Text onPress = {this._PopAction.bind(this)}>点我返回</Text>
        </View>
        
         
</View>
        );
    }

}

//创建样式
const styles = StyleSheet.create({
    containerStyle:{
    //     backgroundColor:'red',
    //    justifyContent:'center',
    //    alignItems:'center'
    },
   
});

