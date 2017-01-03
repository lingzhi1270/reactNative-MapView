import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StatusBar, StyleSheet, Platform, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import _ from 'lodash';

const styles = StyleSheet.create({
  header: {
    height: Platform.OS === 'ios' ? 64 : 44,
    borderBottomWidth: 0.5,
    borderBottomColor: '#DDD',
    backgroundColor: '#DCDCDC' // "#F8F8F8"
  },
  navigationBar: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  },
  navigationBarButton: {
    marginRight: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50
  },
  navigationBarButtonText: {
    fontSize: 16,
    color: '#666'
        // paddingLeft:3
  },
  navigationBarTitle: {
        // height:20,
    marginVertical: Platform.OS === 'ios' ? 8 : 6,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigationBarTitleText: {
    fontSize: 16,
  }
});


class NavBar extends Component {
  static defaultProps = {
    leftButton: '返回'
  }
  constructor(props) {
    super(props);
    this._renderNavBar = this._renderNavBar.bind(this);
  }

  _renderNavBar() {
    const { title, leftButton, rightButton, onLeftButtonClick, onRightButtonClick } = this.props;
    let _title = (
      <View style={styles.navigationBarTitle}>
        {_.isString(title) ? <Text style={styles.navigationBarTitleText}>{title}</Text> :
          React.isValidElement(title) ? title : null}
      </View>
    );
    if (_.isFunction(title)) {
      _title = title();
    }

    let _leftButton = (
      <TouchableOpacity style={[styles.navigationBarButton, { marginLeft: 5 }]} onPress={onLeftButtonClick || (() => {})}>
        {_.isString(leftButton) ? <Text style={styles.navigationBarButtonText}><Icon name="chevron-left" size={25} /></Text> :
            React.isValidElement(leftButton) ? leftButton : null}
      </TouchableOpacity>
    );
    if (_.isFunction(leftButton)) {
      _leftButton = leftButton();
    }

    let _rightButton = (
      <TouchableOpacity style={[styles.navigationBarButton, { marginLeft: 5 }]} onPress={onRightButtonClick || (() => {})}>
        {_.isString(rightButton) ? <Text style={styles.navigationBarButtonText}>{rightButton}</Text> :
            React.isValidElement(rightButton) ? rightButton : null}
      </TouchableOpacity>
    );
    if (_.isFunction(rightButton)) {
      _rightButton = rightButton();
    }

    return (
      <View style={styles.navigationBar} name="navigationBar">
            {_leftButton}{_title}{_rightButton}
      </View>
    );
  }
  render() {
    return (
      <View style={styles.header}>
        {this._renderNavBar()}
      </View>
    );
  }
}

export default NavBar;
