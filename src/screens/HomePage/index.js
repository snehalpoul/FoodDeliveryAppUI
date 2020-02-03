import React, { Component } from "react";
import {  Alert,View, Switch,ScrollView,Text,TouchableOpacity,FlatList,RefreshControl} from 'react-native';
import styles from './styles';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Data from '../../Data/Data.json';
import {Header} from '../../components/Header';

export default class HomePage extends Component {
   constructor(props) {
    super(props);
    this.state = {
      loading: true,
      switchValue: false,
      refreshing: false,
    };
}

     toggleSwitch = () => {
         if(!this.state.switchValue){
          Alert.alert(
            'Confirmation',
            'Do You Want Start Shift?',
            [
              // {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
              {
                text: 'Cancel',
                onPress: () => this.setState({switchValue:false}),
                style: 'cancel',
              },
              {text: 'OK', onPress: () =>  this.setState({switchValue: !this.state.switchValue})},
            ],
            {cancelable: false},
          );
         }else{
          Alert.alert(
            'Confirmation', 
            'Do You Want Stop Shift?',
            [
              // {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
              {
                text: 'Cancel',
                onPress: () => this.setState({switchValue:true}),
                style: 'cancel',
              },
              {text: 'OK', onPress: () =>  this.setState({switchValue: this.state.switchValueue})},
            ],
            {cancelable: false},
          );
         }
   }
    
 onRefresh = () => {
    this.setState({ refreshing: true });
    setTimeout(() => {
      this.setState({ refreshing: false });
    }, 2000);
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.head}>
        <Header>MY ORDERS</Header>
        <Switch
             style={{justifyContent:"flex-end"}}
              value={this.state.switchValue}
              onValueChange ={()=>this.toggleSwitch()}/>  
              {/* onValueChange ={(value)=>this.setState({switchValue})}/>   */}
        </View>
         <ScrollView
        refreshControl={
          <RefreshControl
           refreshing={this.state.refreshing}
           onRefresh={this.onRefresh}
           title="Pull to refresh"
          />
        }
      >
          <TouchableOpacity activeOpacity={0.9} onPress={() =>
                this.props.navigation.navigate("OrdersDetailscreen")}>
                <FlatList
             data={Data.home}
             showsVerticalScrollIndicator={false}
             renderItem={({item}) =>
          <View style={styles.cardstyle1}>
            <View style={{ backgroundColor: "#424242", padding: hp('2%')}}>
               
             <View>
              <View style={styles.view}>
                <Text style={styles.text1}> Order ID:
             <Text style={styles.text2}> {item.OrderID}</Text>
                </Text>
                <View style={styles.btnstyle1}>
                  <Text style={{ color:"#ffffff"}}>Ready</Text>
                </View>
                </View>
               <Text style={styles.text1}> Restaurant Name:  
                  <Text style={styles.text2}> {item.RestaurantName} </Text>
                </Text>
                <Text style={styles.text1}> Customer Name: 
                  <Text style={styles.text2}> {item.CustomerName} </Text>
                </Text>
                <Text style={styles.text1}> Number of Menu Items: 
                  <Text style={styles.text2}> {item.NumberofMenuItems} </Text>
                </Text>
               
           </View>
           </View>
          </View>
            }
             keyExtractor={(item, index) => index.toString()}
              />
            </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.9} onPress={() =>
                this.props.navigation.navigate("OrdersDetailscreen")}>
                <FlatList
             data={Data.homepickedup}
             showsVerticalScrollIndicator={false}
             renderItem={({item}) =>
          <View style={styles.cardstyle1}>
            <View style={{ backgroundColor: "#424242", padding: hp('2%')}}>
               
             <View>
              <View style={styles.view}>
                <Text style={styles.text1}> Order ID:
             <Text style={styles.text2}> {item.OrderID}</Text>
                </Text>
                <View style={styles.btnstyle2}>
                  <Text style={{ color:"#ffffff"}}>Picked-up</Text>
                </View>
                </View>
               <Text style={styles.text1}> Restaurant Name:  
                  <Text style={styles.text2}> {item.RestaurantName} </Text>
                </Text>
                <Text style={styles.text1}> Customer Name: 
                  <Text style={styles.text2}> {item.CustomerName} </Text>
                </Text>
                <Text style={styles.text1}> Number of Menu Items: 
                  <Text style={styles.text2}> {item.NumberofMenuItems} </Text>
                </Text>
               
           </View>
           </View>
          </View>
            }
             keyExtractor={(item, index) => index.toString()}
              />
            </TouchableOpacity>

        
          
        </ScrollView>
      </View>
    );
  }
}
