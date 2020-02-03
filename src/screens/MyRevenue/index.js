import React, { Component} from 'react';
import { Text, View, TouchableOpacity, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styles from './styles';
import {Header} from '../../components/Header';
export default class MyRevenue extends React.Component {
  render() {
    return (
     <View style={styles.container}>
      <View style={{backgroundColor:"#212121"}}> 
        <Header>MY REVENUE</Header>
      </View>
      <View style={styles.view1}>
        <View style={styles.imageview}>
            <ImageBackground source={require('../../assets/images/myrevenue1.png')} 
             style={{height:60,width:60}}/>
        </View>
        <TouchableOpacity activeOpacity={0.9} onPress={() =>
                this.props.navigation.navigate("TotalRevenuescreen")} style={{flex:1}}>
        <View style={{flexDirection:"row",flex: 1, justifyContent: 'space-between'}}>
          <View style={{padding:20}}>
            <Text style={{color:"#ffffff",fontSize:wp('5%'),fontFamily:"roboto"}}>Earning Till date</Text>
            <Text style={{color:"grey",fontSize:wp('4.5%'),fontFamily:"roboto"}}>2500 GFA</Text>
          </View>
          
          <View style={styles.icon}>
            <Icon name="keyboard-arrow-right" size={30} style={{color:"#00dfa7"}} />
          </View>
        </View>
        </TouchableOpacity>
      </View>
             
      <View style={styles.view2}>
        <View style={styles.imageview}>
          <ImageBackground source={require('../../assets/images/myrevenue2.png')} 
           style={{height:60,width:60}}/>
        </View>
        <TouchableOpacity activeOpacity={0.9} onPress={() =>
                this.props.navigation.navigate("TotalMonthRevenuescreen")} style={{flex:1}}>
        <View style={{flexDirection:"row",flex: 1, justifyContent: 'space-between'}}>
        <View style={{padding:20}}>
          <Text style={{color:"white",fontSize:wp('5%'),fontFamily:"roboto"}}>This Month's Earning</Text>
          <Text style={{color:"grey",fontSize:wp('5%'),fontFamily:"roboto"}}>250 GFA</Text>
        </View>
           <View style={styles.icon}>
          <Icon name="keyboard-arrow-right" size={30}  style={{color:"#00dfa7"}} />
        </View>
        </View>
        </TouchableOpacity>
      </View>    
    </View>
    );
  }
}
