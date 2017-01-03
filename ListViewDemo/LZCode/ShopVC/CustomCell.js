import Rect from 'react';
import{ 
     View,
    Text,
    StyleSheet,
    TouchableHighlight
}
 from 'react-native';

 export default class CustomCell extends Component{

    constructor(props){
      super(props);
      this.state = {

      };
    }

   render(){

  return(
      <View>
      <TouchableHighlight>
        <View style={styles.rowStyle}>
        <Text style={styles.textStyle}>{this.props.rowData}</Text>
        </View>

      </TouchableHighlight>
      
      </View>

  )

   }
 }

 const styles = StyleSheet.create({
     rowStyle:{
     flexDirection: 'row',
     justifyContent: 'center',
     padding: 10,
     backgroundColor: '#F6F6F6', 
     },
     textStyle:{
         flex:1
     }
 })