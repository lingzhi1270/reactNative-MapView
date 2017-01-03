/**
 * Created by yb on 2016/10/25.
 */
import React, { Component,PropTypes } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';


// var {requireNativeComponent} = require('react-native');
// requireNativeComponent 自动把这个组件提供给 "RCTMapManager"
// module.exports = requireNativeComponent('RCTMap',MapView);



import {requireNativeComponent} from 'react-native';
var RCTMap = requireNativeComponent('RCTMap',MapView)

export default class MapView extends Component{


constructor(){
super();
    this._onChange = this._onChange.bind(this);
}

_onChange(event:Event){
    if(!this.props.onRegionChange){
        return;
    }
    this.props.onRegionChange(event.nativeEvent.region);
}
    

    render(){
         var region = {
      latitude: 32.00650,
      longitude: 118.74800,
      latitudeDelta: 0.02,
      longitudeDelta: 0.02,
    };
        return <RCTMap {...this.props} onchange ={this._onChange} region={region}/>
    }

}
MapView.PropTypes={
 /**
   * Callback that is called continuously when the user is dragging the map.
   */
onRegionChange: React.PropTypes.func,

}



//     static propTypes ={

//     /**
//     * 当这个属性被设置为true，并且地图上绑定了一个有效的可视区域的情况下，
//     * 可以通过捏放操作来改变摄像头的偏转角度。
//     * 当这个属性被设置成false时，摄像头的角度会被忽略，地图会一直显示为俯视状态。
//     */
//  pitchEnabled: PropTypes.bool,

//   /**
//    * 地图要显示的区域。
//    *
//    * 区域由中心点坐标和区域范围坐标来定义。
//    * 
//    */
//   region:React.propTypes.shape({

//       /**
//        * 地图的中心点坐标
//        * 
//        */
//       latitude:React.PropTypes.number.isRequired,
//       longitude:React.PropTypes.number.isRequired,


//      /**
//      * 最小/最大经、纬度间的距离。
//      */
//     latitudeDelta: React.PropTypes.number.isRequired,
//     longitudeDelta: React.PropTypes.number.isRequired,

//   })

//     }

//     render(){
//  var region = {
//       latitude: 37.48,
//       longitude: -122.16,
//       latitudeDelta: 0.1,
//       longitudeDelta: 0.1,
//     };
//         return <RCTMap region={region}/>  

// }





