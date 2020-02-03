import React, { Component } from "react";
import {  View,ScrollView,TouchableOpacity,Text} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styles from './styles';
import {Header} from '../../components/Header';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationActions } from 'react-navigation';
export default class TotalRevenue extends Component {
constructor(props) {
    super(props);
    this.state = {
    loading: true,
      
    };
   }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headstyle}>
              <TouchableOpacity onPress={() =>
              this.props.navigation.dispatch(NavigationActions.back())}>
              <Icon name='arrow-back'color={'white'} size={25} style={{padding:5}}/></TouchableOpacity>
            <Text style={styles.heading}>Total Revenue</Text>
         </View>
        <ScrollView>
            <TouchableOpacity 
          style={styles.next_button}
          //  onPress={() =>
          //   this.props.navigation.navigate("LoginOtpscreen")}
          activeOpacity={1.9}
        >
          <Text style={styles.next_button_text}> Total Amount = 580000 INR </Text>
        </TouchableOpacity> 
          <View style={styles.cardstyle1}>
            <View style={{ backgroundColor: "#424242", padding: hp('2%')}}>
                <View style={styles.view}>
                  <Text style={{color:"#79dea8",fontFamily:"roboto",fontSize:wp('5%')}}>Order ID: 1501</Text>
                  {/* <View style={styles.btnstyle1}>
                    <Text style={{ color:"#ffffff"}}>Delivered</Text>
                  </View> */}
                </View>
                <Text style={styles.text1}> Delivery Date:
                  <Text style={styles.text2}> 22th january 2020 </Text>
                </Text>
                <Text style={styles.text1}> Restaurant Name:
                  <Text style={styles.text2}> Hotel Plaza </Text>
                </Text> 
                <Text style={styles.text1}> Customer Name:
                 <Text style={styles.text2}> Michael Jorden </Text>
                </Text>
                <Text style={styles.text1}> Number of Menu Items: 
                  <Text style={styles.text2}> 6 </Text>
                </Text>
                <Text style={styles.text1}> Total Price:
                 <Text style={styles.text2}> 500000 INR </Text>
                </Text>
             </View>
           </View>

          <View style={styles.cardstyle1}>
            <View style={{ backgroundColor: "#424242", padding: hp('2%')}}>
              <View style={styles.view}>
                <Text style={{color:"#79dea8",fontFamily:"roboto",
                fontSize:wp('5%')}}>Order ID: 1505</Text>
                {/* <View style={styles.btnstyle1}>
                  <Text style={{ color:"#ffffff"}}>Delivered</Text>
                </View> */}
              </View>
               
                <Text style={styles.text1}> Delivery Date:
                <Text style={styles.text2}> 20th November 2019 </Text>
                </Text>
                 
                <Text style={styles.text1}> Restaurant Name:
                <Text style={styles.text2}> Hotel Rechie Rich   </Text>
                </Text>
                <Text style={styles.text1}> Customer Name:
                <Text style={styles.text2}> Michael Jorden </Text>
                </Text>
                 <Text style={styles.text1}> Number of Menu Items: 
                  <Text style={styles.text2}> 4 </Text>
                </Text>
                <Text style={styles.text1}> Total Price:
                 <Text style={styles.text2}> 80000 INR </Text>
                </Text>
              
            </View>
            </View>
           
          </ScrollView>
      </View>
      
    );
  }
}
