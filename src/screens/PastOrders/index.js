import React, { Component } from "react";
import {  View,ScrollView,TouchableOpacity,Text,FlatList} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styles from './styles';
import {Header} from '../../components/Header';
import Data from '../../Data/Data.json';

export default class PastOrder extends Component {
constructor(props) {
    super(props);
    this.state = {
    loading: true,
      
    };
   }
  render() {
    return (
      <View style={styles.container}>
        <View style={{backgroundColor:"#212121"}}> 
        <Header>PAST ORDERS</Header>
        </View>
        <ScrollView>
        <FlatList
            data={Data.pastorders}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) =>
          <View style={styles.cardstyle1}>
            <View style={{ backgroundColor: "#424242", padding: hp('2%')}}>
                <View style={styles.view}>
                  <Text style={{color:"#79dea8",fontFamily:"roboto",fontSize:wp('5%')}}>Order ID: {item.OrderID}</Text>
                  <View style={styles.btnstyle1}>
                    <Text style={{ color:"#ffffff"}}>Delivered</Text>
                  </View>
                </View>
                <Text style={styles.text1}> Delivery Date:
                  <Text style={styles.text2}>{item.DeliveryDate} </Text>
                </Text>
                <Text style={styles.text1}> Restaurant Name:
                  <Text style={styles.text2}>{item.RestaurantName} </Text>
                </Text> 
                <Text style={styles.text1}> Customer Name:
                 <Text style={styles.text2}>{item.CustomerName} </Text>
                </Text>
                <Text style={styles.text1}> Payment Type:
                 <Text style={styles.text2}>{item.PaymentType} </Text>
                </Text>
             </View>
           </View>
           }
             keyExtractor={(item, index) => index.toString()}
              />
          </ScrollView>
      </View>
      
    );
  }
}
